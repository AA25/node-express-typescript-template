FROM node:15-alpine AS test

WORKDIR /app

# Only copy the package.json file to work directory
COPY package.json .

# Install production dependencies
RUN npm install --production

# move production node_modules outside of app dir to avoid linting and so on
RUN mv node_modules ../prod_node_modules

# Install ALL dependencies including devDependencies
RUN npm install

# Copy all other source code to work directory
COPY . /app

# Run TypeScript
RUN npm run tsc

# Run tests
RUN npm test

# ---- Production ----
FROM node:15-alpine

WORKDIR /app

# Only copy what is necessary for production
COPY package.json .
COPY src .
COPY --from=test /prod_node_modules ./node_modules
COPY --from=test /app/dist ./dist

# Start
CMD npm run productionStart

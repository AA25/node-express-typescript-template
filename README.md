#### Node template project
This is my template project for creating a Node express application using TypeScript. It also includes unit testing,
 prettier, eslint and docker integration.  

### Running project (via docker)
* Run docker
    * (Prerequisite: Install docker)
    * Run the below command from the root directory of this app
        * `docker-compose up --build` 
    * This will spin up the api instances. See `docker-compose.yml` for more info
        * Unit tests are ran as part of the docker build stage (See test folder for tests)

### Running project (via npm)
* Run application
    * (Prerequisite: node 15)
    * Run the below command from the root directory of this app
        * `npm start`
    * Run tests
        * `npm test`
    * Run lint check (+ fix)
        * `npm run lint` (`npm run lint-fix`)

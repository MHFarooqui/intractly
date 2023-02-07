### Node Js API consuming freshworks api
- This is a node js api which consumes freshworks open api to perform CRUD operations on contacts.
- This api can create, update, read and delete contacts from freshworks CRM.
- Screenshots of sample requests are provided in the `images/` folder.

## Directory structure
- Index.js : starting point of the project.
- `routes/` : Has a separate module for each resource e.g. `contacts` all the routings for the application are exported from `index.js`.
- `models` : Contains classes representing model of requests e.g. `createContactRequest` & `updateContactRequest`.
- `libs` : Contains helper functions which are used at multiple places in the project. e.g. *Axios interceptors* & *validator functions*.
- `images` : contains screenshots of the sample requests.
- `controllers` : contains controllers for the application, different module for each resource.

## Running application
- Run `npm install` to install dependencies after cloning this repo.
- Once all dependencies are installed, run `npm run start` and start making requests on `localhost:8000` or any other port which you may enter in .env file.
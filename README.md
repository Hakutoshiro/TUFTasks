# &middot; CODE SUBMISSION &middot;
## Task Description:
This project is a full-stack web application built with Node.js, Express.js, MySQL, React, and Tailwind CSS. Node.js provides the runtime environment for JavaScript, Express.js for the backend, MySQL for the database, and React for the frontend, and Tailwind CSS for styling the React components.
## TECH STACK:
    Frontend:
        React: JavaScript library for building user interfaces.
        Tailwind CSS: Utility-first CSS framework for styling the UI components.

    Backend:
        Node.js: JavaScript runtime environment.
        Express.js: Web application framework for Node.js, used for building
        the backend server and RESTful APIs.

    Database:
        MySQL: Relational database management system used for storing 
        and managing application data.

## ENVIRONMENT VARIABLES:
The project uses the following environment variables for backend:
-  `FRONTEND_URI`: Frontend URI for CORS.
- `HOSTNAME`:The host of the MySQL database.
- `USER`: The user for the MySQL database.
-  `PASSWORD`:The password for the MySQL database.
-  `DB_PORT`:The port of the MySQL server.
-  `DATABASE`:The name of the MySQL database.

The project uses the following environment variables for frontend:
- `VITE_BACKEND_URL`:Backend url for frontend.

## Installation:
1. Clone the repository:
`https://github.com/Hakutoshiro/TUFTasks`
2. Install the dependencies:

  
for Frontend : 
`cd Frontend`
 `npm install`
 
for Backend :
 `cd Backend`
`npm install`

4. Create a `.env` file in the root of the frontend and backend folders of project and set the environment variables.
5. Start the backend server:
	`node index.js`
6. Start the frontend server: 
	`npm run dev`

# vertex-patient-view

This project integrates a React frontend with an Express backend and an SQLite database. The backend server is started with the command npm run start and runs on port 4000, while the frontend server is initiated using npm run dev.

Overview
Originally, this project attempted to blend React with multiple HTML pages for Home, About, Contact, and Survey sections. In the current version, React components have been created for each section, and React Router has been incorporated for seamless navigation among these components. To ensure adherence to the single-page application rule, a single index.html file with a root div has been implemented.

Tracking User Responses
To track user responses to the survey questions, the project employs the responses state, which is an array of objects with the structure:

{
  questionId: <questionId>,
  response: <response>,
}

These objects are modified using the handleUserResponse function, which updates the corresponding response based on the questionId.

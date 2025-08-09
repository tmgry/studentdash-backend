**Student Dashboard Backend**

This is the backend for the Student Dashboard/Job Tracker app -- a full-stack project built with the MERN stack to help students manage academic tasks, job applications, and planning.

**Tech Stack**
- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman (for testing)

**API Endpoints**

Auth:
- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Login a user

Tasks:
- `POST /api/tasks` - Create a task
-  `GET /api/tasks/:userID` - Get all tasks
-  `PUT /api/tasks/:id` – Update a task
- `DELETE /api/tasks/:id` – Delete a task

Job Applications:
- `POST /api/jobs` – Create a job entry
- `GET /api/jobs/:userID` – Get all jobs
- `PUT /api/jobs/:id` – Update a job
- `DELETE /api/jobs/:id` – Delete a job

Features Implemented:
- RESTful API for tasks and job applications
- MongoDB schema modeling with Mongoose
- User registration and login with hashed passwords
- Environment variable configuration
- Postman testing for all endpoints

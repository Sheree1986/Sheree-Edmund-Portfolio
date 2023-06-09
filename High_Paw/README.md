## High_Pawn - Project #1

High Paw! 🐾 A Full Stack application where users can create and attend puppy playdates with geolocation.

## Situation
Welcome to High-Paw, where Dog Meets World! A full stack web application where the owner can create doggie playdates. Using a third-party mapping Api a user can add a pin to the map to create a new hangout. Once created, other users can view and/or join the hangout. 


## Task 

 **The project folder structure is as followed**:

<details>

   🐾 client
 
   🐾 server

   🐾 docker-compose.yml

   🐾 .github/workflows

</details>

This project fulfills job function 1 through 6 as a Fullstack MERN Application:

**This includes the following competencies:**: 

<details>

🐾 JF 1.1 Can explain all stages of the software development life cycle (what each stage contains, including the inputs and outputs). This application is a full-stack MERN Application. By working with the technologies listed, my team and I were able to complete the full software development life cycle.
   
🐾 JF 1.5 Can follow software designs and functional/technical specifications. We created the specifications. Using the Kanban Board, we could outline the requirements and track them as they were completed. 
   
🐾 JF 1.6 Can follow company, team or client approaches to continuous integration, version, and source control. Kharmalina was the point person on this project. While I did not work directly on this aspect of this project. Previous projects show that I understand the mechanics of CI/CD.			

🐾 JF 2.2 Can identify relevant and up-to-date software designs and how to read and implement functional/technical specifications. Yes as a team we chose to find an alternative solution to Redis once we learned that using it would cause issues with CI/CD. When implemented Railways and Render to accomplish the functionality we needed.
   
🐾 JF 2.3 Can develop effective user interfaces. This is demonstrated in the deployed website. The project user interface is visually appealing. In addition, we used error handling on both the backend and frontend to alert the users if there is an issue.
   
🐾 JF 2.8 Can translate wireframes into User Interfaces. The wireframe is attached in the file tree above. While we couldn't get the dog paws SVG to be a background as the original wireframe showcased. This was due to learning Tailwind and not having enough time to implement the desired design. Overall I believe the final product accomplished our intended goals.		


🐾 JF 3.2 Can explain the principles and uses of relational and non-relational databases. In S.A.S travel Adrian introduced me to MongoDB Atlas. It has been my preferred database since then. Because it is stored in the cloud it made collaboration more streamlined.
   
🐾 JF 3.6 Can implement a RESTful API. On this project, the backend team accomplished the routes, models, and controllers. Adrian and I took these endpoints and connected them on the front end to allow for user registration, login in, and hangout creation.
   
🐾 JF 3.7 Can implement authentication and authorization to an API. Hashing is the name of the game. In addition to .env variables.
   
🐾 JF 3.8 Can encrypt sensitive data via hashing. Yes, along with JF 3.7

	
🐾 JF 4.3 Is able to build, manage and deploy code into the relevant environment. Through the .git/workflows, and docker files.
   
🐾 JF 4.8 Can identify and create test scenarios. This was accomplished on the backend. Unfortunately, the JSX file format caused difficulty in completing the front-end testing. If we had more time to research, I am confident will have completed this task.

🐾 JF 5.1 Knows relevant and up-to-date software testing frameworks and methodologies. Yes but unfortunately was not able to implement it in the front end of this project.
   
🐾 JF 5.4 Understands and is able to identify and create test scenarios. Yes, the desire test scenarios were to see if the user login and/or registered successfully. If the data render correctly on the page.
   
🐾 JF 5.6 Understands how to follow testing frameworks and methodologies. See JF 5.4.

🐾 JF 6.3 Able to communicate software solutions and ideas to technical and non-technical stakeholders. Yes, I always showcase the project to my manager and two other developers on my team.
   
🐾 JF 6.4 Works independently and takes responsibility. For example, has a disciplined and responsible approach to risk, and stays motivated and committed when facing challenges. Kanban Board outlines how each group member took responsibility and accountability for different action items on the project.			
   
🐾 JF 6.6 Shows initiative for solving problems within their own remit, being resourceful when faced with a problem to solve. Dog Fact API and deletion of the refresh token presented two problems on the front end. While Redis was the backend issue. Through collaboration and coach mentorship, we were able to come up with a solution to these three issues.			

</details>



## Action 

<details>
🐾 In this team of four, I worked with Adrian on the Frontend. We mainly peer coded. My main contribution to the project was Using the DOG API to render the fact page and create the profile page. Refactoring code and implementing the basic structure for the frontend. Adrian is the mastermind that built upon the structure to create a user interactive and visible appealing design. 


🐾 Worked collaborated with the backend (Patrick and Kharmalina) to connect the login and registration routes. 

🐾 Focused on debugging issues with deleting the refresh token upon user logout.

🐾 Attempted to implement frontend testing. Unfortunately testing on .jsx files was a blocker. 

</details>






## Result 

**Links**

 🐾 [Website](https://high-paw-ugau.onrender.com/)
 
 🐾 [Video Presentation](https://www.youtube.com/watch?v=b6yPHPoDQ2Y)


## Features

MVP
- Login and Register Functionality high-level authentication and authorization
- Map functionality 
Stretch Goals
- Blog feature including posts, recipes, facts, etc

## Environment Variables     


To run this project, you will need to add the following environment variables to your .env file

Client folder:

`VITE_MAPBOX_API`

Server folder:

`PORT`

`MONGODB_URI`

`DB_NAME`

`ACCESS_TOKEN_SECRET`

`REFRESH_TOKEN_SECRET`

## Installation

Install High Paw with npm

```bash
  cd client
  npm install
  npm run dev
```

```bash
  cd server
  npm install
  npm start
```

Install High Paw with Docker Compose

```bash
  docker-compose up
```

## Technology 

**Frontend**
<details>
🐾 React
   
🐾 Tailwind CSS
   
🐾 Cloudinary
</details>

**Backend**
<details>
🐾 express
   
🐾 jsonwebtoken
   
🐾 @hapi/joi
   
🐾 bcrypt
   
🐾 mongoose
   
🐾 Database
   
🐾 MongoDB
</details>

**Deployment**
<details>
🐾 Railway (backend)
   
🐾 Render (frontend)
</details>

## Authors

- [Kharmalina Tong](https://www.github.com/Kharmalina)
- [Patrick Borgella Jr](https://github.com/Patrickb001)
- [Adrian Baltag](https://github.com/adrianbaltag)
- [Sheree Edmund](https://github.com/Sheree1986)


## Acknoledgements

- [Awesome Readme Templates](https://readme.so/editor)   

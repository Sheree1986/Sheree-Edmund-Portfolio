# S.A.S Travel Journal - Project #3
This is a travel journal, fullstack project, containing a user perspective
 and also an admin perspective.

## Situation
“Welcome to our travel blog. We created this backend application to create a community where
multiverse apprentices can share their travel journeys while learning how to" + `${area of study}`


## Task
**The project folder structure is as followed:**

<details>

    ✈️ client
 
    ✈️ server

    ✈️ .github/workflows

</details>



This project fulfill job function 1, 2, 3 and 6 as a Fullstack MERN Application:

**This includes the following competencies:**: 

<details>

✈️ JF 1.1 Can explain all stages of the software development life cycle (what each stage contains, including the inputs and outputs). This project we completed a Fullstack Mern Application. 
   
✈️ JF 1.5 Can follow software designs and functional/technical specifications. From the wireframe. To following the user stories to completing the project MVP. 


✈️ JF 2.2 Can identify relevant and up-to-date software designs and how to read and implement functional/technical specifications. Yes, React-Router-Dom and make sure each member team member had the right version of the dependencies.
   
✈️ JF 2.3 Can develop effective user interfaces. Created the routes for the users to login and register. On the frontend Adrian completed the user interfaces. Along with the awesome spinning cube. 
   
✈️ JF 2.8 Can translate wireframes into User Interfaces. Yes, please see JF 2.3.			


✈️ JF 3.2 Can explain the principles and uses of relational and non-relational databases. We used MongoDB Atlas to implement the database in this group project. 
   
✈️ JF 3.6 Can implement a RESTful API. Sharee and I worked on the backend creating the routes, controller and models needed for the RESTful API. We used hashing via bcrypt in addition to .env variable.

✈️ JF 3.7 Can implement authentication and authorization to an API. See JF 3.6.
   
✈️ JF 3.8 Can encrypt sensitive data via hashing. See JF 3.6.


✈️ JF 6.3 Able to communicate software solutions and ideas to technical and non-technical stakeholders. This is demonstrated in the video presentation. 
   
✈️ JF 6.4 Works independently and takes responsibility. For example, has a disciplined and responsible approach to risk, and stays motivated and committed when facing challenges. Learning curving using MongoDB Atlas for the first time. We overhaul Sequelize to allow for better collaboration and ability to see input and DB updates in realtime. 
   		

</details>

## Action 

<details>
✈️ Peered program with Sharee to complete the backend. Worked on the controller, models, routes and middleware

✈️ Refactored the code to debug login/registration issues with the frontend

✈️ Learning how to access mongoose db via the cloud (Atlas)

✈️ Deployed the website on render and railways


</details>



## Result 
✈️ [Website]()

✈️ [Video Presentation](https://drive.google.com/file/d/1CGLivEK-sHNQTIXRuheKA7hG44hmLYXy/view?usp=sharing)

## Technology 

**Frontend**
<details>
✈️ React
   
✈️ Bootstrap

</details>

**Backend**
<details>
✈️ express
   
✈️ jsonwebtoken
   
✈️ bcrypt
   
✈️ mongoose
   
✈️ MongoDB
</details>

**Deployment**
<details>
✈️ Railway (backend)
   
✈️ Render (frontend)
</details>


# Features

<details>
USER
- able to login/register
- able to use CRUD (CREATE post, UPDATE post, DELETE post, VIEW self posts)
ADMIN
-able to login/register
-able to see total number of users/posts
</details>


# Environment Variables
To run this project, you will need to add the following environment variables to your .env file
`PORT`
`MONGO_URI`

# Installation
git clone https://github.com/S-A-S-Back-For-More/S.A.S-Travel.git


```bash backend
from root cd server - install dependencies
    npm install
    add environment variables values in .env(provided by request)
    npm start
```

```bash frontend
from root cd client - install dependencies
    npm install
    npm run dev
```


# Authors
- [@adrianbaltag](https://github.com/adrianbaltag)
- [@Sheree1986](https://github.com/Sheree1986)
- [@nukandtudasmom](https://github.com/nukandtudasmom)


# Tier 1 — MVP Application - CRUD and REST 🔓
<details>

   ✈️ As a User, I want to read entries from the database  

   ✈️ As a User, I want to add entries to the database 

   ✈️ As a User, I want to delete entries from the database 

   ✈️ As a User, I want to edit entries  in the database 

   ✈️ As a User, I expect to do all of the above by accessing RESTFUL routes 

   ✈️ As a User, I want to log in to a deployed app.

   ✈️  🏁 Original Sequelize Database Backend Deployed app https://s-a-s-travel.onrender.com 🏁


   ✈️  🏁 Newer Mongo Atlas Database Back Deployed app https://s-a-s-travel-frontend.onrender.com 🏁


   ✈️  🏁 Postman API Documentation https://documenter.getpostman.com/view/17739658/2s8ZDR7RVC 🏁  

   
   ✈️  🏁 YouTube Presentation Video https://drive.google.com/file/d/1CGLivEK-sHNQTIXRuheKA7hG44hmLYXy/view?usp=sharing 🏁  

  

</details>

  
# Tier 2 — Login, Hashing 🔓
<details>
  
   ✈️ As a User, I want to be able to log in to my API
  
   ✈️ As a User, I want any passwords saved to be hashed and salted before saved to the database (note: If you use OAuth, you might not even store passwords at all!)
</details> 

#  Tier 3 — Register 🔓
 <details>
  
   ✈️ As a potential User, I want to be able to sign up for the API
  
   ✈️ As a signed-up User, I want to be granted authorization to access the API
</details> 

# Tier 4 — Authorization
<details>
 
  ✈️ As a User, I want my API protected from unauthorized Users 🚫
 
  ✈️ As an unauthorized User, I want a helpful message telling me I do not have access to the API
 
  ✈️ As a user, I want to receive a helpful error message anytime there is a problem with the request (i.e. error handling middleware)
  
  ✈️ As a User, I expect not to be able to create new entities without first logging in / authenticating in some way (token/session)
 
  ✈️ As a User, I want my data to only be accessible by myself
 
  ✈️ As a User, I want my data to only be editable/deletable by myself
</details>

# Tier 5 — Associated Data
<details>

  ✈️ In addition to the Tier 1 MVP criteria…
 
  ✈️ As a User, I want to be able to read a single entry
 
  ✈️ As a User requesting a single entry, I want to see the associated user info and other associated data.
</details>

# Tier 6 — Admin 🛡️ vs User 🕵
  <details>

  ✈️ 🛡️ As an Admin, I want to have a special super-user account type that allows access to content Users don’t have access to 
 
  ✈️ 🕵 As a basic User, when requesting a list of all entries, I expect to only see my own entries.

  ✈️ 🛡️ As an Admin, when requesting a list of all entries, I expect to be able to see all entries, regardless of user/owner
 
  ✈️ 🛡️ As an Admin, I want to be able to edit other users’ information via the API
 
  ✈️ 🛡️ As an Admin, I want to be able to delete or edit any entity, regardless of user/owner
  </details>

#  Bonus Goals 
<details>
 
🏆 Bonus Goal 1: Front End Login
   * As a User, I want to be able to use a client-side form to Log in/out of my application.
   * As a User, I want to be able to sign up using a client-side form. This could be via a traditional web form, or more preferably, with a React app.
 
🏆 Bonus Goal 2: Seed 
   * As a Developer cloning the repo for the first time, I want to be able to run a seed command and have the database populated with data.
   * As a Developer, I want multiple users to be seeded to the database

🏆 Bonus Goal 3: Testing 
   * As a Developer, I want to be able to run a test commend (such as npm test or the command specific to your technology/project) and have all my tests run.
   * As a Developer, I want to know if my new code has broken anything (passing tests means it theoretically didn’t)

🏆 Bonus Goal 4: Continuous Integration
   * As a Developer, I want the tests to run each time I open a PR to the main branch. 
   * As a Developer, I want failing tests to block a merge to main
 Note: GitHub Actions or TravisCI are each great options for this.

🏆 Bonus Goal 5: Pagination
   * As a Developer, I want to see many (Hundreds? Thousands?) entries seeded to use in testing. (Use an external package like faker to generate the data)
   * As a User requesting all entries, I want to receive paginated data (10 results instead of 5K)
   * As a User requesting all entries, I want to be able to request the next “page” or set of data
   * As a User requesting all entries, I want to be able to edit the page size (10 results at a time vs 50 or other amount)
 
🏆 Bonus Goal 6: External API Automation
   * You could integrate external API for cool and fun functionality.  
   * Intermediate - As a User signing up, I want to receive an email confirmation upon registration.  Use something like SendGrid - (100 free emails per day)
   * Advanced - As an Admin, I want to receive a daily email report with data about my entities (inventory value, daily throughput, etc).  I expect the report to come in at the same time every day.  You could achieve this by creating an interval-based Cron Job, running on a serverless host like Google Cloud or AWS Lambda.

🏆 Bonus Goal 7: Front End Application
    
  * As a User, I want to access, create, edit, and delete my data all from a front-end GUI application.

  * As a returning user, I want to be automatically logged in, instead of having to enter my credentials each time I revisit the application.

  * As a User, I want my app to be visually stunning
 
</details>







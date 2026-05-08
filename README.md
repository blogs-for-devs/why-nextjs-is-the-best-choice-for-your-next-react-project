# Why Next.js is the Best Choice for Your Next React Project
This is an example of a To Do List app, which is used to support [this blog article](https://blogsfordevs.com/article/why-nextjs-is-the-best-choice-for-your-next-react-project) on Next.js. It is a simple Next.js project, set up with create-next-app, which demonstrates the concepts of Server Components and Server Actions.

## Getting Started
### Set up the database
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) and log in or register (it's free)
2. Create a new Project
3. Create a new Cluster
   1. Choose the M0 / free tier
   2. Name it and choose a provider and region
   3. Create deployment
   4. Create a database user (note the username and password)
   5. Copy down the SRV connection string (example: `mongodb+srv://your_db_user:your_db_user_password@your_cluster.mizjqjx.mongodb.net/?appName=your_cluster`)

### Get the app running
1. Clone this repository into an IDE, such as Visual Studio Code
2. Run `npm install` in a terminal to install the necessary packages
3. Open the `.env.development.local` file, and enter your Mongo DB SRV connection string for the `MONGODB_URI`
4. Run `npm run dev` in a terminal to start the application
5. Open http://localhost:3000/ in a browser

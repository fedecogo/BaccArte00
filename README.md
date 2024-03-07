#  🫐 Bacca - Sito di distillati 
## 💻 Full Stack Capstone Project

This web application enables users to register and log in to create personalized bottles by selecting patterns crafted by artists or from default patterns suggested by us. All images featured were captured by the Bacca Spirits team, a company established in 2018 specializing in distillate production and trade. The application was developed using React for the front-end, Spring Boot for the back-end, and PostgreSQL for data storage.

#📋 Functionality
User registration and login with JWT token
Access to technical specifications of offered products
Creation of personalized bottles
Personal cart and the ability to purchase custom-created bottles and regular ones
Administration of information sheets by the admin (view all users and all created bottles, create non-custom bottles, add bars selling the products, purchase products via PayPal WIP)

## 🎬 View the full video project
Link to video project

# 📦  Frontend Technologies Used 

FontAwesome: For scalable vector icons.
Redux Toolkit: For efficient state management.
Bootstrap: For responsive and sleek styling.
React Leaflet: For interactive maps.
React Router DOM: For declarative routing.
React Social Media Embed: For embedding social media posts.
SweetAlert2: For beautiful and customizable alerts.
html2canvas: For the creation of custom bottles

# 📦  Backend Technologies Used 

Spring Boot Starter Data JPA: For easy and efficient data access.
Spring Boot Starter Security: For securing the application.
Spring Boot Starter Validation: For validating data.
Spring Boot Starter Web: For building web applications.
PostgreSQL: For robust and reliable data storage.
Lombok: For reducing boilerplate code.
JSON Web Token (JWT): For secure communication.
Cloudinary HTTP: For cloud-based image and video management.


Clone the backend repository locally from here.
# 📦https://github.com/fedecogo/BaccArte0
Navigate to the project directory in the terminal:


cd <project_directory>
Install the necessary dependencies:


# 🖥️ npm install
Create a file named env.properties (an env.example file has been provided in the repository).

Add the required environment variables in the env.properties file, including server port, PostgreSQL credentials, secret key, Cloudinary credentials, etc.

Create a PostgreSQL database with the same name as specified in the env.properties file.

Uncomment the database population script in the backend project and run the application from BaccArte0Application.

After database population, re-comment the database population script.

Clone the frontend repository locally from here.

Navigate to the frontend project directory in the terminal:

# 

cd <project_directory>
Install the necessary dependencies:

# 

# 🖥️ npm install
Start the application:

# 

# 🖥️ npm start
The application will launch in your default web browser at localhost:3000.
⚠️ Important Note:
Non saltare nessun passaggio
🖊️ Author
Federico Capizzi
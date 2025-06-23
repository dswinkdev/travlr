# Travlr Getaways Full Stack Web Application

This repository contains the final iteration of the **Travlr Getaways** full stack travel booking application. This project was developed as part of the CS 465 Full Stack Development course and showcases both the customer-facing and admin-facing sides of the application using the MEAN stack (MongoDB, Express, Angular, Node.js).

## Table of Contents

- [Project Overview](#project-overview)
- [Architecture](#architecture)
- [Functionality](#functionality)
- [Testing](#testing)
- [Reflection](#reflection)
- [Run Instructions](#run-instructions)

---

## Project Overview

Travlr Getaways is a full stack travel booking web application. It allows customers to:
- Create accounts
- Search for travel packages
- Book trips
- View upcoming trip itineraries

It also includes an **admin-only interface** where administrators can:
- Manage travel packages
- Update pricing
- Maintain the customer database

The project includes a secure login system, a RESTful API, and a single-page admin interface built using Angular.

---

## Architecture

This application uses two types of frontend development:

- **Express HTML with Handlebars:** Used to create the static customer-facing site. Handlebars templates dynamically render trip data via JSON from the backend.
- **Angular SPA:** Used to create the admin panel. The single-page application improves user experience with dynamic updates and clean routing.

The backend is built with **Node.js** and **Express**, and uses a **MongoDB NoSQL database** to store user, trip, and booking information. MongoDB's flexibility and ability to store JSON-like documents made it ideal for handling travel package data.

---

## Functionality

**JSON vs JavaScript**:  
While JavaScript is a full-fledged programming language used in both the front and back ends, **JSON** is a lightweight data-interchange format used to transmit data between them. In this project, the server returns JSON data to the frontend, which is then dynamically rendered in the UI.

**Code Refactoring and Reusable Components**:  
I refactored several parts of the project during development. A key improvement was building **reusable Angular components** for trip listings and admin dashboards. This reduced redundancy, simplified updates, and improved maintainability of the frontend UI.

---

## Testing

**API Testing**:  
I tested all API endpoints (GET, POST, PUT, DELETE) using Postman to ensure proper functionality. For example:
- GET `/api/trips`
- POST `/api/bookings`
- PUT `/api/trips/:id`
- DELETE `/api/users/:id`

**Security Testing**:  
After implementing **JWT-based authentication**, I tested both protected and unprotected routes. I ensured that:
- Users could not access admin routes without a valid token
- Tokens were issued and stored securely
- Invalid or expired tokens triggered proper error responses

**Key Concepts Used**:
- RESTful endpoints
- HTTP methods and headers
- Authorization tokens and secure endpoints

---

## Reflection

This course gave me hands-on experience with full stack development and helped me reach an important milestone in my software engineering journey. I learned how to:
- Design and implement RESTful APIs
- Integrate a NoSQL database
- Build both static and dynamic frontends
- Secure applications using JWT authentication

By building this project, I gained confidence in managing complete application lifecycles. I now have a solid, portfolio-ready web application that demonstrates my skills to future employers.

---

## Run Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/dswinkdev/travlr.git
   cd travlr

2. **Backend Setup**
   ```bash
    cd server
    npm install
    npm run seed  # (optional: to seed test data)
    npm start

3. **Frontend Setup (Admin SPA)**
   ```bash
    cd client
    npm install
    ng serve

4. Access
   - Customer-facing site: http://localhost:3000
   - Admin SPA: http://localhost:4200

GitHub Repository
You can find the complete project and all source code in this repository:
👉 https://github.com/dswinkdev/travlr

Developed by: Derricko Swink
Course: CS 465 – Full Stack Development
Institution: Southern New Hampshire University

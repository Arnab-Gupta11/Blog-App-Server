# 📦 **Project Name**: Blog Management System

This is an **Express.js-based application** designed for managing blog posts. It allows users to create, update, and delete blogs based on their role (Admin or User). Admins have additional privileges like blocking users and deleting any blog.

---

## 📝 **Table of Contents**

1. [About the Project](#about-the-project)
2. [Features](#features)
3. [Project Structure](#project-structure)
4. [Technologies Used](#technologies-used)
5. [Installation and Setup](#installation-and-setup)
6. [Usage](#usage)
7. [API Endpoints](#api-endpoints)
8. [Contact](#contact)

---

## 🛠️ **About the Project**

A RESTful Express application built with MongoDB, Mongoose, and TypeScript for managing blog posts. The system supports role-based authentication and authorization, with users able to create and manage their own blogs, while admins can manage users and blogs. This project includes the following core features:

- **Authentication**: Secure login system with JWT.
- **Authorization**: Differentiated access control based on user roles (admin, user).
- **Blog API**: Endpoints for creating, updating, deleting, and retrieving blogs.

---

## ✨ **Features**

### **1. User Roles**

- **Admin Role**:

  - **Manage Users**: Admins can block any user by updating the `isBlocked` flag. Blocked users cannot log in or create/update blogs.
  - **Delete Blogs**: Admins can delete any blog from the platform.
  - **No Blog Editing**: Admins cannot update blogs created by users.

- **User Role**:
  - **Authentication**: Users must register and log in before performing any actions.
  - **Create Blogs**: Logged-in users can create new blogs with a title, content, and author details.
  - **Update Blogs**: Users can update their own blogs (title, content) after logging in.
  - **Delete Blogs**: Users can delete their own blogs.
  - **Limited Permissions**: Users cannot perform any admin-level actions such as managing other users or deleting blogs created by others.

### **2. Authentication & Authorization**

- **Authentication**:

  - Users must log in to access secured routes for creating, updating, and deleting blogs. The login process uses **JWT (JSON Web Token)** for session management and security.
  - Passwords are encrypted using **bcrypt** to ensure user credentials are secure.

- **Authorization**:
  - The system ensures that only users with the appropriate role (Admin or User) can access certain resources and perform specific actions.
  - Admins have full access to manage users and blogs, while users have access only to their own blogs.

### **3. Blog API**

- **Public API for Reading Blogs**:
  - **GET Blogs**: Provides a public API to fetch all blogs with options for searching, sorting, and filtering.

---

## Live Site: https://blog-project-server-six-roan.vercel.app/

---

## 📂 **Project Structure**

```plaintext
📦 src/
├── 📦 app/
│   ├── 📂 config/          # Configuration files
│   ├── 📦 modules/         # Feature-specific modules
│   │   ├── 📦 blog/        # Blog module
│   │   │   ├── blog.controller.ts
│   │   │   ├── blog.interface.ts
│   │   │   ├── blog.model.ts
│   │   │   ├── blog.routes.ts
│   │   │   └── blog.services.ts
│   │   ├── 📦 auth/        # Authentication module
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.routes.ts
│   │   │   └── auth.services.ts
│   │   ├── 📦 admin/        # Admin module
│   │   │   ├── admin.controller.ts
│   │   │   ├── admin.routes.ts
│   │   │   └── admin.services.ts
│   │   ├── 📦 user/        # User module
│   │   │   ├── user.interface.ts
│   │   │   ├── user.model.ts
│   │   │   └── user.validation.ts
├── app.ts                  # Main application file
└── server.ts               # Server configuration
```

## 🚀 **Technologies Used**

| Technology | Purpose                                           | Version Required |
| ---------- | ------------------------------------------------- | ---------------- |
| Node.js    | Runtime environment for building the application. | v20.4.0          |
| Express.js | Framework for creating RESTful APIs.              | v4.18.2          |
| TypeScript | Enhances JavaScript with static typing.           | v5.3.0           |
| MongoDB    | NoSQL database for storing application data.      | v6.0.0           |
| Mongoose   | ODM for MongoDB to model application data.        | v7.0.2           |

## 🛠️ **Installation and Setup**

### **Prerequisites**

Ensure you have the following installed:

- **Node.js** (v18 or later)
- **npm** (Node Package Manager)
- **MongoDB** (local or a MongoDB Atlas cluster)

---

### **Clone the Repository**

```bash
https://github.com/Arnab-Gupta11/Blog-App-Server.git
cd Blog-App-Server
```

### **Install Dependencies**

```bash
npm install
```

### **Setup Environment Variables**

Create a `.env` file in the project root and configure the following variables:

```env
MONGO_URI=mongodb+srv://<your_mongo_user>:<your_mongo_password>@<your_mongo_cluster>/blogAppDB?retryWrites=true&w=majority
PORT=5000
BCRYPT_SALT_ROUNDS=<your_salt_rounds>
JWT_ACCESS_SECRET=<your_jwt_access_secret>
JWT_ACCESS_EXPIRES_IN=<expiry_time>
```

### **Build the Project**

Compile the TypeScript files:

```bash
npm run build
```

## 🧰 Usage

### **Start the Server**

For production:

```bash
npm run start:prod
```

For development:

```bash
npm run start:dev
```

The application will be available at:

```bash
http://localhost:5000
```

## 🔧 API Endpoints

### Authentication

| Method | Endpoint           | Description                    |
| ------ | ------------------ | ------------------------------ |
| POST   | /api/auth/register | Register a new user.           |
| POST   | /api/auth/login    | Login with email and password. |

### Blog Management

| Method | Endpoint       | Description                  |
| ------ | -------------- | ---------------------------- |
| POST   | /api/blogs     | Create a new blog.           |
| PATCH  | /api/blogs/:id | Update an existing blog.     |
| DELETE | /api/blogs/:id | Delete a blog.               |
| GET    | /api/blogs     | Retrieve all blogs (public). |

### Admin Actions

| Method | Endpoint                       | Description                         |
| ------ | ------------------------------ | ----------------------------------- |
| PATCH  | /api/admin/users/:userId/block | Block a user by updating isBlocked. |
| DELETE | /api/admin/blogs/:id           | Delete any blog by admin.           |

---

## ✨ **Contact**

For questions or collaboration, feel free to reach out via email at [arnab.gupta.011@gmail.com](mailto:arnab.gupta.011@gmail.com).

# 📝 Blog Platform with Comments

A full-stack Blog Platform where users can register, log in, create blog posts, and interact through comments. This project demonstrates frontend, backend, and database integration using HTML, CSS, JavaScript, Node.js, Express.js, and MySQL.

---

## 📌 Project Objective

The objective of this project is to develop a blogging platform that allows users to publish content and engage with other users through comments. The application demonstrates user authentication, content management, RESTful APIs, and database integration.

---

## 🚀 Features

### User Authentication
- User Registration
- User Login
- User Logout

### Blog Management
- Create Blog Posts
- View Blog Posts
- Delete Blog Posts

### Comments
- Add Comments
- View Comments on Posts

### Responsive Design
- Mobile-Friendly Layout
- Desktop Support
- Clean User Interface

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MySQL

### Tools
- Visual Studio Code
- Git
- GitHub

---

## 📂 Project Structure

```text
blog-platform/
│
├── frontend/
│   ├── register.html
│   ├── login.html
│   ├── dashboard.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── server.js
│   ├── db.js
│   ├── package.json
│   └── blog.sql
│
├── .gitignore
└── README.md
```

---

## 🗄️ Database Schema

### Users Table

| Field | Type |
|---------|---------|
| id | INT (PK) |
| username | VARCHAR(100) |
| email | VARCHAR(100) |
| password | VARCHAR(100) |

### Posts Table

| Field | Type |
|---------|---------|
| id | INT (PK) |
| title | VARCHAR(255) |
| content | TEXT |
| user_id | INT (FK) |
| created_at | TIMESTAMP |

### Comments Table

| Field | Type |
|---------|---------|
| id | INT (PK) |
| comment | TEXT |
| post_id | INT (FK) |
| user_id | INT (FK) |
| created_at | TIMESTAMP |

---

## ⚙️ Installation Guide

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/blog-platform.git
```

### 2. Navigate to Backend

```bash
cd backend
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Database

Open `db.js` and update:

```javascript
host: "localhost",
user: "root",
password: "YOUR_PASSWORD",
database: "blogplatform"
```

### 5. Import Database

Open MySQL and execute:

```sql
SOURCE blog.sql;
```

### 6. Start Backend Server

```bash
node server.js
```

Expected Output:

```text
MySQL Connected
Server Running On Port 5000
```

---

## ▶️ Running the Project

1. Start MySQL Server
2. Run Backend Server
3. Open:

```text
frontend/register.html
```

4. Register a new account
5. Login
6. Create blog posts
7. Add comments to posts

---

## 🔌 API Endpoints

### Authentication

| Method | Endpoint | Description |
|----------|------------|-------------|
| POST | /register | Register User |
| POST | /login | Login User |

### Posts

| Method | Endpoint | Description |
|----------|------------|-------------|
| GET | /posts | Get All Posts |
| POST | /posts | Create Post |
| DELETE | /posts/:id | Delete Post |

### Comments

| Method | Endpoint | Description |
|----------|------------|-------------|
| GET | /comments/:postId | Get Comments |
| POST | /comments | Add Comment |

---

## 🎯 Learning Outcomes

This project helped in understanding:

- Frontend Development
- Backend Development
- RESTful APIs
- MySQL Database Integration
- CRUD Operations
- User Authentication
- Client-Server Architecture
- Full-Stack Development
- Git & GitHub Workflow

---

## 🔮 Future Enhancements

- Edit Blog Posts
- Edit Comments
- Delete Comments
- Search Posts
- User Profiles
- Categories & Tags
- JWT Authentication
- Rich Text Editor
- Image Upload Support
- Dark Mode

---

## 👨‍💻 Author

**Muhammad Hashim Khan**

- CSE Student
- Full Stack Development Enthusiast
- Interested in Web Development, AI, and Automation

---

## 📜 License

This project is created for educational and internship purposes.

Feel free to use and modify it for learning.

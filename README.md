# 📦 Node.js MSSQL CRUD API

A modular **CRUD** (Create, Read, Update, Delete) RESTful API built with **Node.js**, **Express.js**, and **Sequelize ORM**, using **Microsoft SQL Server** as the database. This application follows a clean separation of concerns using models, controllers, and routes.

---

## ✨ Features

- 🔄 RESTful API for managing users (CRUD operations)
- 📁 Modular structure (config, models, controllers, routes)
- 🧠 Sequelize ORM for SQL Server interactions
- 🛡️ Input validation and robust error handling

---

## 🧰 Tech Stack

| Technology     | Description                          |
| -------------- | ------------------------------------ |
| **Node.js**    | JavaScript runtime                   |
| **Express.js** | Web framework for Node.js            |
| **Sequelize**  | ORM for SQL Server                   |
| **MSSQL**      | Microsoft SQL Server as the database |
| **Tedious**    | SQL Server driver used by Sequelize  |

---

## ⚙️ Prerequisites

- **Node.js**: Version 16 or higher
- **Microsoft SQL Server**: Running locally or accessible remotely
- **Git**: For cloning the repository

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/johnkeru/node-ms.git
cd node-ms
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure SQL Server

Ensure SQL Server is running and accessible:

- **Host**: `localhost`
- **Port**: `1433`
- **Username**: `sa`
- **Password**: `YourStrong!Passw0rd`
- **Database**: `master` (or your own DB)

Update your configuration in `config/database.js` if needed:

```javascript
const sequelize = new Sequelize({
  dialect: "mssql",
  host: "localhost",
  port: 1433,
  username: "sa",
  password: "YourStrong!Passw0rd",
  database: "master",
});
```

### 4️⃣ Run the Application

```bash
npm start
```

Server will run at: [http://localhost:8000](http://localhost:8000)

You should see:

```
Database connection established
Database synced
Server running on http://localhost:8000
```

---

## 📁 Project Structure

```
node-ms/
├── config/              # Sequelize configuration
│   └── database.js
├── models/              # Sequelize models
│   └── User.js
├── controllers/         # Business logic
│   └── UserController.js
├── routes/              # Express routes
│   └── userRoutes.js
├── app.js               # Application entry point
├── package.json         # Dependencies and scripts
└── README.md            # Project documentation
```

---

## 📡 API Endpoints

Base URL: `http://localhost:8000/api/users`

| Method | Endpoint         | Description     | Request Body (JSON)                                 |
| ------ | ---------------- | --------------- | --------------------------------------------------- |
| POST   | `/api/users`     | Create new user | `{ "name": "John Doe", "email": "...", "age": 30 }` |
| GET    | `/api/users`     | Get all users   | -                                                   |
| GET    | `/api/users/:id` | Get user by ID  | -                                                   |
| PUT    | `/api/users/:id` | Update a user   | `{ "name": "Jane Doe", "age": 31 }`                 |
| DELETE | `/api/users/:id` | Delete a user   | -                                                   |

---

## 📌 Example Requests

### 🔸 Create a User

```bash
curl -X POST http://localhost:8000/api/users \
-H "Content-Type: application/json" \
-d '{"name":"John Doe","email":"john@example.com","age":30}'
```

**Response**: `201 Created`

---

### 🔸 Get All Users

```bash
curl http://localhost:8000/api/users
```

**Response**: `200 OK`

---

### 🔸 Get User by ID

```bash
curl http://localhost:8000/api/users/1
```

**Response**: `200 OK` or `404 Not Found`

---

### 🔸 Update a User

```bash
curl -X PUT http://localhost:8000/api/users/1 \
-H "Content-Type: application/json" \
-d '{"name":"Jane Doe","age":31}'
```

**Response**: `200 OK`

---

### 🔸 Delete a User

```bash
curl -X DELETE http://localhost:8000/api/users/1
```

**Response**: `204 No Content`

---

## 🧪 Testing

Use tools like:

- [Postman](https://www.postman.com/)
- [Insomnia](https://insomnia.rest/)
- `curl` (command-line HTTP client)

Make sure the server is running and SQL Server is accessible.

---

## 📦 Production Notes

- **Database Sync**: In production, avoid using `sequelize.sync({ force: true })`. Use migrations.
- **Environment Variables**: Store secrets (e.g., DB credentials) in a `.env` file using `dotenv`.
- **Authentication**: Add JWT or other methods to protect endpoints.
- **Input Validation**: Extend validation using libraries like `Joi` or `express-validator`.

---

## 🛠 Troubleshooting

- **Connection Issues**: Check SQL Server is running and credentials are correct.
- **Port Conflicts**: Update the port in `app.js` if `8000` is taken.

```javascript
const port = 8000; // Change if needed
```

- **Dependencies**: Reinstall using:

```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 🤝 Contributing

Contributions are welcome! Fork the repo, create a feature branch, and submit a pull request.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

---

## 📬 Contact

Questions or suggestions? Reach out via the [GitHub repository](https://github.com/johnkeru/node-ms).

---

Let me know if you want to include a badge section (e.g., CI status, license, Node version) or add `.env.example` instructions!

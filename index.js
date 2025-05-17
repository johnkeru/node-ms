const express = require("express");
const { sequelize } = require("./config/database");
const userRoutes = require("./routes/user_router");

const app = express();
const port = 8000;

app.use(express.json());

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("Database connection established");

    // Sync models (creates tables if they don't exist)
    await sequelize.sync({ force: true }); // Use { force: false } in production
    console.log("Database synced");

    app.use("/api/users", userRoutes);

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
  }
}

startServer();

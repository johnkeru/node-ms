const { User } = require("../models/User");

class UserController {
  async create(req, res) {
    try {
      const { name, email, age } = req.body;
      if (!name || !email || !age) {
        return res
          .status(400)
          .json({ error: "Name, email, and age are required" });
      }
      const user = await User.create({ name, email, age });
      res.status(201).json(user);
    } catch (err) {
      res
        .status(500)
        .json({ error: "Failed to create user", details: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (err) {
      res
        .status(500)
        .json({ error: "Failed to fetch users", details: err.message });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    } catch (err) {
      res
        .status(500)
        .json({ error: "Failed to fetch user", details: err.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const updates = req.body;
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      await user.update(updates);
      res.json(user);
    } catch (err) {
      res
        .status(500)
        .json({ error: "Failed to update user", details: err.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      await user.destroy();
      res.status(204).send();
    } catch (err) {
      res
        .status(500)
        .json({ error: "Failed to delete user", details: err.message });
    }
  }
}

module.exports = { UserController };

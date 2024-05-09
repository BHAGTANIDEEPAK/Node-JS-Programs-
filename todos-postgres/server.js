const express = require("express");
const { Pool } = require("pg");
const path = require("path"); // Require the path module

const app = express();
const port = 3000;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "todos",
  password: "admin",
  port: 5432,
});

app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// GET all todos
app.get("/todos", (req, res) => {
  pool.query("SELECT * FROM todos", (error, result) => {
    if (error) {
      console.error("Error fetching todos", error);
      res.status(500).json({ error: "Failed to fetch todos" });
    } else {
      res.json(result.rows);
    }
  });
});

// POST a new todo
app.post("/todos", (req, res) => {
  const { title, completed } = req.body;

  // Validate request body
  if (!title || typeof completed !== "boolean") {
    return res.status(400).json({ error: "Invalid request body" });
  }

  pool.query(
    "INSERT INTO todos (title, completed) VALUES ($1, $2)",
    [title, completed],
    (error) => {
      if (error) {
        console.error("Error creating todo", error);
        res.status(500).json({ error: "Failed to create todo" });
      } else {
        res.status(201).json({ message: "Todo created successfully" });
      }
    }
  );
});

// PUT update todo
app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  // Validate request body
  if (!title || typeof completed !== "boolean") {
    return res.status(400).json({ error: "Invalid request body" });
  }

  pool.query(
    "UPDATE todos SET title = $1, completed = $2 WHERE id = $3",
    [title, completed, id],
    (error) => {
      if (error) {
        console.error("Error updating todo", error);
        res.status(500).json({ error: "Failed to update todo" });
      } else {
        res.json({ message: "Todo updated successfully" });
      }
    }
  );
});

// DELETE todo
app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;

  pool.query("DELETE FROM todos WHERE id = $1", [id], (error) => {
    if (error) {
      console.error("Error deleting todo", error);
      res.status(500).json({ error: "Failed to delete todo" });
    } else {
      res.json({ message: "Todo deleted successfully" });
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Unhandled error", err);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

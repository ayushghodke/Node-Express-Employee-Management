const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");

const app = express();
app.use(bodyParser.json());

// Routes
const employeeRoutes = require("./routes/employee.routes");
app.use("/api/employees", employeeRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

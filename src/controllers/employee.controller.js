//importing models folder
const db = require("../models");
const Employee = db.employees;

// Create
//create is the metjhod in export to create user or we can say a row in employee table as a new employee
exports.create = async (req, res) => {
  try {
    //body means the data which i am sending through the postman
    const data = await Employee.create(req.body);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all
exports.findAll = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get by ID
exports.findOne = async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update
exports.update = async (req, res) => {
  try {
    const result = await Employee.update(req.body, {
      where: { id: req.params.id }
    });
    res.json({ message: "Employee updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete
exports.delete = async (req, res) => {
  try {
    await Employee.destroy({ where: { id: req.params.id } });
    res.json({ message: "Employee deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

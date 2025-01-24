// employeeService.js

const fs = require('fs');

class EmployeeService {
    constructor() {
        this.filePath = "employees.json";
    }

    // Helper function to read employees from JSON file
    readEmployees() {
        try {
            const data = fs.readFileSync(this.filePath, 'utf8');
            return JSON.parse(data);
        } catch (err) {
            console.error('Error reading employees:', err);
            return [];
        }
    }

    // Helper function to write employees to JSON file
    writeEmployees(employees) {
        try {
            fs.writeFileSync(this.filePath, JSON.stringify(employees, null, 2), 'utf8');
        } catch (err) {
            console.error('Error writing employees:', err);
        }
    }

    // Get all employees
    getAllEmployees() {
        return this.readEmployees();
    }

    // Get a employee by ID
    getEmployeeById(id) {
        const employees = this.readEmployees();
        return employees.find(employee => employee.id === id);
    }

    // Create a new employee
    createEmployee(newEmployee) {
        const employees = this.readEmployees();
        newEmployee.id = employees.length ? employees[employees.length - 1].id + 1 : 1;
        employees.push(newEmployees);
        this.writeEmployees(employees);
        return newEmployee;
    }
}

module.exports=EmployeeService;



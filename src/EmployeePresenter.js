import Employee from "./Employee.js";

export default class EmployeePresenter {
    format(employees) {
        const outputEmployees = []
        for (let i = 0; i < employees.length; i++) {
            const employeeName = `Имя сотрудника: ${employees[i].name}`
            const employeeColor = employees[i].isItSpecialist ? 'red':"white"
            outputEmployees.push({name: employeeName, color: employeeColor})
        }

        return outputEmployees
    }
}
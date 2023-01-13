import EmployeePresenter from "./EmployeePresenter.js";
import EmployeeRepository from "./EmployeeRepository.js";
import Employee from "./Employee.js";

export default class ShowEmployeeCommand {
    executePresenter() {
        const presenter = new EmployeePresenter()
        return presenter.format(this.execute())
    }

    execute() {
        const outputEmployees = []
        const employeeData = EmployeeRepository.getInstance().findAll()

        for(let i = 0; i < employeeData.length; i++) {
            const employee = new Employee(employeeData[i].description)
            let calculatedEmployee = {name: employeeData[i].name, isItSpecialist: employee.isItSpecialitst()};
            outputEmployees.push(calculatedEmployee)
        }

        return outputEmployees
    }
}
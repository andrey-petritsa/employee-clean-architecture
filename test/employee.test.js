import Employee from "../src/Employee.js";
import ShowEmployeeCommand from "../src/ShowEmployeeCommand.js";
import EmployeeRepository from "../src/EmployeeRepository.js";

test('checking it specialists', () => {
    const employeeProgrammer = new Employee("Отдел по разработке ПО")
    const employeeManager = new Employee("Отдел аналитики")

    expect(employeeProgrammer.isItSpecialitst()).toBe(true)
    expect(employeeManager.isItSpecialitst()).toBe(false)
})

test('show', () => {
    EmployeeRepository.getInstance().emloyees = [
        {name: "Василий", "description": "Сотрудник отдела разработки"},
        {name: "Екатерина", "description": "Сотрудник отдела маркетинга"},
    ]
    const showEmployeeCommand = new ShowEmployeeCommand()

    const employees = showEmployeeCommand.executePresenter()

    expect(employees[0].name).toBe("Имя сотрудника: Василий")
    expect(employees[1].name).toBe("Имя сотрудника: Екатерина")
})

test('show is it specialist', () => {
    EmployeeRepository.getInstance().emloyees = [
        {name: "Василий", "description": "Сотрудник отдела разработки"},
        {name: "Екатерина", "description": "Сотрудник отдела маркетинга"},
    ]
    const showEmployeeCommand = new ShowEmployeeCommand()

    const employees = showEmployeeCommand.executePresenter()

    expect(employees[0].color).toBe("red")
    expect(employees[1].color).toBe("white")
})


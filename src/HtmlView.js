import ShowEmployeeCommand from "./ShowEmployeeCommand.js";
import EmployeeRepository from "./EmployeeRepository.js";

function stringFormat(str, ...args) {
    let i = 0;
    return str.replace(/%s/g, () => args[i++]);
}

EmployeeRepository.getInstance().emloyees = [
    {name: "Василий", "description": "Сотрудник отдела разработки"},
    {name: "Екатерина", "description": "Сотрудник отдела маркетинга"},
]

const command = new ShowEmployeeCommand()
const employeeDivTemplate = "<div class='employee' color='%s'>%s</div>"
console.log(render())

function render() {
    const htmlPage = []
    const employees = command.executePresenter()

    for(let i = 0; i < employees.length; i++) {
        const employeeDiv = stringFormat(employeeDivTemplate, employees[i].color, employees[i].name)
        htmlPage.push(employeeDiv)
    }

    return htmlPage
}
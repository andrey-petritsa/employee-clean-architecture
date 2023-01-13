import ShowEmployeeCommand from "./ShowEmployeeCommand.js";
import EmployeeRepository from "./EmployeeRepository.js";

const colors = {red: "\x1b[31m", white: "\x1b[37m"}

EmployeeRepository.getInstance().emloyees = [
    {name: "Василий", "description": "Сотрудник отдела разработки"},
    {name: "Екатерина", "description": "Сотрудник отдела маркетинга"},
]

const command = new ShowEmployeeCommand()
const employees = command.executePresenter()
for(let i = 0; i < employees.length; i++) {
    console.log(colors[employees[i].color], employees[i].name)
}

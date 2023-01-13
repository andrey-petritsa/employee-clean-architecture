export default class EmployeeRepository {
    static getInstance() {
        if(this.instance == null) {
            this.instance = new EmployeeRepository()
        }

        return this.instance
    }

    constructor() {}

    findAll() {
        return this.emloyees
    }
}
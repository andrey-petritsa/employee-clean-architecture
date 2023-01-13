export default class Employee {
    constructor(description) {
        this.description = description
    }

    isItSpecialitst() {
        if(this.description.includes("разраб")) {
            return true
        }

        return false
    }
}
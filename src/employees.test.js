import { Employees } from "src/employees.js";

describe('Employees', () => {
    test('returns list of employees', () => {
        const employees = Employees()

        expect(employees).toBeTruthy()
    })
});

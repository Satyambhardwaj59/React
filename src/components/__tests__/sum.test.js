import { sum } from "../sum";

test("Sum function calcualte sun of two numbers", () => {

    const result = sum(3, 4);

    // Assertion
    expect(result).toBe(7);
});
import AwesomeNumber from "../awesome-numbers";

describe("AwesomeNumber", () => {
    const myAwesomeNumber = new AwesomeNumber(4);

    it("isEven", () => {
        expect(myAwesomeNumber.isEven()).toBe(true);
    });

    it("isOdd", () => {
        expect(myAwesomeNumber.isOdd()).toBe(false);
    });

    it("isPrime", () => {
        expect(myAwesomeNumber.isPrime()).toBe(false);
    });

    it("isMultipleOf 2", () => {
        expect(myAwesomeNumber.isMultipleOf(2)).toBe(true);
    });

    it("isMultipleOf 3", () => {
        expect(myAwesomeNumber.isMultipleOf(3)).toBe(false);
    });

    it("sum with raw number", () => {
        let newNumber = myAwesomeNumber + 2;
        expect(newNumber).toBe(6);
    });

    it("sum with AwesomeNumber", () => {
        let newNumber = myAwesomeNumber + new AwesomeNumber(2);
        expect(newNumber).toBe(6);
    });
});
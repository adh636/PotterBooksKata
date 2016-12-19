import {PotterBooks} from "../src/code";
describe("potter books kata", () => {
    let potterBooks: PotterBooks;
    beforeEach(() => {
        potterBooks = new PotterBooks();
    });

    it("should cost 0 for no books", () => {
        expect(potterBooks.price([])).toEqual(0);
    });

    it("should cost 8 for one book", () => {
        expect(potterBooks.price([0])).toEqual(8);
        expect(potterBooks.price([1])).toEqual(8);
        expect(potterBooks.price([2])).toEqual(8);
        expect(potterBooks.price([3])).toEqual(8);
        expect(potterBooks.price([4])).toEqual(8);
    });

    it("should cost 8 for each book if all the same book", () => {
        expect(potterBooks.price([0, 0])).toEqual(16);
        expect(potterBooks.price([1, 1, 1])).toEqual(24);
    });

    it("should give 5% discount on 2 different books", () => {
        expect(potterBooks.price([0, 1])).toEqual(8 * 2 * .95);
    });

    it("should give 10% discount on 3 different books", () => {
        expect(potterBooks.price([0, 1, 2])).toEqual(8 * 3 * .90);
    });

    it("should give 20% discount on 4 different books", () => {
        expect(potterBooks.price([0, 1, 2, 3])).toEqual(8 * 4 * .80);
    });

    it("should give 25% discount on 5 different books", () => {
        expect(potterBooks.price([0, 1, 2, 3, 4])).toEqual(8 * 5 * .75);
    });

    it("should handle multiple discounts", () => {
        expect(potterBooks.price([0, 0, 1])).toEqual(8 + (8 * 2 * 0.95));
        expect(potterBooks.price([0, 0, 1, 1])).toEqual(2 * (8 * 2 * 0.95));
        expect(potterBooks.price([0, 0, 1, 2, 2, 3])).toEqual((8 * 4 * 0.8) + (8 * 2 * 0.95));
        expect(potterBooks.price([0, 1, 1, 2, 3, 4])).toEqual(8 + (8 * 5 * 0.75));
    });

    xit("should recognize 2 20%'s better than 25% and 10%", () => {
        expect(potterBooks.price([0, 0, 1, 1, 2, 2, 3, 4])).toEqual(2 * (8 * 4 * 0.8));
    });
});
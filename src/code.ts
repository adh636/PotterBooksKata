export class PotterBooks {
    bookMap: number[];
    discountMap: number[] = [1, 1, .95, .90, .80, .75];

    price(books: number[]) {
        if (books.length < 1) return 0;
        this.bookMap = [0, 0, 0, 0, 0];
        this.addBooksToBookMap(books);

        let price: number = 0;

        while (this.booksLeft()) {
            price += 8 * this.getBookCount() * this.discountMap[this.getBookCount()];
            this.updateBookMap();
        }

        return price;
    }

    private addBooksToBookMap(books: number[]) {
        books.forEach((book: number) => {
            this.bookMap[book] += 1;
        });
    }

    booksLeft(): boolean {
        for (let i = 0; i < this.bookMap.length; i++) {
            if (this.bookMap[i] > 0) {
                return true;
            }
        }
        return false;
    }

    getBookCount(): number {
        let count: number = 0;
        this.bookMap.forEach((book: number) => {
            if (book > 0) count++;
        });
        return count;
    }

    updateBookMap(): void {
        this.bookMap = this.bookMap.map((book: number) => {
            return book - 1;
        });
    }

}
// Gestionnaire de bibliothèque - Version TypeScript

// Types et Interfaces
interface IBook {
    title: string;
    author: string;
    year: number;
    isbn: string;
    isAvailable: boolean;
    toggleAvailability(): void;
    getInfo(): string;
}

interface BorrowResult {
    success: boolean;
    message: string;
}

interface LibraryStatistics {
    total: number;
    available: number;
    borrowed: number;
    availabilityRate: string;
}

// Classes
class Book implements IBook {
    title: string;
    author: string;
    year: number;
    isbn: string;
    isAvailable: boolean;

    constructor(title: string, author: string, year: number, isbn: string) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.isbn = isbn;
        this.isAvailable = true;
    }

    toggleAvailability(): void {
        this.isAvailable = !this.isAvailable;
    }

    getInfo(): string {
        return `"${this.title}" par ${this.author} (${this.year})`;
    }
}

class Library {
    name: string;
    books: Book[];
    members: string[];

    constructor(name: string) {
        this.name = name;
        this.books = [];
        this.members = [];
    }

    addBook(book: Book): void {
        this.books.push(book);
        console.log(`Livre ajouté: ${book.getInfo()}`);
    }

    removeBook(isbn: string): Book | null {
        const index: number = this.books.findIndex(book => book.isbn === isbn);
        if (index !== -1) {
            const removed: Book = this.books.splice(index, 1)[0];
            console.log(`Livre retiré: ${removed.getInfo()}`);
            return removed;
        }
        return null;
    }

    findBooksByAuthor(author: string): Book[] {
        return this.books.filter(book =>
            book.author.toLowerCase().includes(author.toLowerCase())
        );
    }

    borrowBook(isbn: string, memberName: string): BorrowResult {
        const book: Book | undefined = this.books.find(b => b.isbn === isbn);
        if (!book) {
            return { success: false, message: "Livre non trouvé" };
        }
        if (!book.isAvailable) {
            return { success: false, message: "Livre déjà emprunté" };
        }

        book.toggleAvailability();
        return {
            success: true,
            message: `${memberName} a emprunté ${book.getInfo()}`
        };
    }

    returnBook(isbn: string): BorrowResult {
        const book: Book | undefined = this.books.find(b => b.isbn === isbn);
        if (!book) {
            return { success: false, message: "Livre non trouvé" };
        }
        if (book.isAvailable) {
            return { success: false, message: "Ce livre n'était pas emprunté" };
        }

        book.toggleAvailability();
        return { success: true, message: `Livre retourné: ${book.getInfo()}` };
    }

    getAvailableBooks(): Book[] {
        return this.books.filter(book => book.isAvailable);
    }

    getStatistics(): LibraryStatistics {
        const total: number = this.books.length;
        const available: number = this.getAvailableBooks().length;
        const borrowed: number = total - available;

        return {
            total,
            available,
            borrowed,
            availabilityRate: total > 0 ? (available / total * 100).toFixed(2) : "0"
        };
    }
}

// Utilisation
const myLibrary: Library = new Library("Bibliothèque Municipale");

const book1: Book = new Book("1984", "George Orwell", 1949, "978-0451524935");
const book2: Book = new Book("Le Petit Prince", "Antoine de Saint-Exupéry", 1943, "978-2070612758");
const book3: Book = new Book("Harry Potter à l'école des sorciers", "J.K. Rowling", 1997, "978-2070584628");

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

console.log("\n--- Emprunt de livres ---");
console.log(myLibrary.borrowBook("978-0451524935", "Alice"));
console.log(myLibrary.borrowBook("978-2070612758", "Bob"));

console.log("\n--- Statistiques ---");
console.log(myLibrary.getStatistics());

console.log("\n--- Livres disponibles ---");
console.log(myLibrary.getAvailableBooks().map((b: Book) => b.getInfo()));
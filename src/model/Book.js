import { randomUUID } from "node:crypto";

export class Book {
	constructor(title, author, isbn, publishedDate, availableCopies, id) {
		this.id = id ?? randomUUID();
		this.title = title;
		this.author = author;
		this.isbn = isbn;
		this.publishedDate = publishedDate;
		this.availableCopies = availableCopies;
	}
}

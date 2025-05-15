import { Book } from "../model/Book.js";
import { BookRepository } from "../repository/book.repository.js";

export const BookService = {
	serviceBookAll: async () => {
		const todosLosBooks = await BookRepository.getAll();

		if (!todosLosBooks) return null;

		return todosLosBooks;
	},

	serviceBookValidation: async (id) => {
		const bookHalladoPorId = await BookRepository.getById(id);

		if (!bookHalladoPorId) return null;

		return bookHalladoPorId;
	},

	serviceBookCreation: async (bookToCreate) => {
		const dataBook = {
			...bookToCreate,
		};

		const modelBook = new Book(
			dataBook.title,
			dataBook.author,
			dataBook.isbn,
			dataBook.publishedDate,
			dataBook.availableCopies,
			dataBook.id,
		);

		const libroCreado = await BookRepository.createOne(modelBook);

		return libroCreado;
	},

	serviceBookDelete: async (id) => {
		const bookDeleted = await BookRepository.deleteById(id);

		if (!bookDeleted) return null;

		return bookDeleted;
	},

	serviceBookUpdate: async (id, title, author, publishedDate) => {
		const bookUpdated = await BookRepository.updateById(
			id,
			title,
			author,
			publishedDate,
		);

		if (!bookUpdated) return null;

		return bookUpdated;
	},
};

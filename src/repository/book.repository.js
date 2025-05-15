import { json } from "node:stream/consumers";
import { JsonHandler } from "../utils/JsonManager.js";

export const BookRepository = {
	getAll: async () => await JsonHandler.read(),

	getById: async (id) => {
		const books = await JsonHandler.read();

		if (!books) return null;

		const bookExists = books.find((eachBook) => eachBook.id == id);

		if (!bookExists) return null;

		return bookExists;
	},

	createOne: async (bookToCreate) => {
		const books = await JsonHandler.read();
		if (!books) return null;

		const bookExists = books.find((eachBook) => eachBook.id == bookToCreate.id);

		/*
        Valido que NO exista un libro con el mismo ID. Si NO existe un libro con el mismo ID, será añadido. De esta manera, vamos a evitar tener 2 libros con el mismo ID, tal como vimos en las materias anteriores.
        */
		if (bookExists) return null;

		books.push(bookToCreate);

		try {
			await JsonHandler.write(books);
		} catch (error) {
			console.error({ message: error.message });
			return;
		}

		return bookToCreate;
	},

	deleteById: async (id) => {
		const books = await JsonHandler.read();

		if (!books) return null;

		const bookToDeleteExists = books.find((eachBook) => eachBook.id == id);

		if (!bookToDeleteExists) return null;

		//Tendrá la colección de Libros SIN el libro eliminado.
		const booksToSaveAgain = books.filter((eachBook) => eachBook.id != id);

		try {
			await JsonHandler.write(booksToSaveAgain);
			return bookToDeleteExists;
		} catch (error) {
			console.error(`No se ha podido eliminar ---> ${error.message}`);
			return null;
		}
	},

	updateById: async (id, title, author, publishedDate) => {
		const books = await JsonHandler.read();

		if (!books) return null;

		const bookToUpdateExists = books.find((eachBook) => eachBook.id == id);

		if (!bookToUpdateExists) return null;

		//Tendrá la colección de libros SIn el libro a actualizar
		const booksToSaveAgain = books.filter((eachBook) => eachBook.id != id);

		const bookUpdated = {
			...bookToUpdateExists,
			title: title,
			author: author,
			publishedDate: publishedDate,
		};

		booksToSaveAgain.push(bookUpdated);

		try {
			await JsonHandler.write(booksToSaveAgain);
			return bookUpdated;
		} catch (error) {
			console.error(`No se ha podido actualizar ---> ${error.message}`);
			return null;
		}
	},
};

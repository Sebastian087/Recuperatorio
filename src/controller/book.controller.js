import { BookService } from "../service/book.service.js";

export const BookController = {
	bookAll: async (req, res) => {
		const books = await BookService.serviceBookAll();

		if (books.length == 0) {
			res.status(404).json({
				payload: null,
				message: "No se encontró ningun libro",
				ok: false,
			});
			return;
		}

		res.status(200).json({
			message: "Success ---> Los libros fueron hallados correctamente",
			payload: books,
			ok: true,
		});
	},

	bookValidation: async (req, res) => {
		const { id } = req.params;

		const bookHalladoPorId = await BookService.serviceBookValidation(id);

		if (!bookHalladoPorId) {
			res.status(404).json({
				payload: null,
				message: `No se encontró el libro con ID: ${id}`,
				ok: false,
			});
			return null;
		}

		res.status(200).json({
			message: "Success",
			payload: bookHalladoPorId,
			ok: true,
		});
	},

	bookCreateOne: async (req, res) => {
		const { book } = req.body;

		const bookAgregado = await BookService.serviceBookCreation(book);

		//console.log(bookAgregado);

		if (!bookAgregado) {
			res.status(404).json({
				payload: null,
				message: "No se puedo añadir el libro",
				ok: false,
			});
			return;
		}

		res.status(200).json({
			message: "Success ---> Libro agregado",
			payload: bookAgregado,
			ok: true,
		});
		return;
		/**
     try {
            const bookAgregado =  await BookService.serviceBookCreation(book)
                        
            res.status(200).json({
                message: "Success ---> Libro agregado",
                payload: bookAgregado,
                ok: true
            })
            return
        } catch (error) {
                res.status(404).json({
                payload:null,
                message: "No se puedo añadir el libro",
                ok: false
            })
            return            
        }
    }
 */
	},

	bookDeleteOne: async (req, res) => {
		const { id } = req.params;
		const bookDeleted = await BookService.serviceBookDelete(id);

		if (!bookDeleted) {
			res.status(404).json({
				payload: null,
				message: `No se pudo eliminar el libro con id: ${id}`,
				ok: false,
			});
			return;
		}

		res.status(200).json({
			message: `Success: El libro "${bookDeleted.title}" fue eliminado`,
			payload: { bookDeleted },
			ok: true,
		});
		return;
	},

	bookUpdateById: async (req, res) => {
		const { id } = req.params;
		const { title, author, publishedDate } = req.body;

		const bookUpdated = await BookService.serviceBookUpdate(
			id,
			title,
			author,
			publishedDate,
		);

		if (!bookUpdated) {
			res.status(404).json({
				payload: null,
				message: `No se puedo actualizar la pelicula con el ID: ${id}`,
				ok: false,
			});
			return;
		}

		res.status(200).json({
			message: "Libro Actualizado",
			payload: bookUpdated,
			ok: true,
		});
		return;
	},
};

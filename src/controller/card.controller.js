import { CardService } from "../service/card.service.js";

export const CardController = {
	cardAll: async (req, res) => {
		const cards = await CardService.serviceCardAll();

		if (cards.length == 0) {
			res.status(404).json({
				payload: null,
				message: "No se encontró ninguna tarjeta",
				ok: false,
			});
			return;
		}

		res.status(200).json({
			message: "Success ---> Las tarjetas fueron halladas correctamente",
			payload: cards,
			ok: true,
		});
	},

	cardByEmail: async (req, res) => {
		const { email } = req.params;

		const cards = await CardService.serviceCardByEmail(email);

		if (cards.length == 0) {
			res.status(404).json({
				payload: null,
				message: "No se encontró ninguna tarjeta",
				ok: false,
			});
			return;
		}
		res.status(200).json({
			message: "Success ---> Las tarjetas fueron halladas correctamente",
			payload: cards,
			ok: true,
		});
	},

	cardValidation: async (req, res) => {
		const { id } = req.params;

		const cardHalladaPorId = await CardService.serviceCardValidation(id);

		if (!cardHalladaPorId) {
			res.status(404).json({
				payload: null,
				message: `No se encontró la tarjeta con ID: ${id}`,
				ok: false,
			});
			return null;
		}

		res.status(200).json({
			message: "Success",
			payload: cardHalladaPorId,
			ok: true,
		});
	},

	cardCreateOne: async (req, res) => {
		const { card } = req.body;

		const cardAgregado = await CardService.serviceCardCreation(card);

		if (!cardAgregado) {
			res.status(404).json({
				payload: null,
				message: "No se puedo añadir la tarjeta",
				ok: false,
			});
			return;
		}

		res.status(200).json({
			message: "Success ---> Tarejta agregada",
			payload: cardAgregado,
			ok: true,
		});
		return;

	},

	cardDeleteOne: async (req, res) => {
		const { id } = req.params;
		const cardDeleted = await CardService.serviceCardDelete(id);

		if (!cardDeleted) {
			res.status(404).json({
				payload: null,
				message: `No se pudo eliminar la tarjeta con id: ${id}`,
				ok: false,
			});
			return;
		}

		res.status(200).json({
			message: `Success: La tarjeta "${cardDeleted.cardnumber}" fue eliminado`,
			payload: { cardDeleted },
			ok: true,
		});
		return;
	},

	cardUpdateById: async (req, res) => {
		const { id } = req.params;
		const updateData = req.body;

		const cardUpdated = await CardService.serviceCardUpdate(updateData);

		if (!cardUpdated) {
			res.status(404).json({
				payload: null,
				message: `No se puedo actualizar la tarjeta con el ID: ${id}`,
				ok: false,
			});
			return;
		}

		res.status(200).json({
			message: "Tarjeta Actualizado",
			payload: cardUpdated,
			ok: true,
		});
		return;
	},
};

import { CreditCard } from "../model/CreditCard.js";
import { CardRepository } from "../repository/card.repository.js";

export const CardService = {
	serviceCardAll: async () => {
		const todasLasTarjetas = await CardRepository.getAll();

		if (!todasLasTarjetas) return null;

		return todasLasTarjetas;
	},

	serviceCardByEmail: async (email) => {
		const tarjetaEncontrada = await CardRepository.cardByEmail(email);

		if (!tarjetaEncontrada) return null;

		return tarjetaEncontrada;
	},


	serviceCardValidation: async (id) => {
		const cardHalladaPorId = await CardRepository.getById(id);

		if (!cardHalladaPorId) return null;

		return cardHalladaPorId;
	},

	serviceCardCreation: async (cardToCreate) => {
		const dataCard = {
			...cardToCreate,
		};

		const modelCard = new CreditCard(
			dataCard.cardnumber,
			dataCard.cardholder,
			dataCard.expirationdate,
			dataCard.cvv,
			dataCard.email,
		);

		const tarjetaCreada = await CardRepository.createOne(modelCard);

		return tarjetaCreada;
	},

	serviceCardDelete: async (id) => {
		const cardDeleted = await CardRepository.deleteById(id);

		if (!cardDeleted) return null;

		return cardDeleted;
	},

	serviceCardUpdate: async (id, updateData) => {
		const cardUpdated = await CardRepository.updateById(id, updateData);

		if (!cardUpdated) return null;

		return cardUpdated;
	},
};

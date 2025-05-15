import { ExternalRepository } from "../repository/external.repository.js";

const csv_url =
	"https://raw.githubusercontent.com/plotly/datasets/refs/heads/master/beers.csv";

export const ExternalService = {
	readCsvData: async () => {
		const rutaCSV = await ExternalRepository.guardarCSV(csv_url);
		if (!rutaCSV) return null;

		return rutaCSV;
	},
};

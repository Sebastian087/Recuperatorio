import { ExternalService } from "../service/external.service.js";

export const ExternalController = {
	getExternalCSV: async (req, res) => {
		try {
			const rutaCSV = await ExternalService.readCsvData();

			res.status(200).json({
				message: "Archivo CSV guardado correctamente",
				path: rutaCSV,
				ok: true,
			});
		} catch (error) {
			res.status(500).json({
				message: "Error al procesar CSV externo",
				error: error.message,
				ok: false,
			});
		}
	},
};

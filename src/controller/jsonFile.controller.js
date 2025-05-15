import { JsonFileService } from "../service/jsonFile.service.js";

export const JsonFileController = {
	getAll: async (req, res) => {
		const files = await JsonFileService.serviceJsonFileAll();

		if (files.length == 0) {
			res.status(404).json({
				payload: null,
				message: "No se encontró ningun Json File",
				ok: false,
			});
			return;
		}

		res.status(200).json({
			message: "Success ---> Los Json Files fueron hallados correctamente",
			payload: files,
			ok: true,
		});
	},
};

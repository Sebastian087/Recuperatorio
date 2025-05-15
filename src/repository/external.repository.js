import fs from "fs";
import fetch from "node-fetch";
import { config } from "../config/config.js";

export const ExternalRepository = {
	guardarCSV: async (url) => {
		const response = await fetch(url, {
			method: "get",
			headers: {
				"content-type": "text/csv;charset=UTF-8",
			},
		});
		if (!response) return null;

		const contenidoCSV = await response.text();

		fs.writeFileSync(config.DB_PATH_CSV, contenidoCSV);

		//Voy a retornar la ruta del archivo en vez del contenido del CSV para que no se vean todos los CSV amontonados
		return config.DB_PATH_CSV;
	},
};

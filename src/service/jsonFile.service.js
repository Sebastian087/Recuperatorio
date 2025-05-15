import { JsonFileRepository } from "../repository/jsonFile.repository.js";

export const JsonFileService = {
	serviceJsonFileAll: async () => {
		const allJsonFiles = await JsonFileRepository.getAll();

		if (!allJsonFiles) return null;

		return allJsonFiles;
	},
};

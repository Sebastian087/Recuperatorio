import { JsonHandler } from "../utils/JsonManager.js";

export const JsonFileRepository = {
	getAll: async () => await JsonHandler.read(),
};

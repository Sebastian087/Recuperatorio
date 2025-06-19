import express from "express";
import { config } from "./config/config.js";
import { cardRouter } from "./routes/cardRouter.js";

const PORT = process.env.PORT ?? 3100
const HOST = "127.0.0.1"
const app = express();
app.use(express.json());

app.use("/api", cardRouter);

app.listen(PORT, () => {
	console.log(
		`🫶🏻✔️ Server running in http://${HOST}:${PORT}🛠️👍🏻`,
	);
});

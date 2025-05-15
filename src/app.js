import express from "express";
import { config } from "./config/config.js";
import { bookRouter } from "./routes/bookRouter.js";
import { externalRouter } from "./routes/externalRouter.js";
import { jsonFileRouter } from "./routes/jsonFileRouter.js";

const app = express();
app.use(express.json());

app.use("/api", bookRouter);
app.use("/api", externalRouter);
app.use("/api", jsonFileRouter);

app.listen(config.PORT, () => {
	console.log(
		`🫶🏻✔️ Server running in http://${config.HOST}:${config.PORT}🛠️👍🏻`,
	);
});

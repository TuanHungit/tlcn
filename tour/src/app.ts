import express from "express";
import { errorHandler, NotFoundError } from "@thticket/common";
import { json } from "body-parser";
import { showAllTours } from "./routes/index";
import { createOneTourRoute } from "./routes/new";

const app = express();
app.set("trust proxy", true);
app.use(json());

app.use(showAllTours);
app.use(createOneTourRoute);
app.all("*", async () => {
  throw new NotFoundError();
});
app.use(errorHandler);
export { app };

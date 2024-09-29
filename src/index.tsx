import { Hono } from "hono";
import { Index } from "./pages";
import { renderer } from "./renderer";

const app = new Hono();

app.use(renderer);

app.get("/", (c) => {
	return c.render(Index());
});

export default app;

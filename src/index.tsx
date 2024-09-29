import { Hono } from "hono";
import { TopPage } from "./pages/TopPage";
import { renderer } from "./renderer";

const app = new Hono();

app.use(renderer);

app.get("/", (c) => {
	return c.render(TopPage());
});

export default app;

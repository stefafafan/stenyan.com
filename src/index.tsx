import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import { TopPage } from "./pages/TopPage";
import { renderer } from "./renderer";

const app = new Hono();

app.use(renderer);

app.use("*", serveStatic({ root: "./static" }));

app.get("/", (c) => {
	return c.render(TopPage());
});

app.get("/robots.txt", (c) => {
	return c.text("User-agent: *\nDisallow:");
});

app.all("*", (c) => {
	return c.text("Not found", 404);
});

export default app;

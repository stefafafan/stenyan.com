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

// Cloudflare Pages では存在しないパスの場合 404.html の内容を表示する
// https://developers.cloudflare.com/pages/configuration/serving-pages/
app.get("/404.html", (c) => {
	return c.html("Not found", 404);
});

export default app;

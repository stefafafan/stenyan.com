import { Hono } from "hono";
import { renderer } from "./renderer";

const app = new Hono();

app.use(renderer);

app.get("/", (c) => {
	return c.render(
		<>
			<header>
				<div style={{ display: "flex", alignItems: "center" }}>
					<img
						src="static/images/stefafafan.png"
						alt="stefafafan"
						style={{ height: "3em", verticalAlign: "middle" }}
					/>
					<h1 style={{ marginLeft: "10px" }}>stefafafan a.k.a. すてにゃん</h1>
				</div>
				<p>すてにゃん (stefafafan) の個人サイトです。</p>
			</header>
			<section>
				<h2>各種SNS</h2>
				<ul>
					<li>
						<a href="https://x.com/stefafafan" target="_blank" rel="noreferrer">
							𝕏 (Formerly Twitter)
						</a>
					</li>
					<li>
						<a
							href="https://github.com/stefafafan"
							target="_blank"
							rel="noreferrer"
						>
							GitHub
						</a>
					</li>
					<li>
						<a
							href="https://speakerdeck.com/stefafafan"
							target="_blank"
							rel="noreferrer"
						>
							Speaker Deck
						</a>
					</li>
					<li>
						<a href="https://blog.stenyan.jp/" target="_blank" rel="noreferrer">
							Hatena Blog
						</a>
					</li>
					<li>
						<a
							href="https://b.hatena.ne.jp/stefafafan/"
							target="_blank"
							rel="noreferrer"
						>
							Hatena Bookmark
						</a>
					</li>
				</ul>
			</section>
			<footer>&copy; 2024 すてにゃん</footer>
		</>,
	);
});

export default app;

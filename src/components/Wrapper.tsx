import type { FC } from "hono/jsx";

export const Wrapper: FC = ({ children }) => {
	return (
		<>
			<header>
				<div>
					<img
						src="static/stefafafan.webp"
						alt="stefafafan"
						width={54}
						height={54}
					/>
					<h1>stefafafan a.k.a. すてにゃん</h1>
				</div>
				<p>A software engineer based in Japan.</p>
			</header>
			<div className="container">{children}</div>
			<footer>&copy; 2024 stefafafan</footer>
		</>
	);
};

import { Style } from "hono/css";
import { jsxRenderer } from "hono/jsx-renderer";

export const renderer = jsxRenderer(({ children }) => {
	return (
		<html lang="ja">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>stenyan.com</title>
				<meta
					name="description"
					content="stefafafan a.k.a. すてにゃん is a Software Engineer based in Japan."
				/>
				<meta
					name="keywords"
					content="すてにゃん, stefafafan, stenyan, blog, engineer"
				/>
				<meta name="author" content="すてにゃん" />
				<meta property="og:title" content="stenyan.com" />
				<meta
					property="og:description"
					content="stefafafan a.k.a. すてにゃん is a Software Engineer based in Japan."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://stenyan.com" />
				{/* <meta property="og:image" content="https://stenyan.com/static/ogp.png" /> */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@stefafafan" />
				<meta name="twitter:creator" content="@stefafafan" />
				<meta name="twitter:title" content="stenyan.com" />
				<meta
					name="twitter:description"
					content="stefafafan a.k.a. すてにゃん is a Software Engineer based in Japan."
				/>
				{/* <meta name="twitter:image" content="https://stenyan.com/static/ogp.png" /> */}
				<link rel="icon" href="static/favicon.ico" />
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/static/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/static/favicon-16x16.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/static/apple-touch-icon.png"
				/>
				<link rel="manifest" href="/static/site.webmanifest" />
				<link rel="canonical" href="https://stenyan.com" />
				<Style />
			</head>
			<body>{children}</body>
		</html>
	);
});

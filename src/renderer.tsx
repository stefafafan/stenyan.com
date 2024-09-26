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
					content="すてにゃん (stefafafan) の個人サイトです。"
				/>
				<meta
					name="keywords"
					content="すてにゃん, stefafafan, stenyan, blog, engineer"
				/>
				<meta name="author" content="すてにゃん" />
				<meta property="og:title" content="stenyan.com" />
				<meta
					property="og:description"
					content="すてにゃん (stefafafan) の個人サイトです。"
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
					content="すてにゃん (stefafafan) の個人サイトです。"
				/>
				{/* <meta name="twitter:image" content="https://stenyan.com/static/ogp.png" /> */}
				{/* <link rel="icon" href="/static/favicon.ico" /> */}
				{/* <link rel="apple-touch-icon" href="/static/apple-touch-icon.png" /> */}
				{/* <link rel="manifest" href="/static/manifest.json" /> */}
				<link rel="canonical" href="https://stenyan.com" />
				<link href="/static/style.css" rel="stylesheet" />
			</head>
			<body>{children}</body>
		</html>
	);
});

import { Style, css } from "hono/css";
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
				<meta
					property="og:image"
					content="https://stenyan.com/static/ogimage.png"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@stefafafan" />
				<meta name="twitter:creator" content="@stefafafan" />
				<meta name="twitter:title" content="stenyan.com" />
				<meta
					name="twitter:description"
					content="stefafafan a.k.a. すてにゃん is a Software Engineer based in Japan."
				/>
				<meta
					name="twitter:image"
					content="https://stenyan.com/static/ogimage.png"
				/>
				<link rel="author" href="https://www.hatena.ne.jp/stefafafan/" />
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
				<Style>{css`
					body {
						font-family: 'Helvetica Neue', sans-serif;
						font-size: 18px;
						background-color: #f8f9fa;
						color: #333;
						margin: 0;
						padding: 0;
					}

					.container {
						width: 80%;
						margin: 0 auto;
						padding: 20px;
						background-color: #fff;
						border-radius: 8px;
						box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
					}

					header {
						text-align: center;
						padding: 20px 0;
					}

					header img {
						max-width: 200px;
						border-radius: 50%;
					}

					header h1 {
						font-size: 3rem;
						margin: 0.5rem 0;
						color: #333;
					}
					
					/* ref. https://www.w3.org/WAI/WCAG21/working-examples/link-contrast/ */
					a {
						color: #3366CC;
					}

					a:hover, a:focus, a:active {
						color: #CC0066;
					}

					a:visited {
						color: #6633FF;
					}

					footer {
						text-align: center;
						padding: 20px;
						margin-top: 20px;
					}

					footer p {
						margin: 0;
					}

					@media (max-width: 768px) {
						.container {
							width: 95%;
						}

						header h1 {
							font-size: 2rem;
						}
					}

					ul, li {
						margin: 10px;
					}
				`}</Style>
			</head>
			<body>{children}</body>
		</html>
	);
});

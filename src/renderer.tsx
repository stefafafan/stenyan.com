import { jsxRenderer } from "hono/jsx-renderer";

export const renderer = jsxRenderer(({ children }) => {
	return (
		<html lang="ja">
			<head>
				<link href="/static/style.css" rel="stylesheet" />
			</head>
			<body>{children}</body>
		</html>
	);
});

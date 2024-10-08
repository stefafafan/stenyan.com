// /404 にきたリクエストのステータスコードを 404 で上書きする
// ref. https://zenn.dev/mogamin/articles/override-status-cloudflare-pages-functions
export const onRequestGet: PagesFunction = async (context) => {
	const original = await context.env.ASSETS.fetch(context.request);
	return new Response(original.body, { status: 404 });
};

export const onRequestHead: PagesFunction = async (context) => {
	const original = await context.env.ASSETS.fetch(context.request);
	return new Response(original.body, { status: 404 });
};

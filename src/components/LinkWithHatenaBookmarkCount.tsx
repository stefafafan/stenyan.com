export const LinkWithHatenaBookmarkCount = (props: {
	href: string;
	title: string;
}) => {
	return (
		<>
			<a href={props.href}>{props.title}</a>
			<a href={`https://b.hatena.ne.jp/entry/${props.href}`}>
				<img
					src={`https://b.hatena.ne.jp/entry/image/${props.href}`}
					alt="はてなブックマーク - {props.title}"
					title="はてなブックマーク - {props.title}"
				/>
			</a>
		</>
	);
};

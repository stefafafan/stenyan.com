export const Link = (props: {
	href: string;
	title: string;
}) => {
	return <a href={props.href}>{props.title}</a>;
};

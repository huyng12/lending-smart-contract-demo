import NextHead from "next/head";

const defaults = {
	title: "Lending Smart Contract Demo",
	description:
		"Lending service with improved data integrity with Ethereum smart contract",
};

const Head = ({ title, description }) => (
	<NextHead>
		<title>{title ?? defaults.title}</title>
		<meta
			name="description"
			content={description ?? defaults.description}
		/>
	</NextHead>
);

export const Page = (props) => {
	return (
		<div>
			<Head {...props} />
			{props.body}
		</div>
	);
};

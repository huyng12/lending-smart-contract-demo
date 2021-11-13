import NextHead from "next/head";
import { useRouter } from "next/router";
import { useRouteChanging } from "../../utils/router/state";
import { PageSpinner } from "../page-spinner";
import { Navbar } from "./navbar";

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
	const router = useRouter();
	const route = useRouteChanging({ router });
	return (
		<div>
			<Head {...props} />
			<Navbar />
			<PageSpinner spinning={route.changing} />
			{!route.changing && <div>{props.body}</div>}
		</div>
	);
};

import { Page } from "../../components/page";

const LookupBody = () => (
	<div>
		<h1>Lookup</h1>
	</div>
);

const LookupPage = () => (
	<Page
		title="Lookup loan details information - Lending Smart Contract Demo"
		description="Find loan details information on Lending Smart Contract Demo"
		body={<LookupBody />}
	></Page>
);

export default LookupPage;

import { Page } from "../../components/page";
import SearchBar from "../../components/SearchBar";

const LookupBody = () => (
	<div style={{ textAlign: "center" }}>
		<h1>Tìm kiếm khoản vay</h1>
		<SearchBar />
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

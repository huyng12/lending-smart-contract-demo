import { Card } from "antd";
import { Page } from "../../components/page";
import { SearchBar } from "../../components/search-bar";

const LookupBody = () => (
	<div style={{ textAlign: "center", paddingTop: 30 }}>
		<h1>Tìm kiếm khoản vay</h1>
		<Card style={{ margin: "auto", maxWidth: 650 }}>
			<SearchBar />
		</Card>
	</div>
);

const LookupPage = () => (
	<Page
		title="Tra cứu thông tin khoản vay - Lending Smart Contract Demo"
		description="Tra cứu thông tin chi tiết của khoản vay trên Lending Smart Contract Demo"
		body={<LookupBody />}
	/>
);

export default LookupPage;

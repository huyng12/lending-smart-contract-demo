import { Page } from "../../components/page";
import LoanForm from "../../components/page/LoanForm";

const HomeBody = () => (
	<div>
		<h1>Home Page</h1>
		<LoanForm />
	</div>
);

const HomePage = () => (
	<Page
		title="Home - Lending Smart Contract Demo"
		description="Apply for a loan on Lending Smart Contract Demo"
		body={<HomeBody />}
	/>
);

export default HomePage;

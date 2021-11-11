import { getAllLoans } from "../../apis";
import { Page } from "../../components/page";
import AllLoansTable from "../../components/page/AllLoansTable";

const AdminBody = (props) => {
	return (
		<div>
			<h1>Admin Dashboard</h1>
			<AllLoansTable  dataSource={props.loans} />
		</div>
	);
};

const AdminPage = (props) => (
	<Page
		title="Admin Dashboard - Lending Smart Contract Demo"
		description="Manage loan applications on Lending Smart Contract Demo"
		body={<AdminBody {...props} />}
	></Page>
);

export const getServerSideProps = async () => {
	const { data } = await getAllLoans();
	console.log(data);
	return {
		props: { loans: data },
	};
};

export default AdminPage;

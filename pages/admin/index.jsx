import { getAllLoans } from "../../apis";
import { Page } from "../../components/page";

const AdminBody = (props) => (
	<div>
		<h1>Admin Dashboard</h1>
		<div>
			{props.loans.map((loan, index) => (
				<p key={loan.id}>
					Loan #{index}: {loan.name} - {loan.amount} ₫
				</p>
			))}
		</div>
	</div>
);

const AdminPage = (props) => (
	<Page
		title="Admin Dashboard - Lending Smart Contract Demo"
		description="Manage loan applications on Lending Smart Contract Demo"
		body={<AdminBody {...props} />}
	></Page>
);

export const getServerSideProps = async () => {
	const { data } = await getAllLoans();
	return {
		props: { loans: data },
	};
};

export default AdminPage;

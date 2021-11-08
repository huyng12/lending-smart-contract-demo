import { getLoan } from "../../api";
import { Page } from "../../components/page";

const LoanInformationBody = (props) => (
	<div>
		<p>Name: {props.loan.name}</p>
		<p>Amount: {props.loan.amount}</p>
	</div>
);

const LoanInformationPage = (props) => (
	<Page
		title={`Loan Details Information of ${props.loan.id} - Lending Smart Contract Demo`}
		description={`See details of loan ${props.loan.id} on Lending Smart Contract Demo`}
		body={<LoanInformationBody {...props} />}
	/>
);

export const getServerSideProps = async (context) => {
	const { id } = context.query;
	try {
		const { data } = await getLoan(id);
		return { props: { loan: data } };
	} catch (err) {
		return {
			notFound: true,
		};
	}
};

export default LoanInformationPage;

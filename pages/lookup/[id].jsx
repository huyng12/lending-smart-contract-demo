import { getLoanById } from "../../apis";
import LoanInfo from "../../components/loan-form/LoanInfo";
import { Page } from "../../components/page";

const LoanInformationBody = (props) => (
	<div style={{ textAlign: 'center' }}>
		<h1>Thông tin khoản vay</h1>
		<LoanInfo loanData={props.loan} />
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
		const { data } = await getLoanById(id);
		return { props: { loan: data } };
	} catch (err) {
		return {
			notFound: true,
		};
	}
};

export default LoanInformationPage;

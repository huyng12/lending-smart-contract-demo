import { Card } from "antd";
import { getLoanById } from "../../apis";
import { LoanInfo } from "../../components/loan-info";
import { Page } from "../../components/page";

const LoanInformationBody = (props) => (
	<div style={{ textAlign: "center", paddingTop: 30 }}>
		<h1>Thông tin khoản vay</h1>
		<Card style={{ margin: "auto", maxWidth: 650 }}>
			<LoanInfo loan={props.loan} bordered />
		</Card>
	</div>
);

const LoanInformationPage = (props) => (
	<Page
		title={`Thông tin chi tiết của khoản vay ${props.loan.id} - Lending Smart Contract Demo`}
		description={`Xem chi tiết khoản vay ${props.loan.id} trên Lending Smart Contract Demo`}
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

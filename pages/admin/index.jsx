import { Spin } from "antd";
import { useMemo } from "react";
import { LoanTable } from "../../components/loan-table";
import { useLoans } from "../../components/loan-table/state";
import { Page } from "../../components/page";

const style = {
	container: { paddingTop: 30, maxWidth: "90%", margin: "auto" },
	heading: { textAlign: "center" },
	spin: { marginTop: 10 },
};

const AdminBody = () => {
	const { data, loading } = useLoans();

	// loan list should be sorted desc by date for better UX
	const orderedData = useMemo(() => {
		if (!data) return [];
		const { data: loan } = data;
		loan.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
		return loan;
	}, [data]);

	return (
		<div style={style.container}>
			<h1 style={style.heading}>Các khoản vay hiện tại</h1>
			<Spin tip="Loading..." spinning={loading} style={style.spin}>
				{!loading && <LoanTable data={orderedData} loading={loading} />}
			</Spin>
		</div>
	);
};

const AdminPage = () => (
	<Page
		title="Trang quản trị - Lending Smart Contract Demo"
		description="Quản lý các khoản vay trên Lending Smart Contract Demo"
		body={<AdminBody />}
	/>
);

export default AdminPage;

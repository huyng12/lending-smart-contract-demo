import { useRouter } from "next/router";
import { LoanForm } from "../../components/loan-form";
import { useLoanForm } from "../../components/loan-form/state";
import { Page } from "../../components/page";

const s = {
	container: { paddingTop: 30 },
	heading: { textAlign: "center" },
};

const HomeBody = () => {
	const router = useRouter();
	const form = useLoanForm({ router });

	return (
		<div style={s.container}>
			<h1 style={s.heading}>Vay nhanh - Duyệt vay siêu tốc</h1>
			<LoanForm
				form={form.instance}
				onFinish={form.onFinish}
				loading={form.loading}
			/>
		</div>
	);
};

const HomePage = () => (
	<Page
		title="Trang chủ - Lending Smart Contract Demo"
		description="Đăng ký vay trực tuyến tại Lending Smart Contract Demo"
		body={<HomeBody />}
	/>
);

export default HomePage;

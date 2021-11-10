import { Form, message } from "antd";
import { useState } from "react";
import { createLoan } from "../../apis";

export const useLoanForm = ({ router }) => {
	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);

	const onFinish = async (loan) => {
		setLoading(true);
		loan.gender = Number(loan.gender);
		try {
			const data = await createLoan(loan);
			void message.success("Đăng ký vay thành công!");
			void router.push(`/lookup/${data.id}`);
		} catch (_) {
			void message.error(
				"Đã có lỗi xảy ra, quý khách hàng vui lòng quay lại sau!"
			);
		}
		setLoading(false);
	};

	return { instance: form, onFinish, loading };
};

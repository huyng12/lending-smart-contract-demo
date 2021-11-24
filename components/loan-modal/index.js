import { Button, message, Modal } from "antd";
import React, { useState } from "react";
import { disburseLoanById, reviewLoanById } from "../../apis/index";
import { LoanInfo } from "../loan-info";

export const LoanModelFooter = (props) => {
	const { loan, onCloseModal } = props;
	const [loading, setLoading] = useState(false);

	const withLoading = (fn) => {
		return async () => {
			setLoading(true);
			await fn();
			setLoading(false);
		};
	};

	const onApprove = async () => {
		try {
			await reviewLoanById(loan.id, { status: "approved" });
			void message.success("Duyệt vay thành công!");
		} catch (_) {
			void message.error(
				"Đã có lỗi xảy ra, quý khách hàng vui lòng quay lại sau!"
			);
		}
	};

	const onReject = async () => {
		try {
			await reviewLoanById(loan.id, { status: "rejected" });
			void message.success("Đã từ chối khoản vay!");
		} catch (_) {
			void message.error(
				"Đã có lỗi xảy ra, quý khách hàng vui lòng quay lại sau!"
			);
		}
	};

	const onDisburse = async () => {
		try {
			await disburseLoanById(loan.id);
			void message.success("Đã giải ngân khoản vay!");
		} catch (_) {
			void message.error(
				"Đã có lỗi xảy ra, quý khách hàng vui lòng quay lại sau!"
			);
		}
	};

	switch (loan.status) {
		case "pending":
			return [
				<Button
					key="cancel"
					type="default"
					loading={loading}
					onClick={onCloseModal}
				>
					Huỷ
				</Button>,
				<Button
					key="reject"
					type="primary"
					loading={loading}
					onClick={withLoading(onReject)}
					danger
				>
					Từ chối
				</Button>,
				<Button
					key="approve"
					type="primary"
					loading={loading}
					onClick={withLoading(onApprove)}
				>
					Duyệt vay
				</Button>,
			];
		case "approved":
			return [
				<Button
					key="disburse"
					type="primary"
					loading={loading}
					onClick={withLoading(onDisburse)}
				>
					Giải ngân
				</Button>,
			];
		default:
			return null;
	}
};

export const LoanModal = (props) => {
	const { loan } = props;
	return (
		<Modal
			title="Thông tin khoản vay"
			visible={props.visible}
			onCancel={props.onCloseModal}
			footer={
				<LoanModelFooter
					loan={loan}
					onCloseModal={props.onCloseModal}
				/>
			}
		>
			<LoanInfo loan={loan} />
		</Modal>
	);
};

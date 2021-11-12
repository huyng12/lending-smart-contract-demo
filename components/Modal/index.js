import { Modal } from "antd";
import React, {useState} from "react";

const OverlayModal = (props) => {
	const handleOk = (e) => {
		if (props.title === 'Review') {
			props.onCloseModal();
			return;
		}
		// disburse API

	};
	
	const handleCancel = (e) => {
		props.onCloseModal();
	};

	return (
		<Modal
			title="Thông tin khoản vay"
			visible={props.visible}
			onOk={handleOk}
			onCancel={handleCancel}
			okButtonProps={{ disabled: false }}
			cancelButtonProps={{ disabled: false }}
			okText={props.title === 'Review' ? 'OK' : 'Disburse'}
		>
			{/* <p>ID: {props.loanData.id}</p> */}
			<p>Trạng thái: {props.loanData.status}</p>
			<p>Tên: {props.loanData.name}</p>
			<p>Giới tính: {props.loanData.gender === 1 ? "Nam" : "Nữ"}</p>
			<p>Thời hạn: {props.loanData.duration} tháng</p>
			<p>Lãi suất: {props.loanData.interestRate}%</p>
		</Modal>
	);
};

export default OverlayModal;
import { Modal } from "antd";
import React from "react";
import { disburseLoanById } from "../../apis/index";

const OverlayModal = (props) => {
	const handleOk = (e) => {
		if (props.title === 'Review') {
			// accept loan
			
		} else {
			disburseLoanById(props.loanData.id).then(response => {
				console.log(response);
			}).catch(err => {
				console.log(err);
			})
		}
		props.onCloseModal();
		
	};
	
	const handleCancel = (e) => {
		if (props.title === 'Review') {
			// reject loan
		} 
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
			okText={props.title === 'Review' ? 'Accept' : 'Disburse'}
			cancelText={props.title === 'Review' ? 'Reject' : 'Cancel'}
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
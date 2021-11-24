import { Button } from "antd";
import { useState } from "react";
import { LoanModal } from "../loan-modal";

export const LoanModalButton = (props) => {
	const { loan } = props;
	const [visible, setVisible] = useState(false);

	// Modal controllers
	const showModal = () => void setVisible(true);
	const closeModal = () => void setVisible(false);

	return (
		<div>
			<Button type={props.type} block size="small" onClick={showModal}>
				{props.title}
			</Button>
			<LoanModal
				title={props.title}
				visible={visible}
				loan={loan}
				onCloseModal={closeModal}
			/>
		</div>
	);
};

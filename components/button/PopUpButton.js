import { Button } from "antd";
import { useState, useEffect } from "react";
import { getLoanById } from "../../apis";
import OverlayModal from '../Modal'

const PopUpButton = (props) => {
	const [visible, setVisible] = useState(false);
	const [loanData, setLoanData] = useState({});

	useEffect(() => {
		getLoanById(props.loanId)
			.then((response) => {
				const data = response.data;
				setLoanData({ ...data });
				console.log(loanData);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const showModal = () => {
		setVisible(true);
	};

	const closeModal = () => {
		setVisible(false)
	}

	return (
		<div>
			<Button type={props.type} size="middle" onClick={showModal}>
				{props.title}
			</Button>
			<OverlayModal title={props.title} visible={visible} loanData={loanData} onCloseModal={closeModal} />
		</div>
	);
};

export default PopUpButton;

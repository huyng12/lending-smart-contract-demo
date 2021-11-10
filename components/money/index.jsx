import { formatMoney } from "../../utils/money-formatter";

export const Money = (props) => {
	return (
		<div>
			<span>{formatMoney(props.value)}</span>
		</div>
	);
};

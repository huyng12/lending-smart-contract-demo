import { LinkOutlined } from "@ant-design/icons";
import { Button, Descriptions, Typography } from "antd";
import { formatMoney } from "../../utils/money-formatter";
import { formatPhoneNumber } from "../../utils/phone-formatter";

export const LoanInfo = (props) => {
	const { loan, ...rest } = props;
	const [transaction] = loan.transactions;
	return (
		<Descriptions column={1} labelStyle={{ fontWeight: "bold" }} {...rest}>
			<Descriptions.Item label="ID">
				<Typography.Paragraph
					copyable={{ text: loan.id }}
					style={{ fontFamily: "monospace", marginBottom: 0 }}
				>
					{loan.id}
				</Typography.Paragraph>
			</Descriptions.Item>
			<Descriptions.Item label="Tên">{loan.name}</Descriptions.Item>
			<Descriptions.Item label="CMND/CCCD">
				{loan.nationalId}
			</Descriptions.Item>
			<Descriptions.Item label="Số điện thoại">
				{formatPhoneNumber(loan.phoneNumber)}
			</Descriptions.Item>
			<Descriptions.Item label="Giới tính">
				{["Nữ", "Nam"][loan.gender]}
			</Descriptions.Item>
			<Descriptions.Item label="Số tiền muốn vay">
				{formatMoney(loan.amount)}
			</Descriptions.Item>
			<Descriptions.Item label="Kỳ hạn">
				{loan.duration} tháng
			</Descriptions.Item>
			<Descriptions.Item label="Số tiền phải trả">
				{formatMoney(loan.amount * loan.interestRate)}
			</Descriptions.Item>
			{typeof transaction !== "undefined" && (
				<Descriptions.Item>
					<Button
						type="primary"
						target="_blank"
						icon={<LinkOutlined />}
						href={`https://ropsten.etherscan.io/tx/${transaction.tx_id}`}
					>
						View on Etherscan
					</Button>
				</Descriptions.Item>
			)}
		</Descriptions>
	);
};

import {
	LinkOutlined,
	SafetyCertificateOutlined,
	SecurityScanOutlined,
	WarningOutlined,
} from "@ant-design/icons";
import { Button, Descriptions, message, Space, Tag, Typography } from "antd";
import { useState } from "react";
import { verifyLoanById } from "../../apis";
import { formatMoney } from "../../utils/money-formatter";
import { formatPhoneNumber } from "../../utils/phone-formatter";
import { getColor } from "../loan-table/columns";

const statusText = {
	pending: "Đang chờ",
	approved: "Đã duyệt",
	rejected: "Đã từ chối",
	disbursed: "Đã giải ngân",
};

const SCAN_STATUS = {
	NOT_SCANNED_YET: 0,
	SAFE: 1,
	TAMPERED: 2,
};

export const LoanInfo = (props) => {
	const { loan, ...rest } = props;
	const [transaction] = loan.transactions;

	const [scanLoading, setScanLoading] = useState(false);
	const [scanStatus, setScanStatus] = useState(SCAN_STATUS.NOT_SCANNED_YET);

	const scan = async () => {
		if (scanStatus !== SCAN_STATUS.NOT_SCANNED_YET) return;
		setScanLoading(true);
		try {
			const { isTampered } = await verifyLoanById(loan.id);
			setScanStatus(isTampered ? SCAN_STATUS.TAMPERED : SCAN_STATUS.SAFE);
		} catch (_) {
			message.error(
				`Đã có lỗi xảy ra khi kiểm tra tính toàn vẹn, quý khách hàng vui lòng quay lại sau!`
			);
		}
		setScanLoading(false);
	};

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
			<Descriptions.Item label="Trạng thái">
				<Tag color={getColor(loan.status)}>
					{statusText[loan.status]}
				</Tag>
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
			<Descriptions.Item>
				<Space>
					{loan.status === "disbursed" && (
						<Button
							type="primary"
							icon={(() => {
								switch (scanStatus) {
									case SCAN_STATUS.NOT_SCANNED_YET:
										return <SecurityScanOutlined />;
									case SCAN_STATUS.SAFE:
										return <SafetyCertificateOutlined />;
									case SCAN_STATUS.TAMPERED:
										return <WarningOutlined />;
								}
							})()}
							loading={scanLoading}
							onClick={scan}
							danger={scanStatus === SCAN_STATUS.TAMPERED}
							style={
								scanStatus === SCAN_STATUS.SAFE
									? {
											backgroundColor: "#52c41a",
											borderColor: "#237804",
									  }
									: null
							}
						>
							{(() => {
								switch (scanStatus) {
									case SCAN_STATUS.NOT_SCANNED_YET:
										return "Kiểm tra tính toàn vẹn";
									case SCAN_STATUS.SAFE:
										return "Dữ liệu toàn vẹn";
									case SCAN_STATUS.TAMPERED:
										return "Dữ liệu đã bị can thiệp";
								}
							})()}
						</Button>
					)}
					{typeof transaction !== "undefined" && (
						<Button
							type="ghost"
							target="_blank"
							icon={<LinkOutlined />}
							href={`https://ropsten.etherscan.io/tx/${transaction.tx_id}`}
						>
							View on Etherscan
						</Button>
					)}
				</Space>
			</Descriptions.Item>
		</Descriptions>
	);
};

import { Tag, Typography } from "antd";
import { formatPhoneNumber } from "../../utils/phone-formatter";
import { LoanModalButton } from "../loan-modal-button";

export const getColor = (status) => {
	switch (status) {
		case "pending":
			return "orange";
		case "approved":
			return "green";
		case "disbursed":
			return "purple";
		case "rejected":
		default:
			return "red";
	}
};

const getText = (status) => {
	switch (status) {
		case "pending":
			return "Kiểm duyệt";
		case "approved":
			return "Giải ngân";
		default:
			return "Chi tiết";
	}
};

const getType = (status) => {
	switch (status) {
		case "pending":
		case "approved":
			return "primary";
		default:
			return "default";
	}
};

export const columns = [
	{
		title: "ID",
		dataIndex: "id",
		key: "id",
		width: "120px",
		align: "center",
		render: (id) => (
			<Typography.Paragraph
				style={{ fontFamily: "monospace", marginBottom: 0 }}
				copyable={{ text: id }}
			>
				{id.slice(0, 7)}
			</Typography.Paragraph>
		),
	},
	{
		title: "Trạng thái",
		key: "status",
		dataIndex: "status",
		width: "120px",
		align: "center",
		filterSearch: true,
		onFilter: (value, record) => record.status === value,
		filters: [
			{ text: "Đang chờ", value: "pending" },
			{ text: "Đã duyệt", value: "approved" },
			{ text: "Đã từ chối", value: "rejected" },
			{ text: "Đã giải ngân", value: "disbursed" },
		],
		render: (status) => {
			const statusText = {
				pending: "Đang chờ",
				approved: "Đã duyệt",
				rejected: "Đã từ chối",
				disbursed: "Đã giải ngân",
			};
			return (
				<Tag color={getColor(status)} style={{ width: "100%" }}>
					{statusText[status]}
				</Tag>
			);
		},
	},
	{
		title: "Họ tên",
		dataIndex: "name",
		key: "name",
	},
	{
		title: "Số điện thoại",
		dataIndex: "phoneNumber",
		key: "phoneNumber",
		render: (phone) => formatPhoneNumber(phone),
	},
	{
		title: "Ngày tạo",
		dataIndex: "createdAt",
		key: "createdAt",
		render: (createdAt) => new Date(createdAt).toLocaleString(),
	},
	{
		title: "Khác",
		key: "action",
		width: "100px",
		align: "center",
		render: (_, loan) => {
			const { status } = loan;
			const title = getText(status);
			const type = getType(status);
			return (
				<LoanModalButton loan={loan} title={title} type={type}>
					{title}
				</LoanModalButton>
			);
		},
	},
];

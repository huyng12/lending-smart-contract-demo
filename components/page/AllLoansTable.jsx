import { Button, Table, Tag } from "antd";
import PopUpButton from "../button/PopUpButton";
import { useState } from "react";

const columns = [
	{
		title: "ID",
		dataIndex: "id",
		key: "id",
		render: (id) => id.slice(0, 7),
	},
	{
		title: "Trạng thái",
		key: "status",
		dataIndex: "status",
		render: (status) => {
			let color = "green";
			if (status === "pending") {
				color = "yellow";
			} else if (status === "approved") {
				color = "green";
			} else if (status === "disbursed") {
				color = "purple";
			} else {
				color = "red";
			}
			return (
				<Tag color={color} key={status}>
					{status.toUpperCase()}
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
		render: (text, record) => {
			if (record.status === "pending") {
				return (
					<PopUpButton
						loanId={record.id}
						title="Review"
						type="primary"
					>
						Review
					</PopUpButton>
				);
			}
			if (record.status === "approved") {
				return (
					<PopUpButton
						type="danger"
						loanId={record.id}
						title="Disburse"
					>
						Disburse
					</PopUpButton>
				);
			}
		},
	},
];

const AllLoansTable = (props) => {
	const [loanData, setLoanData] = useState(props.dataSource)
	return (
		<Table
			columns={columns}
			dataSource={loanData}
			pagination={{ pageSize: 5 }}
		/>
	);
};

export default AllLoansTable;

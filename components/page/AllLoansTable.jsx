import { Button, Table, Tag } from "antd";

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
		title: "Khác",
		key: "action",
		render: (text, record) => {
			console.log(record.status);
			if (record.status === "pending") {
				return (
					<Button size="middle" type="primary" id={record.id}>
						Review
					</Button>
				);
			}
			if (record.status === "approved") {
				return <Button size="middle" type="dashed">Disburse</Button>;
			}
			return <Button size="middle" type="dashed">.......</Button>;
		},
	},
];

const AllLoansTable = (props) => {
	return <Table columns={columns} dataSource={props.dataSource} />;
};

export default AllLoansTable;

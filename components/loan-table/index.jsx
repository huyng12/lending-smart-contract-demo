import { Table } from "antd";
import { columns } from "./columns";

export const LoanTable = ({ data }) => {
	return (
		<Table
			columns={columns}
			dataSource={data}
			pagination={{ pageSize: 5 }}
			size="middle"
			bordered
			rowKey="id"
		/>
	);
};

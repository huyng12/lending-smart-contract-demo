import { Form, Input } from "antd";
const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 8,
	},
};

const LoanInfo = (props) => {
	console.log(props.loanData);
	return (
		<Form {...layout} name="nest-messages" style={{ fontWeight: "bold" }}>
			<Form.Item name="id" label="ID">
				<Input
					defaultValue={props.loanData.id}
					style={{ fontWeight: "bold" }}
					disabled
				/>
			</Form.Item>
			<Form.Item name="status" label="Trạng thái">
				<Input
					defaultValue={props.loanData.status}
					style={{ fontWeight: "bold" }}
					disabled
				/>
			</Form.Item>
			<Form.Item name="name" label="Tên">
				<Input
					defaultValue={props.loanData.name}
					style={{ fontWeight: "bold" }}
					disabled
				/>
			</Form.Item>
			<Form.Item name="phone" label="Số điện thoại">
				<Input
					defaultValue={props.loanData.phoneNumber.slice(3)}
					style={{ fontWeight: "bold" }}
					prefix="+84"
					disabled
				/>
			</Form.Item>
			<Form.Item name="nationalId" label="Số CMND">
				<Input
					defaultValue={props.loanData.nationalId}
					style={{ fontWeight: "bold" }}
					disabled
				/>
			</Form.Item>
			<Form.Item name="gender" label="Giới tính">
				<Input
					defaultValue={props.loanData.gender == 1 ? "Nam" : "Nữ"}
					style={{ fontWeight: "bold" }}
					disabled
				/>
			</Form.Item>
			<Form.Item name="amount" label="Số tiền vay">
				<Input
					defaultValue={props.loanData.amount}
					style={{ fontWeight: "bold" }}
					suffix="đồng"
					disabled
				/>
			</Form.Item>
			<Form.Item name="interestRate" label="Lãi suất">
				<Input
					defaultValue={props.loanData.interestRate}
					style={{ fontWeight: "bold" }}
					suffix="%"
					disabled
				/>
			</Form.Item>
			<Form.Item name="duration" label="Thời hạn">
				<Input
					defaultValue={props.loanData.duration}
					style={{ fontWeight: "bold" }}
					suffix="tháng"
					disabled
				/>
			</Form.Item>
			<Form.Item name="createdAt" label="Ngày tạo">
				<Input
					defaultValue={new Date(
						props.loanData.createdAt
					).toLocaleString()}
					style={{ fontWeight: "bold" }}
					disabled
				/>
			</Form.Item>
		</Form>
	);
};

export default LoanInfo;

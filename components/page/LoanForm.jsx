import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import React from "react";

const { Option } = Select;
const LoanForm = (props) => {
	const onFinish = (loanData) => {
		console.log("Success:", loanData);
		// call API
		const userGender = loanData.gender === "female" ? 0 : 1;
		const dataToSave = {
			...loanData,
			gender: userGender,
		};
		axios
			.post("https://lending-sc-demo.nguyenrk.com/api/loan", dataToSave)
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<Form
			name="basic"
			labelCol={{
				span: 8,
			}}
			wrapperCol={{
				span: 8,
			}}
			initialValues={{
				remember: true,
			}}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
		>
			<Form.Item
				label="Name"
				name="name"
				rules={[
					{
						required: true,
						message: "Please input your name!",
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="National ID"
				name="nationalId"
				rules={[
					{
						required: true,
						message: "Please input your national ID !",
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="Phone Number"
				name="phoneNumber"
				rules={[
					{
						required: true,
						message: "Please input your phone number!",
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name="gender"
				label="Gender"
				rules={[
					{
						required: true,
					},
				]}
			>
				<Select placeholder="Select your gender">
					<Option value="male">male</Option>
					<Option value="female">female</Option>
				</Select>
			</Form.Item>
			<Form.Item
				label="Amount"
				name="amount"
				rules={[
					{
						required: true,
						message: "Please input your amount!",
					},
				]}
			>
				<Input type="number" />
			</Form.Item>
			<Form.Item
				label="Interest Rate"
				name="interestRate"
				rules={[
					{
						required: true,
						message: "Please input your interest rate!",
					},
				]}
			>
				<Input type="number" />
			</Form.Item>
			<Form.Item
				label="Duration"
				name="duration"
				rules={[
					{
						required: true,
						message: "Please input your duration!",
					},
				]}
			>
				<Input type="number" />
			</Form.Item>
			<Form.Item
				wrapperCol={{
					offset: 8,
					span: 16,
				}}
			>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default LoanForm;

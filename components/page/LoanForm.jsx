import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import React from "react";

const { Option } = Select;
const LoanForm = (props) => {
	const onFinish = (loanData) => {
		console.log("Success:", loanData);
		const userGender = loanData.gender === "female" ? 0 : 1; // convert gender data to type number
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
				alert("Input Value Not Valid");
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
				<Input placeholder="Your Full Name"/>
			</Form.Item>
			<Form.Item
				label="National ID"
				name="nationalId"
				rules={[
					{
						required: true,
						message: "Please input your national ID!. ",
					},
				]}
			>
				<Input placeholder="At leat 9 characters." />
			</Form.Item>
			<Form.Item
				label="Phone Number"
				name="phoneNumber"
				rules={[
					{
						required: true,
						message: "Please input your phone number!.",
					},
				]}
			>
				<Input placeholder="Must be 12 characters (include +84)" />
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
				<Input type="number" placeholder="Must be at least 100000đ" />
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
				<Input type="number" placeholder="Must be less than 32" />
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
				<Input type="number" placeholder="Must be less than 32" />
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

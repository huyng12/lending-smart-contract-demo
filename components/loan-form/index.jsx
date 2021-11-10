import { Button, Form, Input, Radio, Slider } from "antd";
import React from "react";
import { Money } from "../money";

// Manually define loan packages
const durations = [6, 12, 24];
const interestRates = durations.reduce((rate, duration) => {
	rate[duration] = 1 + duration * 0.1;
	return rate;
}, {});

export const LoanForm = ({ form, onFinish, loading }) => {
	const onFinishProxy = (data) =>
		onFinish({
			...data,
			interestRate: interestRates[data.duration],
		});

	return (
		<Form
			form={form}
			onFinish={onFinishProxy}
			autoComplete="off"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 8 }}
			initialValues={{ amount: 2000000, duration: 6 }}
		>
			{(fields) => (
				<>
					<Form.Item
						label="Tên"
						name="name"
						rules={[
							{
								required: true,
								message: "Vui lòng nhập tên!",
							},
						]}
					>
						<Input
							placeholder="Tên đầy đủ của bạn"
							disabled={loading}
						/>
					</Form.Item>
					<Form.Item
						label="CMND/CCCD"
						name="nationalId"
						rules={[
							{
								required: true,
								message: "Vui lòng nhập số CMND/CCCD!",
							},
						]}
					>
						<Input
							placeholder="Số chứng minh nhân dân / căn cước công dân"
							disabled={loading}
						/>
					</Form.Item>
					<Form.Item
						label="Số điện thoại"
						name="phoneNumber"
						rules={[
							{
								required: true,
								message: "Vui lòng nhập số điện thoại!",
							},
						]}
					>
						<Input
							placeholder="Số điện thoại của bạn"
							disabled={loading}
						/>
					</Form.Item>
					<Form.Item
						name="gender"
						label="Giới tính"
						rules={[
							{
								required: true,
								message: "Vui lòng chọn giới tính!",
							},
						]}
					>
						<Radio.Group disabled={loading}>
							<Radio.Button value="1">Nam</Radio.Button>
							<Radio.Button value="0">Nữ</Radio.Button>
						</Radio.Group>
					</Form.Item>
					<Form.Item label="Số tiền muốn vay" name="amount">
						<Slider
							min={1000000}
							max={10000000}
							step={500000}
							tipFormatter={(value) => <Money value={value} />}
							tooltipPlacement="right"
							tooltipVisible
							disabled={loading}
						/>
					</Form.Item>
					<Form.Item label="Kỳ hạn" name="duration">
						<Radio.Group disabled={loading}>
							{durations.map((duration) => (
								<Radio.Button
									key={`${duration}-mnth`}
									value={duration}
								>
									{duration} tháng
								</Radio.Button>
							))}
						</Radio.Group>
					</Form.Item>
					<Form.Item label="Số tiền phải trả">
						<Money
							value={
								fields.amount * interestRates[fields.duration]
							}
						/>
					</Form.Item>
					<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
						<Button
							type="primary"
							htmlType="submit"
							loading={loading}
						>
							Đăng ký khoản vay
						</Button>
					</Form.Item>
				</>
			)}
		</Form>
	);
};

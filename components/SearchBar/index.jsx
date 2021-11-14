import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import React from "react";

const { Search } = Input;

const suffix = (
	<AudioOutlined
		style={{
			fontSize: 16,
			color: "#1890ff",
		}}
	/>
);

const SearchBar = (props) => {
	const onSearch = (value) => console.log(value);

	return (
		<Space direction="vertical">
			<Search
				id="loan-id-input"
				placeholder="Nhập ID của khoản vay"
				onSearch={onSearch}
				size="middle"
				prefix="ID"
				enterButton
			/>
		</Space>
	);
};

export default SearchBar;

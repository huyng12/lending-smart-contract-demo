import { Input, message, Space } from "antd";
import Router from "next/router";
import React from "react";
import { getLoanById } from "../../apis";

const { Search } = Input;

const SearchBar = (props) => {
	const onSearch = (loanId) => {
		getLoanById(loanId)
			.then((res) => {
				Router.push(`/lookup/${loanId}`);
			})
			.catch((_) => {
				void message.error("ID không hợp lệ");
			});
	};

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

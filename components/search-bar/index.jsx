import { Input, message } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { getLoanById } from "../../apis";

export const SearchBar = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	const onSearch = (loanId) => {
		setLoading(true);
		getLoanById(loanId)
			.then(() => void router.push(`/lookup/${loanId}`))
			.catch(() => void message.error("ID không hợp lệ"))
			.finally(() => setLoading(false));
	};

	return (
		<Input.Search
			placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
			onSearch={onSearch}
			size="large"
			prefix="ID"
			enterButton
			disabled={loading}
			loading={loading}
		/>
	);
};

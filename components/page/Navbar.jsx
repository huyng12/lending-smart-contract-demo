import { DashOutlined, HomeOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Link from "next/link";
import React, { useState } from "react";

const { SubMenu } = Menu;

export const Navbar = () => {
	const [current, setCurrent] = useState("mail");

	const handleClick = (e) => {
		console.log("click ", e);
		setCurrent(e.key);
	};

	return (
		<Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
			<Menu.Item key="mail" icon={<HomeOutlined />}>
				<Link href="/">Home Page</Link>
			</Menu.Item>
			<SubMenu key="SubMenu" icon={<DashOutlined />} title="Khác">
				<Menu.ItemGroup title="Thông tin">
					<Menu.Item key="setting:1">
						<Link href="/lookup">Các khoản vay</Link>
					</Menu.Item>
					{/* <Menu.Item key="setting:2">
						<Link href="/">Tạo khoản vay</Link>
					</Menu.Item> */}
				</Menu.ItemGroup>
			</SubMenu>
		</Menu>
	);
};

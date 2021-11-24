import { DashOutlined, HomeOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

const PATH_TO_KEY = {
	"/": "home",
	"/lookup": "lookup",
	"/admin": "admin",
};

export const Navbar = () => {
	const router = useRouter();
	const selectedKeys = useMemo(() => {
		if (PATH_TO_KEY[router.pathname]) return [PATH_TO_KEY[router.pathname]];
		return [];
	}, [router.pathname]);

	return (
		<Menu mode="horizontal" selectedKeys={selectedKeys}>
			<Menu.Item key={PATH_TO_KEY["/"]} icon={<HomeOutlined />}>
				<Link href="/">Trang chủ</Link>
			</Menu.Item>
			<Menu.SubMenu icon={<DashOutlined />} title="Khác" key="other">
				<Menu.ItemGroup title="Thông tin">
					<Menu.Item key={PATH_TO_KEY["/lookup"]}>
						<Link href="/lookup">Tìm kiếm khoản vay</Link>
					</Menu.Item>
					<Menu.Item key={PATH_TO_KEY["/admin"]}>
						<Link href="/admin">Các khoản vay</Link>
					</Menu.Item>
				</Menu.ItemGroup>
			</Menu.SubMenu>
		</Menu>
	);
};

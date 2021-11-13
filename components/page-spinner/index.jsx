import { Spin } from "antd";
import s from "./spinner.module.css";

export const PageSpinner = ({ spinning }) => (
	<div className={s.container}>
		<Spin spinning={spinning} />
	</div>
);

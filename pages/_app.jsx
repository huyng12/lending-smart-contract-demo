import "antd/dist/antd.css";
import { Navbar } from "../components/page/Navbar";

const MyApp = ({ Component, pageProps }) => {
	return (
		<div>
			<Navbar />
			<Component {...pageProps} />
		</div>
	);
};

export default MyApp;

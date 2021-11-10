import "antd/dist/antd.css";

const MyApp = ({ Component, pageProps }) => {
	return (
		<div>
			<Component {...pageProps} />
		</div>
	);
};

export default MyApp;

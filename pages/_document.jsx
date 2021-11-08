import Document, { Head, Html, Main, NextScript } from "next/document";

const DocumentBody = () => (
	<Html>
		<Head>
			<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		</Head>
		<body>
			<Main />
			<NextScript />
		</body>
	</Html>
);

class MyDocument extends Document {
	render() {
		return <DocumentBody />;
	}
}

export default MyDocument;

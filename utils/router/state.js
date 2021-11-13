import { useEffect, useState } from "react";

export const useRouteChanging = ({ router }) => {
	const [routeChanging, setRouteChanging] = useState(false);

	useEffect(() => {
		const handleStart = () => void setRouteChanging(true);
		const handleStop = () => void setRouteChanging(false);

		router.events.on("routeChangeStart", handleStart);
		router.events.on("routeChangeComplete", handleStop);
		router.events.on("routeChangeError", handleStop);

		return () => {
			router.events.off("routeChangeStart", handleStart);
			router.events.off("routeChangeComplete", handleStop);
			router.events.off("routeChangeError", handleStop);
		};
	}, [router]);

	return { changing: routeChanging };
};

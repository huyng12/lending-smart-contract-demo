import useSWR from "swr";
import { fetcher } from "../../apis";

export const useLoans = () => {
	const { data, error } = useSWR(`/loan`, fetcher, { refreshInterval: 500 });
	return {
		data: data,
		error,
		loading: !error && !data,
	};
};

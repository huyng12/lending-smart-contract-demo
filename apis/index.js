import axios from "axios";

const req = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	timeout: 15000,
	headers: {
		"Content-Type": "application/json",
	},
});

export const fetcher = async (url) => {
	return req.get(url).then((r) => r.data);
};

export const createLoan = async (loan) => {
	return req.post("/loan", loan).then((r) => r.data);
};

export const getAllLoans = async () => {
	return req.get("/loan").then((r) => r.data);
};

export const getLoanById = async (id) => {
	const endpoint = `/loan/${id}`;
	return req.get(endpoint).then((r) => r.data);
};

export const reviewLoanById = async (id, { status }) => {
	const endpoint = `/loan/${id}/review`;
	return req.post(endpoint, { status }).then((r) => r.data);
};

export const verifyLoanById = async (id) => {
	const endpoint = `/loan/${id}/verify`;
	return req.post(endpoint).then((r) => r.data);
};

export const disburseLoanById = async (id) => {
	const endpoint = `/loan/${id}/disburse`;
	return req.post(endpoint).then((r) => r.data);
};

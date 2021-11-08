import axios from "axios";

const req = axios.create({
	baseURL: process.env.API_URL,
	timeout: 15000,
	headers: {
		"Content-Type": "application/json",
	},
});

export const getAllLoans = () => {
	return req.get("/loan").then((r) => r.data);
};

export const getLoanById = (id) => {
	const endpoint = `/loan/${id}`;
	return req.get(endpoint).then((r) => r.data);
};

export const reviewLoanById = (id, { status }) => {
	const endpoint = `/loan/${id}/review`;
	return req.post(endpoint, { status }).then((r) => r.data);
};

export const verifyLoanById = (id) => {
	const endpoint = `/loan/${id}/verify`;
	return req.post(endpoint).then((r) => r.data);
};

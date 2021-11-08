import isUUID from "validator/lib/isUUID";

export const isValidLoanId = (id) => {
	return typeof id !== undefined && isUUID(id, 4);
};

export const formatPhoneNumber = (phone) => {
	const [code, number] = [phone.slice(0, 3), phone.slice(3)];
	return `(${code}) ${number}`;
};

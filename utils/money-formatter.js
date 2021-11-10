const moneyFormatter = new Intl.NumberFormat("vi-VN", {
	style: "currency",
	currency: "vnd",
});

export const formatMoney = (s) => moneyFormatter.format(s);

import { Contract } from "@ethersproject/contracts";
import { JsonRpcProvider } from "@ethersproject/providers";
import { Wallet } from "@ethersproject/wallet";

const {
	ROPSTEN_PRIVATE_KEY,
	ALCHEMY_PROVIDER_URL,
	SETH_CONTRACT_ADDRESS,
	SETH_CONTRACT_ABI,
} = process.env;

const provider = new JsonRpcProvider(ALCHEMY_PROVIDER_URL);

const wallet = new Wallet(ROPSTEN_PRIVATE_KEY, provider);

export const contract = new Contract(
	SETH_CONTRACT_ADDRESS,
	JSON.parse(SETH_CONTRACT_ABI),
	wallet
);

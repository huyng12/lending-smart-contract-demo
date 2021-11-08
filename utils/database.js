import { createClient } from "@supabase/supabase-js";

const { SUPABASE_URL, SUPABASE_SUDO_TOKEN } = process.env.SUPABASE_URL;

if (
	typeof SUPABASE_URL === undefined ||
	typeof SUPABASE_SUDO_TOKEN === undefined
) {
	throw Error(
		"Missing environment variables: SUPABASE_URL or SUPABASE_SUDO_TOKEN"
	);
}

export const db = createClient(
	process.env.SUPABASE_URL,
	process.env.SUPABASE_SUDO_TOKEN
);

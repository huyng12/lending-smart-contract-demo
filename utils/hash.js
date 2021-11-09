import { sha256 } from "js-sha256";

export const getObjectHash = (obj) => sha256(JSON.stringify(obj));

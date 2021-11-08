import toCamelCase from "lodash.camelcase";
import toSnakeCase from "lodash.snakecase";

export const transformObjectKeys = (obj, transformer) => {
	return Object.keys(obj).reduce((newObj, key) => {
		newObj[transformer(key)] = obj[key];
		return newObj;
	}, {});
};

export const camelCaseObjectKeys = (obj) =>
	transformObjectKeys(obj, toCamelCase);

export const snakeCaseObjectKeys = (obj) =>
	transformObjectKeys(obj, toSnakeCase);

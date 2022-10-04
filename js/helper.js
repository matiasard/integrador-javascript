import { TIMEOUT_SEC } from "./config.js";

const timeout = function (s) {
	return new Promise(function (_, reject) {
		setTimeout(() => {
			reject(new Error(`Request took too long! Timeout after ${s} second`));
		}, s * 1000);
	});
};

export const getJSON = async function (url) {
	try {
		// const res = await fetch(url);
		const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
		const data = await res.json();

		// console.log(data);
		if (!res.ok) throw new Error(`${data.message} (${data.status})`);
		return data;
	} catch (error) {
		throw error;
	}
};

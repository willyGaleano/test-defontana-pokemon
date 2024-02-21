import constants from "@infrastructure/constants";
import axios, { AxiosInstance } from "axios";

class HttpClient {
   public instance: AxiosInstance;
	constructor() {
		const client = axios.create({
			baseURL: constants.VITE_POKEAPI_BASE_URL,
		});
		this.instance = client;
	}
}

export default new HttpClient();
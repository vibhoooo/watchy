import OpenAI from "openai";
import {FREE_API_KEY, BASE_URL} from "./constants";

const client = new OpenAI({
	apiKey: FREE_API_KEY,
	baseURL: BASE_URL,
	dangerouslyAllowBrowser: true
});

export default client;

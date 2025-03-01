import OpenAI from "openai";
import {OPENAPI_API_KEY} from "./constants";

const client = new OpenAI({
	apiKey: OPENAPI_API_KEY,
	dangerouslyAllowBrowser: true
});

export default client;

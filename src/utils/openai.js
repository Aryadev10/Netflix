// import OpenAI from "openai";
// import { OPENAI_KEY } from "./constants";

// const openai = new OpenAI({
//   apiKey: OPENAI_KEY,
//   dangerouslyAllowBrowser: true,
// });

// export default openai;
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_KEY } from "./constants";

const genAI = new GoogleGenerativeAI(GEMINI_KEY);

export default genAI;
 
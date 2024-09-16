import { parser } from "./dist/index.js";

const text = `- ciao ciao : {"mimmo"}`;

console.log(parser.parse(text).toString());

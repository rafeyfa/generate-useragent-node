import { userAgentFactory } from "../lib";
let seed: string = "username";
const useragent = userAgentFactory(seed);
console.log(useragent)
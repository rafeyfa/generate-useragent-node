import { homedir } from "os";
export const HOME_PATH = homedir();
export const PROJECT_ROOT_PATH = __dirname + '/../';
export const VERSION = "v1.0.1";
export const ONE_LINE_CHANGELOG = "UserAgent Generator.";
export const IS_DEV = process.env.NODE_ENV && process.env.NODE_ENV === "development";
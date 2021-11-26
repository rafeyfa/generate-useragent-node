"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_DEV = exports.ONE_LINE_CHANGELOG = exports.VERSION = exports.PROJECT_ROOT_PATH = exports.HOME_PATH = void 0;
const os_1 = require("os");
exports.HOME_PATH = (0, os_1.homedir)();
exports.PROJECT_ROOT_PATH = __dirname + '/../';
exports.VERSION = "v1.0.1";
exports.ONE_LINE_CHANGELOG = "UserAgent Generator.";
exports.IS_DEV = process.env.NODE_ENV && process.env.NODE_ENV === "development";
//# sourceMappingURL=constants.js.map
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Environment = void 0;
var findora_sdk_v2_core_1 = require("@findora-network/findora-sdk-v2-core");
var Environment = /** @class */ (function () {
    function Environment() {
    }
    Environment.init = function (sdkEnv) {
        Environment.config = __assign(__assign({}, findora_sdk_v2_core_1.Sdk.environment), sdkEnv);
    };
    Environment.reset = function () {
        Environment.config = __assign({}, findora_sdk_v2_core_1.Sdk.environment);
    };
    Environment.config = __assign({}, findora_sdk_v2_core_1.Sdk.environment);
    return Environment;
}());
exports.Environment = Environment;
//# sourceMappingURL=environment.js.map
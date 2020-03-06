"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var DefaultController = /** @class */ (function () {
    function DefaultController() {
        this.router = express_1.default.Router();
        this.router.get('/', function (req, res) {
            res.json({ hello: "string" });
        });
    }
    Object.defineProperty(DefaultController.prototype, "name", {
        get: function () {
            return "app";
        },
        enumerable: true,
        configurable: true
    });
    return DefaultController;
}());
exports.default = DefaultController;

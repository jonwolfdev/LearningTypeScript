"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var WebServer = /** @class */ (function () {
    function WebServer(_port) {
        this._port = _port;
        this._app = express_1.default();
        this._app.use(body_parser_1.default.json());
        this._app.use(body_parser_1.default.urlencoded({ extended: true }));
    }
    Object.defineProperty(WebServer.prototype, "express", {
        get: function () {
            return this._app;
        },
        enumerable: true,
        configurable: true
    });
    WebServer.prototype.addController = function (controller) {
        this._app.use("/" + controller.name, controller.router);
    };
    WebServer.prototype.start = function () {
        var _this = this;
        this._server = this._app.listen(this._port, function () {
            console.log("Server is listening on " + _this._port);
        });
    };
    return WebServer;
}());
exports.default = WebServer;

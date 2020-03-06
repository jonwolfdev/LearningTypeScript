"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var webserver_1 = __importDefault(require("./webserver"));
var defaultController_1 = __importDefault(require("./defaultController"));
var server = new webserver_1.default(3001);
var defController = new defaultController_1.default();
server.addController(defController);
server.start();

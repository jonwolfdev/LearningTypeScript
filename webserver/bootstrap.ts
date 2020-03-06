import webserver from './webserver';
import DefaultController from './defaultController';

const server:webserver = new webserver(3001);
const defController:DefaultController = new DefaultController();

server.addController(defController);
server.start();
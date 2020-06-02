import webserver from './webserver';
import DefaultController from './defaultController';

const server:webserver = new webserver(3001);
const defController:DefaultController = new DefaultController();

server.addController(defController);
server.start();

process.on('exit', (code) => {
    // server.stop();
});

process.on('SIGINT', (code) => {
    console.log('');
    console.log('Got kill signal...');
    server.stop();
    console.log('Server is stopped');
    process.exit(0);
});

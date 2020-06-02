import express, {Express} from 'express'
import bodyparse from 'body-parser'
import IController from './icontroller';
import {Server} from "http";

export default class WebServer{
    private _app: Express;
    private _server: Server | undefined;

    get express(): Express{
        return this._app;
    }

    constructor(private _port:number){
        this._app = express();

        this._app.use(bodyparse.json());
        this._app.use(bodyparse.urlencoded({extended:true}));

        this._app.use((req, res, next) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Credentials", "true");
            res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
            res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
            next();
        });
    }

    public addController(controller:IController):void{
        this._app.use(`/${controller.name}`, controller.router);
    }

    public start():void{
        this._server = this._app.listen(this._port, () =>{
            console.log(`Server is listening on ${this._port} with CORS`);
        });
    }
    public stop(): void {
        console.log('Server is stopping...');
        this._server?.close();
    }
}

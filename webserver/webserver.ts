import express, {Express} from 'express'
import bodyparse from 'body-parser'
import IController from './icontroller';

export default class WebServer{
    private _server: Express;

    get express(): Express{
        return this._server;
    }

    constructor(){
        this._server = express();

        this._server.use(bodyparse.json());
        this._server.use(bodyparse.urlencoded({extended:true}));
    }

    public addController(controller:IController):void{
        this._server.use(`/${controller.name}`, controller.router);
    }

    public start():void{
        //
    }
}
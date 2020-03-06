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
    }

    public addController(controller:IController):void{
        this._app.use(`/${controller.name}`, controller.router);
    }

    public start():void{
        this._server = this._app.listen(this._port, () =>{
            console.log(`Server is listening on ${this._port}`);
        });
    }
}
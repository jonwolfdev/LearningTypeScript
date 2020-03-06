import IController from './icontroller'
import express, { Router } from 'express';

export default class DefaultController implements IController {

    router:Router;

    get name():string{
        return "app";
    }

    constructor(){
        this.router = express.Router();

        this.router.get('/', (req, res) =>{
            res.json({hello:"string"});
        });
    }
}
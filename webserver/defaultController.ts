import webserver from './webserver'
import IController from './icontroller'
import express, { Router } from 'express';

export default class DefaultController implements IController {

    router:Router = express.Router();

    get name():string{
        return "app";
    }

    constructor(){
        //
    }
}
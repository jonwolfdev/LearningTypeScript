import { Router } from "express";

export default interface IController {
    name: string;
    router:Router;
}
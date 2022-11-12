import { Router } from "express";

interface IRoute {
  getRouterPadrao(): Router;
}

export default IRoute;

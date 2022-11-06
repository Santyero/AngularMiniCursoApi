import { Router } from "express";

interface IRoute {
  iniciarRotas(): Router;
}

export default IRoute;

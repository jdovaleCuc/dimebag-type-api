import { Application } from "express";
import http from "http";
import https from "https";

function CreateServer(app: Application): http.Server | https.Server {
  return http.createServer(app);
}

export default CreateServer;

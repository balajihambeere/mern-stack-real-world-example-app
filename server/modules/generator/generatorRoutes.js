import express from "express";
import { generatorHtml, generatorSitemap } from "./generatorController";

const generatorRoutes = express.Router();

generatorRoutes.use("/generator/:_id", generatorHtml);
generatorRoutes.use("/generatorSitemap", generatorSitemap);

module.exports = generatorRoutes;
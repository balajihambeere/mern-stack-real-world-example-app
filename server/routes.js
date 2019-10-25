"use strict";
import express from "express";
import topicRoutes from "./modules/topics/topicRoutes";
import skillRoutes from "./modules/skill/skillRoutes";
import generatorRoutes from "./modules/generator/generatorRoutes";
const routes = express.Router();

routes.use("/", skillRoutes);
routes.use("/", topicRoutes);
routes.use("/", generatorRoutes);

module.exports = routes;
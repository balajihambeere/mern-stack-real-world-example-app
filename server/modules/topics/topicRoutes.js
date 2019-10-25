import express from "express";
import { addTopic, getTopics } from "./topicController";

const topicRoutes = express.Router();

topicRoutes.use("/topic", addTopic);

topicRoutes.use("/topics", getTopics);

module.exports = topicRoutes;
"use strict";
import mongoose from "mongoose";
import TopicSchema from "./topicModel";
const Topic = mongoose.model("Topics", TopicSchema);

const addTopic = async (request, response) => {
    let newTopic = new Topic(request.body);
    try {
        const result = await newTopic.save();
        return response.formatter.ok(result, { "success": true, "message": "ADDED_TOPIC_SUCCESS" });
    } catch (error) {
        return response.formatter.serverError({ "error": error, "failed": true, "message": error.message });
    }
};

const getTopics = async (request, response) => {
    try {
        const result = await Topic.find({});
        return response.formatter.ok(result, { "success": true, "message": "FETCH_TOPIC_SUCCESS" });
    } catch (error) {
        return response.formatter.serverError({ "error": error, "failed": true, "message": error.message });
    }
};


module.exports = {
    addTopic,
    getTopics
};

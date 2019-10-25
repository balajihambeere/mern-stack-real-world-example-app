"use strict";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ObjectId = mongoose.Schema.ObjectId;

const TopicSchema = new Schema({
    title: {
        type: String
    },
    slug: {
        type: String
    },
    metaDescription: {
        type: String
    },
    keywords: {
        type: String
    },
    content: {
        type: String
    },
    imageUrl: {
        type: String
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    skillId: {
        type: ObjectId,
        ref: "Skill",
        Index: true,
    }
});

module.exports = TopicSchema;
"use strict";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SkillSchema = new Schema({
    name: {
        type: String,
    },
    title: {
        type: String,
    },
    slug: {
        type: String
    },
    createDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = SkillSchema;
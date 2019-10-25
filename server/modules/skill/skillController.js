"use strict";
import mongoose from "mongoose";
import SkillSchema from "./skillModel";

const Skill = mongoose.model("Skill", SkillSchema);

const addSkill = async (request, response) => {
    let newSkill = new Skill(request.body);
    try {
        const result = await newSkill.save();
        return response.formatter.ok(result, { "success": true, "message": "ADDED_SKILL_SUCCESS" });
    } catch (error) {
        return response.formatter.serverError({ "error": error, "failed": true, "message": error.message });
    }
};

const updateSkill = async (request, response) => {
    try {
        const result = await Skill.findOneAndUpdate({ _id: request.params._id }, request.body, { new: true });
        return response.formatter.ok(result, { "success": true, "message": "UPDATE_SKILL_SUCCESS" });
    } catch (error) {
        return response.formatter.serverError({ "error": error, "failed": true, "message": error.message });
    }
};


const getSkills = async (request, response) => {
    try {
        const result = await Skill.find({});
        return response.formatter.ok(result, { "success": true, "message": "ADDED_FETCH_SUCCESS" });
    } catch (error) {
        return response.formatter.serverError({ "error": error, "failed": true, "message": error.message });
    }
};

module.exports = {
    addSkill,
    getSkills,
    updateSkill
};

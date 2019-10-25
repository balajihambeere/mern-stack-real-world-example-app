import express from "express";
import { addSkill, getSkills,updateSkill } from "./skillController";

const skillRoutes = express.Router();

skillRoutes.use("/skill/:_id", updateSkill);
skillRoutes.use("/skill", addSkill);
skillRoutes.use("/skills", getSkills);

module.exports = skillRoutes;
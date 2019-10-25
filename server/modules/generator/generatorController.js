"use strict";
import mongoose from "mongoose";
import SkillSchema from "../skill/skillModel";
import { generation } from "../../utils/generator";
import { createDirectory, createHtmlFile, createXMLSiteMapFile, createHTMLSiteMapFile } from "../../utils/filesystem";
import { xmlSiteMap, htmlSiteMap } from "../../utils/sitemapGenerator";
var minify = require("html-minifier").minify;

const Skill = mongoose.model("Skill", SkillSchema);
const ObjectId = mongoose.Types.ObjectId;

const generatorHtml = async (request, response) => {
    const condition = [
        {
            $match: { _id: ObjectId(request.params._id) }
        },
        {
            $lookup: {
                from: "topics",
                localField: "_id",    // field in the orders collection
                foreignField: "skillId",  // field in the items collection
                as: "lessons"
            }
        }
    ];
    try {
        const result = await Skill.aggregate(condition);
        const skills = await Skill.find({ _id: ObjectId(request.params._id) });
        if (result[0]) {
            const item = result[0];
            createDirectory(item.name.toLowerCase()).then((dirResult) => {
                if (dirResult) {
                    for (let [index, lesson] of item.lessons.entries()) {
                        let prev, next = null;
                        let prevIndex, nextIndex = null;
                        prevIndex = index - 1;
                        nextIndex = index + 1;
                        if (item.lessons[prevIndex]) {
                            prev = item.lessons[prevIndex];
                        }
                        if (item.lessons[nextIndex]) {
                            next = item.lessons[nextIndex];
                        }
                        generation(item, lesson, skills, prev, next).then((htmlContent) => {
                            // let result = minify(htmlContent, { removeAttributeQuotes: true });
                            createHtmlFile(lesson.slug, item.name.toLowerCase(), htmlContent).then((status) => {
                            });
                        });
                    }
                    return response.formatter.ok(dirResult, { "success": true, "message": "CONTENT_CREATION_SUCCESS" });
                }
            });
        }
    } catch (error) {
        return response.formatter.serverError({ "error": error, "failed": true, "message": error.message });
    }
};


const generatorSitemap = async (request, response) => {
    const condition = [
        {
            $lookup: {
                from: "topics",
                localField: "_id",    // field in the orders collection
                foreignField: "skillId",  // field in the items collection
                as: "lessons"
            }
        }
    ];
    try {
        const result = await Skill.aggregate(condition);
        xmlSiteMap(result).then((content) => {
            createXMLSiteMapFile("sitemap", content);
        });
        htmlSiteMap(result).then((content) => {
            createHTMLSiteMapFile("sitemap", content);
        });
    }
    catch (error) {
    }
};

module.exports = {
    generatorHtml,
    generatorSitemap
};

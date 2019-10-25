// import fs from "fs";
const fs = require('fs');
const path = "F://sync_store//dynamic//";

const createDirectory = (directoryName) => {
    return new Promise((resolve, reject) => {
        let exists = fs.existsSync(path + directoryName);
        if (!exists) {
            fs.mkdir(path + directoryName, { recursive: true }, (error) => {
                if (error) {
                    reject(error);
                };
                resolve(true);
            });
        }
        resolve(true);
    });
}

const createHtmlFile = (fileName, directoryName, content) => {
    return new Promise((resolve, reject) => {
        let exists = fs.existsSync(path + directoryName + "/" + fileName);
        const fullPath = path + directoryName + `/${fileName}.html`;
        if (!exists) {
            fs.writeFile(fullPath, content, function (error) {
                if (error) {
                    console.log(error);
                    reject(error);
                };
                resolve(true);
            });
        }
    });
}

const createXMLSiteMapFile = (fileName, content) => {
    return new Promise((resolve, reject) => {
        let exists = fs.existsSync(path + "/" + fileName);
        const fullPath = path + `/${fileName}.xml`;
        if (!exists) {
            fs.writeFile(fullPath, content, function (error) {
                if (error) {
                    console.log(error);
                    reject(error);
                };
                resolve(true);
            });
        }
    });
}

const createHTMLSiteMapFile = (fileName, content) => {
    return new Promise((resolve, reject) => {
        let exists = fs.existsSync(path + "/" + fileName);
        const fullPath = path + `/${fileName}.html`;
        if (!exists) {
            fs.writeFile(fullPath, content, function (error) {
                if (error) {
                    console.log(error);
                    reject(error);
                };
                resolve(true);
            });
        }
    });
}

module.exports = {
    createDirectory,
    createHtmlFile,
    createXMLSiteMapFile,
    createHTMLSiteMapFile
}
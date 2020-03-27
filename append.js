"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
function appendLine(filePath, linenumber, line) {
    return new Promise((resolve, reject) => {
        try {
            const data = fs_1.readFileSync(filePath).toString().split("\n");
            data.splice(linenumber, 0, line);
            fs_1.writeFileSync(filePath, data.join('\n'), 'utf8');
            resolve();
        }
        catch (e) {
            reject(e);
        }
    });
}
exports.appendLine = appendLine;
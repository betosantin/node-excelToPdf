const fs = require("fs");
const util = require("util");

class Reader {

    constructor() {
        this.reader = util.promisify(fs.readFile);
    }

    async read(filePath, encode) {
        try {
            if(encode == undefined){
                encode =  "utf-8";
            }

            return await this.reader(filePath, encode);
        } catch (err) {
            return undefined;
        }
    }
}

module.exports = Reader;
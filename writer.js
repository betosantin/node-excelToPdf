const fs = require("fs");
const util = require("util");

class Writer {

    constructor() {
        this.writer = util.promisify(fs.writeFile);
    }

    async writer(fileName, data) {
        try {
            await this.write(fileName, data);

            return true;
        } catch (err) {
            return false;
        }
    }
}

module.exports = Writer;
var pdf = require("html-pdf");

class PdfWriter {

    async writer(fileName, html) {
        pdf.create(html, {}).toFile(fileName, (err) => { });
    }
}

module.exports = PdfWriter;
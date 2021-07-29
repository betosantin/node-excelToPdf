var Reader = require("./reader");
var Processamento = require("./processamento");
const Table = require("./table");
const HtmlParser = require("./htmlparser");
const Writer = require("./writer");
const PdfWriter = require("./pdfWriter");

async function lerDados() {
    
    var dados = await new Reader().read("./dados.csv");

    var dadosProcessados = Processamento.Process(dados);
    var usuarios = new Table(dadosProcessados);

   var html = await HtmlParser.Parse(usuarios);

   await new Writer().writer("./output/"+Date.now() + ".html", html);
   await new PdfWriter().writer("./output/"+Date.now() + ".pdf", html);
}

lerDados();
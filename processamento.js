const fs = require("fs");
const util = require("util");

class Processamento {

    static Process(data){

        var dados = data.split("\n");
        var rows = [];

        dados.forEach(r =>{
            var arr = r.split(",");

            rows.push(arr);
        });

        return rows;
    }


}

module.exports = Processamento;
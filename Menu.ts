import readlinesync = require("readline-sync");
import { colors } from "./Color";
import { Produto } from "./src/model/Produto";
import { Consolo } from "./src/model/Consolo";

let opcao: number;

export function main() {

    const consolo: Consolo = new Consolo(158160, "Consolo Magick Mike", 1, 290, 17, "verde");

    while (true) {

        console.log(colors.fg.magentastrong, colors.bg.black, "\n***************************************************");
        console.log(colors.fg.magentastrong, colors.bg.black, "                                                     ");
        console.log(colors.fg.magentastrong, colors.bg.black, "         SEX SHOP - LIKE A PRAYER                    ");
        console.log(colors.fg.magentastrong, colors.bg.black, "                                                     ");
        console.log(colors.fg.magentastrong, colors.bg.black, "*****************************************************");
        console.log(colors.fg.magentastrong, colors.bg.black, "                                                     ");
        console.log(colors.fg.magentastrong, colors.bg.black, "              1 - Listar todos os Produtos           ");
        console.log(colors.fg.magentastrong, colors.bg.black, "              2 - Listar Produto pelo ID             ");
        console.log(colors.fg.magentastrong, colors.bg.black, "              3 - Cadastrar Produto                  ");
        console.log(colors.fg.magentastrong, colors.bg.black, "              4 - Atualizar Produto                  ");
        console.log(colors.fg.magentastrong, colors.bg.black, "              5 - Deletar Produto                    ");
        console.log(colors.fg.magentastrong, colors.bg.black, "              6 - Sair                               ");
        console.log(colors.fg.magentastrong, colors.bg.black, "                                                     ");
        console.log(colors.fg.magentastrong, colors.bg.black, "*****************************************************");

               console.log("Entre com a opção desejada: ");
               opcao = readlinesync.questionInt("");
       
               if (opcao == 6) {
                   console.log("\nJust like a prayer, you know I'll take you there! ;-) ");
                   sobre();
                   process.exit(6);
       
                   switch (opcao) {
                       case 1:
                           console.log("\n\nListar todos os Produtos\n\n");
                            break;
                       case 2:
                           console.log("\n\nListar Produtos pelo ID\n\n");
                           break;
                       case 3:
                           console.log("\n\nCadastrar Produto\n\n");
                            break;
                       case 4:
                           console.log("\n\nAtualizar Produto\n\n");
                            break;
                       case 5:
                           console.log("\n\nDeletar Produto\n\n");
                            break;
                   }
               }
       
           }
       }
       
       export function sobre(): void {
           console.log("\n****************************************************");
           console.log("Projeto Desenvolvido por: ");
           console.log("Sexy Bunny @>---");
           console.log("Relaxa e Goza!");
           console.log("*****************************************************");
       }

 main();
import readlinesync = require("readline-sync");
import { colors } from "./Color";
import { ProdutoController } from "./src/controller/ProdutoController";
import { Consolo } from "./src/model/Consolo";
import { Lingerie } from "./src/model/Lingerie";
import { Lubrificante } from "./src/model/Lubrificante";
import { Vibrador } from "./src/model/Vibrador";

export function main() {
  let opcao: number;
  let id: number;
  let tipo: number;
  let preco: number;
  let tamanho: number;
  let nome: string;
  let categoria: string;
  let modelo: string;
  let cor: string;
  let sabor: string;
  let tipoProduto = ["Consolo", "Vibrador", "Lingerie", "Lubrificante"];

  const produtos: ProdutoController = new ProdutoController();

  const consolo: Consolo = new Consolo(
    produtos.gerarId(),
    "Consolo Magick Mike",
    1,
    290,
    17,
    "verde"
  );
  produtos.cadastrar(consolo);

  while (true) {
    console.log(
      colors.fg.magentastrong,
      colors.bg.black,
      "\n***************************************************"
    );
    console.log(
      colors.fg.magentastrong,
      colors.bg.black,
      "                                                     "
    );
    console.log(
      colors.fg.magentastrong,
      colors.bg.black,
      "         SEX SHOP - LIKE A PRAYER                    "
    );
    console.log(
      colors.fg.magentastrong,
      colors.bg.black,
      "                                                     "
    );
    console.log(
      colors.fg.magentastrong,
      colors.bg.black,
      "*****************************************************"
    );
    console.log(
      colors.fg.magentastrong,
      colors.bg.black,
      "                                                     "
    );
    console.log(
      colors.fg.magentastrong,
      colors.bg.black,
      "              1 - Listar todos os Produtos           "
    );
    console.log(
      colors.fg.magentastrong,
      colors.bg.black,
      "              2 - Listar Produto pelo ID             "
    );
    console.log(
      colors.fg.magentastrong,
      colors.bg.black,
      "              3 - Cadastrar Produto                  "
    );
    console.log(
      colors.fg.magentastrong,
      colors.bg.black,
      "              4 - Atualizar o Produto       "
    );
    console.log(
      colors.fg.magentastrong,
      colors.bg.black,
      "              5 - Deletar Produto                    "
    );
    console.log(
      colors.fg.magentastrong,
      colors.bg.black,
      "              6 - Sair                               "
    );
    console.log(
      colors.fg.magentastrong,
      colors.bg.black,
      "                                                     "
    );
    console.log(
      colors.fg.magentastrong,
      colors.bg.black,
      "*****************************************************"
    );

    console.log("Entre com a opcao desejada: ");
    opcao = readlinesync.questionInt("");

    if (opcao == 6) {
      console.log("\nJust like a prayer, you know I'll take you there! ;-) ");
      sobre();
      process.exit(6);
    }

    switch (opcao) {
      case 1:
        console.log("\n\nListar todos os Produtos\n\n");
        produtos.listarTodos();

        keyPress();
        break;

      case 2:
        console.log("\n\nListar Produtos pelo ID\n\n");
        id = readlinesync.questionInt("Digite a ID do Produto: ");
        produtos.listarPorId(id);

        keyPress();
        break;
      case 3:
        console.log("\n\nCadastrar Produto\n\n");
        nome = readlinesync.question("Digite o Nome do Produto: ");
        tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;
        preco = readlinesync.questionFloat("Digite o preco: ");

        switch (tipo) {
          case 1:
            tamanho = readlinesync.questionInt("Digite o tamanho do Consolo: ");
            cor = readlinesync.question("Digite a cor do Consolo: ");
            produtos.cadastrar(
              new Consolo(produtos.gerarId(), nome, tipo, preco, tamanho, cor)
            );
            break;

          case 2:
            categoria = readlinesync.question(
              "Digite a categoria do Vibrador: "
            );
            produtos.cadastrar(
              new Vibrador(produtos.gerarId(), nome, tipo, preco, categoria)
            );
            break;

          case 3:
            tamanho = readlinesync.questionInt(
              "Digite o tamanho da Lingerie: "
            );
            modelo = readlinesync.question("Digite o modelo da Lingerie: ");
            cor = readlinesync.question("Digite a cor da Lingerie: ");
            produtos.cadastrar(
              new Lingerie(
                produtos.gerarId(),
                nome,
                tipo,
                preco,
                tamanho,
                modelo,
                cor
              )
            );
            break;

          case 4:
            tamanho = readlinesync.questionInt(
              "Digite o tamanho do Lubrificante: "
            );
            sabor = readlinesync.question("Digite o sabor do Lubrificante: ");
            produtos.cadastrar(
              new Lubrificante(
                produtos.gerarId(),
                nome,
                tipo,
                preco,
                tamanho,
                sabor
              )
            );
            break;
        }
        keyPress();
        break;

      case 4:
        console.log("\n\nAtualizar o Produto\n\n"); //depois pensar em maneiras de alterar cor, tamanho, categoria, etc

        id = readlinesync.questionInt("Digite o Id do Produto: ");

        let produto = produtos.buscarNoArray(id); //estudar a diferença entre produto e produtos

        if (produto !== null) {
          produto.visualizar();

          preco = readlinesync.questionFloat("Digite o novo preco: ");

          tipo = produto.tipo;

          switch (tipo) {
            case 1:
              tamanho = readlinesync.questionInt(
                "Digite o novo tamanho do Consolo: "
              );
              cor = readlinesync.question("Digite a nova cor do Consolo: ");
              produtos.cadastrar(
                new Consolo(id, produto.nome, tipo, preco, tamanho, cor)
              );
              break;

            case 2:
              categoria = readlinesync.question(
                "Digite a categoria do Vibrador: "
              );
              produtos.cadastrar(
                new Vibrador(id, produto.nome, tipo, preco, categoria)
              );
              break;

            case 3:
              tamanho = readlinesync.questionInt(
                "Digite o tamanho da Lingerie: "
              );
              modelo = readlinesync.question("Digite o modelo da Lingerie: ");
              cor = readlinesync.question("Digite a cor da Lingerie: ");
              produtos.cadastrar(
                new Lingerie(
                  id,
                  produto.nome,
                  tipo,
                  preco,
                  tamanho,
                  modelo,
                  cor
                )
              );
              break;

            case 4:
              tamanho = readlinesync.questionInt(
                "Digite o tamanho do Lubrificante: "
              );
              sabor = readlinesync.question("Digite o sabor do Lubrificante: ");
              produtos.cadastrar(
                new Lubrificante(id, produto.nome, tipo, preco, tamanho, sabor)
              );
              break;
          }
        } else console.log("Produto não Encontrado!");

        keyPress();
        break;

      case 5:
        console.log("\n\nDeletar Produto\n\n");

        console.log("Digite o ID do produto: ");

        id = readlinesync.questionInt("");

        produtos.deletar(id);

        keyPress();
        break;
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

function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}

main();

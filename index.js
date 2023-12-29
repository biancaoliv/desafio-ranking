let resultadoDoPlacar = placar(100, 8);

function placar(vitorias, derrotas) {
  let soma = vitorias - derrotas;
  return soma;
}

let nivel = " ";

switch (true) {
  case resultadoDoPlacar <= 10:
    nivel = "Ferro";
    break;
  case resultadoDoPlacar <= 20:
    nivel = "Bronze";
    break;
  case resultadoDoPlacar <= 50:
    nivel = "Prata";
    break;
  case resultadoDoPlacar <= 80:
    nivel = "Ouro";
    break;
  case resultadoDoPlacar <= 90:
    nivel = "Diamante";
    break;
  case resultadoDoPlacar <= 100:
    nivel = "Lendário";
    break;
  case resultadoDoPlacar >= 101:
    nivel = "Imortal";
    break;
}
console.log("O Herói tem de saldo de " + resultadoDoPlacar + " vitórias" + " e está no nível " + nivel);

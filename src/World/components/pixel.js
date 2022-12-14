//============================================================================
// Nome         : Mário Pedro Carvalho
// Número aluno : 2000563
// Curso        : Licenciatura em Engenharia Informática
// Ficheiro     : grid.js
// Descrição    : E FOLIO A - Computação Gráfica - ficheiro com função que cria
//                o pixel de forma individual, que é responsavel por apresentar
//                o resultado final
// Codigo       : Este código ficará publicamente disponivel no repositório
//                GitHub https://github.com/MP-C/UaB.ComputacaoGraficaEfolioA
//                após o dia 23 de Novembro de 2022
console.log("Check oppening file: grid.js");
//============================================================================

import * as THREE from 'https://cdn.skypack.dev/three@0.132.2';

function createPixel(size, x, y, color) {
  /* Para que a grelha apareça com os diferentes quadrados */
  const geometry = new THREE.PlaneGeometry(size, size);

  /* Para criar a base do material de cor branca em modo default, 
  mas com as cores desejadas para a creação do tabuleiro  */
  const material = new THREE.MeshBasicMaterial({
    color: color,
    side: THREE.DoubleSide
  });

  /* Criar Mesh, que contem a Geometria e o Material para o 
  próprio pixel em si aparecer*/
  const pixel = new THREE.Mesh(geometry, material);

  /* Para atulizar a nova posição de cada pixel, quando este for criado para o tabuleiro,
   segundo o seu tamanho importado de "displayRaster.js" */
  pixel.position.x = size * x;
  pixel.position.y = size * y;

  return pixel;
}

export { createPixel };
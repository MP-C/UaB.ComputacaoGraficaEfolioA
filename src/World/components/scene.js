//============================================================================
// Nome         : Mário Pedro Carvalho
// Número aluno : 2000563
// Curso        : Licenciatura em Engenharia Informática
// Ficheiro     : scene.js
// Descrição    : E FOLIO A - Computação Gráfica - documento js que permite 
//                apresentar a zona em que se encontra o objeto
// Codigo       : Este código ficará publicamente disponivel no repositório
//                GitHub https://github.com/MP-C/UaB.ComputacaoGraficaEfolioA
//                após o dia 23 de Novembro de 2022
console.log("Check oppening file: scene.js");
//============================================================================

import * as THREE from 'https://cdn.skypack.dev/three@0.132.2';

/* Para criar a cena que, serve como zona de atualização de cada função quando existem
 novas formas / objetos a serem inseridos para que sejam vísiveis no World.js */

 function createScene() {
  const scene = new THREE.Scene();

  scene.background = new THREE.Color('#d3d3d3');

  return scene;
}

export { createScene };

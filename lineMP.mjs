//============================================================================
// Nome         : Mário Pedro Carvalho
// Número aluno : 2000563
// Curso        : Licenciatura em Engenharia Informática
// Ficheiro     : lineMP.mjs
// Descrição    : E FOLIO A - Computação Gráfica - para calcular os pontos 
//                da reta
// Codigo       : Este código ficará publicamente disponivel no repositório
//                GitHub https://github.com/MP-C/UaB.ComputacaoGraficaEfolioA
//                após o dia 23 de Novembro de 2022
console.log("Check oppening file: lineMP.mjs");
//============================================================================

/* Implementação do algoritmo do ponto médio de linhas */
function lineMP(dotA, dotB) {
    console.log("Coordenadas ponto inicial P : ", dotA);
    console.log("Coordenadas ponto final Q : ", dotB );
    
    /* Condição necessária para garantir calculoo em todos os quadrantes do gráfico 
    em que se inverte o sinal dos pontos duas vezes: 1) para a fórmula; 2) para colocar o ponto */
    let variaX = 0;
    let variaY = 0;
    variaX = dotB.x < dotA.x ? (dotA.x = -dotA.x, dotB.x = -dotB.x, variaX = -1 ) : 1;
    variaY = dotB.y < dotA.y ? (dotA.y = -dotA.y, dotB.y = -dotB.y, variaY = -1 ) : 1;
    
    /* Troca de sinais no caso dos pontos se encontarem em outros quadrantes,
    para que o calculo continue a ser possivel ao longo de quadrantes diferentes */

    /* Calculos para obter variáveis de controlo : Delta X, Delta Y, e a diferença entre Deltas X e Y */
    let dX = dotB.x - dotA.x;               /* Valor de delta para XX */
    let dY = dotB.y - dotA.y;               /* Valor de delta para YY */
    let variationDelta = dY - (dX/2);       /* Variação do declive de deltas XX e YY, que é parametro de decisão */
    
    /* <Array> que permite guradar os pontos da reta que serão, posteriomente, imprimidos */
    let outputAllPoints = [];   
    
    /* As variáveis x, y, servem de controlo para validar condições de calculo */
    let x = dotA.x;
    let y = dotA.y;
    
    /* Para validar os valores necessários para cada ponto da linha */
    console.log("ponto P = ",dotA, "; ponto Q = ",dotB, "; dX = ", dX, "; dY = ", dY, "; variationDelta = ", variationDelta, "; variaX = ", variaX, "; variaY = ", variaY);
    
    /* Para verificar que o X actual é diferente do X do último ponto selecionado */
    while (x <= dotB.x ) {    
        /* Para guardar os valores arredondas em números inteiros, em forma de objeto que serão mais tarde usados */
        outputAllPoints.push({ x : parseInt(x * variaX), y : parseInt(y * variaY) });

        /* Sendo que a função de uma reta depende de X, a incrementação de X permite avançar 
        na direção do ponto seguinte para "x = x+1" */
        x ++;
        
        /* Então, caso válido, continuam a ser calculados os pontos de progressão na reta*/
        if (variationDelta < 0){            /* Obtenção de pontos caso o ponto se encontre inferior à media do ponto */
            variationDelta = variationDelta + dY;
            //console.log("Novo ponto E establecido : (", x * variaX, ",",y * variaY, ")");
        } else {                            /* Obtenção de pontos caso o ponto se encontre superior à media do ponto */
            variationDelta += (dY - dX);
            y ++;
            //console.log("Novo ponto NE establecido: (", x * variaX, ",", y * variaY, ")");
        }
    }
    console.log("STOP: último ponto obtido (x, y) = (",x * variaX,",",y * variaY,") é superior ao ponto Q selecionado : (", dotB.x,",",  dotB.y, ");");
    console.table(outputAllPoints);
    return outputAllPoints;
}

export {lineMP}
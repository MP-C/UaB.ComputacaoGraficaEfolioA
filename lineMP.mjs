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


/*
// Função que gera o array com as coordenadas dos pontos da linha raster pelo algoritmo do ponto médio
function lineMP( a, b) {                                                         //Condições de chamada

    let vertices = [];  // Definição do array que vai receber os pontos

    if (a == b) {      // Para o caso em que o ponto a é igual ao ponto b, não necessita efetuar calculos.
        return vertices.push(a);
    }

    if (Math.abs(b.y - a.y) < Math.abs(b.x - a.x)) {    // (1) caso |dy| < |dx| sendo que m= dy/dx então |m| < 1 teste e Incremento/Decremento do y (octantes 1,4,5,8)
        if (a.x > b.x) {                // se a.x(x0) > b.x(x1) 
            vertices = zone1(b, a);     // chama a zona1 e inverte os pontos na chamada de forma a começar do ponto mais a oeste
        } else {
            vertices = zone1(a, b);     // senão chama a zona1
        }
    } else {                                            // (2) senão |m| > 1 teste e Incremento/Decremento do x ()
        if (a.y > b.y) {                // se a.y(y0) > b.y(y1)
            vertices = zone2(b, a);     // chama a zona2 e inverte os pontos na chamada de forma a começar do ponto mais a sul
        } else {
            vertices = zone2(a, b);     // senão chama a zona2
        }
    }
    return vertices;
}

// Função que computa a zona 1 do algoritmo 
function zone1(a, b) {

    let vertices = [];    // Array que irá receber os vertices escolhidos
    let dx = b.x - a.x;      // Calculo de dx
    let dy = b.y - a.y;      // Calculo de dy
    let dirY = 1;        // variavel que vai definir se o y incrementa ou decrementa (direção do y)

    if (dy < 0) {         // m < 0 (1) (2) Caso o dy seja negativo (y decrementa) m < 0 e |m| > 1 e aplica a simetria no eixo do x
        dirY = -1;         // a direção do crescimento passa a negativo (y decrementa)
        dy = -dy           // e o sinal de dy é também negativo
    }
    // senão m > 0 (1) (1) 
    let d = 2 * dy - dx; // Fator de decisão inicial
    let yn = a.y;          // inicialização do yn inicial

    for (let xn = a.x; xn <= b.x; xn++) {  // Em cada passo xn aumenta um do a.x(x0) até b.x(x1), neste caso o x cresce mais rapido
        //console.log({x:xn,y:yn});         // DEBUG only
        vertices.push({ x: xn, y: yn });     // Insere o ponto (vertice) no array
        if (d > 0) {             // caso o d seja positivo
            yn += dirY;        // incrementa/decrementa y na direção detetada anteriormente (conforme o sinal de dirY)
            d += (2 * (dy - dx));   // escolhe NE (ou NW conforme a simetria)
        } else {                // senão d=0 ou d<0
            d += 2 * dy;          // escolhe E (ou W!! conforme a simetria)(conforme o sinal de dirX) e y não incrementa
        }
    }
    return vertices;    // retorna o 
}

// Função que computa a zona2 do algoritmo
function zone2(a, b) {
    let vertices = [];     // Array que irá receber os vertices escolhidos
    let dx = b.x - a.x;        // Calculo de dx
    let dy = b.y - a.y;        // Calculo de dy
    let dirX = 1;          // variavel que vai definir se o x incrementa ou decrementa (direção do x) 

    if (dx < 0) {           // m < 0 (2) (2) Caso o dx seja negativo (x decrementa) m<0 e |m|>1 e aplica simetria no eixo do y 
        dirX = -1;         // a direção do crescimento passa a negativo
        dx = -dx           // e o sinal da variação também muda pois na chamada vamos trocar os pontos
    }                      // senão m > 0 (1) (1) 
    let d = 2 * dx - dy    // Calculo do fator de decisão inicial
    let xn = a.x;

    for (let yn = a.y; yn <= b.y; yn++) {     // Em cada passo yn aumenta um do a.y(y0) até b.y(y1), neste caso o y cresce mais rapido 
        vertices.push({ x: xn, y: yn });     // Insere o ponto (vertice) no array
        if (d > 0) {              // caso o d seja positivo
            xn += dirX;       // incrementa/decrementa x na direção detetada anteriormente (conforme o sinal de dirX)
            d += 2 * (dx - dy);     // escolhe SE (ou SW conforme a simetria)
        } else {                // senão 
            d += 2 * dx;          // escolhe N (ou S!! conforme a simetria)(conforme o sinal de dirX) e x não incrementa
        }
    }
    return vertices;          // retorna o array vertices
}
export {lineMP};       // exporta lineMP como default
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







/* Implementação do algoritmo do ponto médio de linhas */
function lineMP(dotA, dotB) {  
    console.log("Coordenadas ponto inicial P : ", dotA);
    console.log("Coordenadas ponto final Q : ", dotB );
    
    let outputAllPoints = [];/* Para guardar os pontos da reta que serão, posteriomente, imprimidos */
    let pointP = dotA;  /* Para guardar o ponto de início */
    let pointQ = dotB; /* Para guardar o último ponto */

    /* Condição necessária para garantir o cálculo em todos pontos estão nos quadrantes do gráfico 
    em que se inverte o sinal dos pontos duas vezes: 1) para a fórmula; 2) para colocar o ponto */
    let dX = dotB.x - dotA.x;   /* Valor de delta para XX */
    let dY = dotB.y - dotA.y;   /* Valor de delta para YY */
    /* Para validar os valores necessários para cada ponto da linha */
    console.log("ponto P = ",dotA, "; ponto Q = ",dotB, "; dX = ", dX, "; dY = ", dY);
    
    /* As variáveis pointP, pointQ, servem de controlo para validar condições de calculo */
    if ( Math.abs(dX) > Math.abs(dY)) {    /* Se a condição para o modulo de deltas for válida, então, a reta m=dY/dX tem valor inferior a 1 => valida pontos nos quadrantes (x,y), (-x,y), (-x,-y), (x,-y) */
        if (dotA.x > dotB.x) {
            pointP = dotB;
            pointQ = dotA;
        }
        /* Calculos para obter variáveis de controlo : Delta X, Delta Y, 
        e a diferença entre Deltas X e Y */
        outputAllPoints = controlQuadrant(pointP, pointQ, true);

    } else {                    /* Se a condição para o modulo de deltas for válida, então, a reta m=dY/dX tem valor superior a 1 => valida quadrantes restantes (y,x), (y,-x), (-y,-x), (-y,x,) */          
        if (dotA.y > dotB.y) {            
            pointP = dotB;
            pointQ = dotA;
        }
        /* Calculos para obter variáveis de controlo : Delta X, Delta Y, 
        e a diferença entre Deltas X e Y */
        outputAllPoints = controlQuadrant(pointP, pointQ);
        
    }
    console.log("STOP: último ponto obtido (x, y) = (",x * variaX,",",y * variaY,") é superior ao ponto Q selecionado : (", dotB.x,",",  dotB.y, ");");
    console.table(outputAllPoints);
    return outputAllPoints;
}


/* Para assegurar que os pontos estão nos quadrantes certos, caso contrário, colocar os sinais certos */
function controlQuadrant(dotA, dotB, validPoint = false) { 
/* Quando a validação de ponto é falsa, define-se se y incrementa ou decrementa (direção do y)
Quando é verdadeira, estáse a definir se é o valor de x que incrementa ou decrementa (direção do x) */

let points = [] /* Para guardar os pontos validados */
    let d;
    let start;
    let end;
    let startVariable;

    /* Troca de sinais no caso dos pontos se encontarem em outros quadrantes,
    para que o calculo continue a ser possivel ao longo de quadrantes diferentes */
    let deltaX = dotB.x - dotA.x;  /* Para se controlar o delta de x */
    let deltaY = dotB.y - dotA.y; /* Para se controlar o delta de y */
    let m = 1;   /* Variação do declive de deltas XX e YY, que é parametro de decisão */

    if ( validPoint ) {
        if ( deltaY < 0 ) { /* Para aplicar simetria no eixo do y quando dY seja negativo */
            m = -1;         
            deltaY = -deltaY;
        }

        d = 2 * deltaY - deltaX; /* Serve como fator de decisão inicial */
        start = dotA.x; /* Trocar sinais para incrementar y */
        end = dotB.x;
        startVariable = dotA.y;
        console.log("Ponto a registar : ", startVariable); /* Para inicializar o ponto seguinte na nova posição y */
        
    } else {
        if (deltaX < 0) {   /* Para aplicar simetria no eixo do x quando dX seja negativo */
        m = -1;       
        deltaX = -deltaX         
    }
    
    d = 2 * deltaX - deltaY ; /* Serve como fator de decisão inicial */
    start = dotA.y;     /* Trocar sinais para incrementar x */
    end = dotB.y;       
    startVariable = dotA.x;  
    console.log("Ponto a registar : ", startVariable); /* Para inicializar o ponto seguinte na nova posição y */
    }

    /* Segundo a formula matemática do ponto médio */ 
    for (let axis = start; axis <= end; axis  ) {  /* É necessário controlar a forma como xx, ou yy se desenvolve, segundo   */
        if ( validPoint ) {
            points.push({ x: axis, y: startVariable }); /* Para guardar pontos para a reta */

        } else {
            points.push({ x: startVariable, y: axis }); 
        }
    
        if (d > 0) {            
            startVariable  = m;       
            if (validPoint) {
                d  = (2 * (deltaY - deltaX)); 
            } else {
                d  = 2 * (deltaX - deltaY); 
            }
            
        } else {              
            d  = 2 * (validPoint ? deltaY : deltaX);      
        }
    }
    return points;
}

export {lineMP}








// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// /* Implementação do algoritmo do ponto médio de linhas */
// function lineMP(dotA, dotB) {
//     console.log("Coordenadas ponto inicial P : ", dotA);
//     console.log("Coordenadas ponto final Q : ", dotB );
    
//     /* Condição necessária para garantir o calculo em todos os quadrantes do gráfico 
//     em que se inverte o sinal dos pontos duas vezes: 1) para a fórmula; 2) para colocar o ponto */
//     let variaX = 0;
//     let variaY = 0;
//     variaX = dotB.x < dotA.x ? (dotA.x = -dotA.x, dotB.x = -dotB.x, variaX = -1 ) : 1;
//     variaY = dotB.y < dotA.y ? (dotA.y = -dotA.y, dotB.y = -dotB.y, variaY = -1 ) : 1;
    
//     /* Troca de sinais no caso dos pontos se encontarem em outros quadrantes,
//     para que o calculo continue a ser possivel ao longo de quadrantes diferentes */

//     /* Calculos para obter variáveis de controlo : Delta X, Delta Y, e a diferença entre Deltas X e Y */
//     let dX = Math.abs(dotB.x - dotA.x);               /* Valor de delta para XX */
//     let dY = Math.abs(dotB.y - dotA.y);               /* Valor de delta para YY */
//     let variationDelta = dY - (dX/2);       /* Variação do declive de deltas XX e YY, que é parametro de decisão */
    
//     /* <Array> que permite guradar os pontos da reta que serão, posteriomente, imprimidos */
//     let outputAllPoints = [];   
    
//     /* As variáveis x, y, servem de controlo para validar condições de calculo */
//     let x = dotA.x;
//     let y = dotA.y;
    
//     /* Para validar os valores necessários para cada ponto da linha */
//     console.log("ponto P = ",dotA, "; ponto Q = ",dotB, "; dX = ", dX, "; dY = ", dY, "; variationDelta = ", variationDelta, "; variaX = ", variaX, "; variaY = ", variaY);
    
//     /* Para verificar que o X actual é diferente do X do último ponto selecionado */
//     while (x <= dotB.x ) {    
//         /* Para guardar os valores arredondas em números inteiros, em forma de objeto que serão mais tarde usados */
//         outputAllPoints.push({ x : parseInt(x * variaX), y : parseInt(y * variaY) });

//         /* Sendo que a função de uma reta depende de X, a incrementação de X permite avançar 
//         na direção do ponto seguinte para "x = x+1" */
//         x ++;
        
//         /* Então, caso válido, continuam a ser calculados os pontos de progressão na reta*/
//         if (variationDelta < 0){            /* Obtenção de pontos caso o ponto se encontre inferior à media do ponto */
//             variationDelta = variationDelta + dY;
//             //console.log("Novo ponto E establecido : (", x * variaX, ",",y * variaY, ")");
//         } else {                            /* Obtenção de pontos caso o ponto se encontre superior à media do ponto */
//             variationDelta += (dY - dX);
//             y ++;
//             //console.log("Novo ponto NE establecido: (", x * variaX, ",", y * variaY, ")");
//         }
//     }
//     console.log("STOP: último ponto obtido (x, y) = (",x * variaX,",",y * variaY,") é superior ao ponto Q selecionado : (", dotB.x,",",  dotB.y, ");");
//     console.table(outputAllPoints);
//     return outputAllPoints;
// }

// export {lineMP}



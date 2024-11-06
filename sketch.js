// fantasia, aventura 

//a viagem de  chichiro,Livre, fantasia, aventura,
//as aventuras de pi, 10, drama, fantasia, aventura,
//guardiões da galaxia,12, fantasia, aventura,
//ladrões de bicicleta, 12 , drama
//o menino que descobriu o vento 14, drama

function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    let idade = 15;
    let recomendacao = gerarRecomendacao (idade);
    text(recomendacao, width/2, height/2);
  }
  function gerarRecomendacao (idade){
    if (idade >= 10) {
    return "as aventuras de pi";
   } else { 
    return "a viagem de chichiro ";
   }
  }
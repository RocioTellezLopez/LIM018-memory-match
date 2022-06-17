



 const imagenBronce = document.createElement ("img")
 imagenBronce.src= "/src/img/medalla-de-bronce.png"
 
 
 //resultado.appendChild(medallas)
 
 const createMedals = (countTurn) => {
     const resultado = document.getElementById("resultado")
     const medallas = document.createElement ("div")
     resultado.appendChild(medallas)
     if(countTurn <= 20){
         const imagenOro = document.createElement ("img")
         imagenOro.src= "/src/img/medalla-de-oro.png"
         medallas.appendChild(imagenOro)
        } else if (countTurn > 20 && countTurn <= 30 ) {
            const imagenPlata = document.createElement ("img")
            imagenPlata.src= "/src/img/medalla-de-plata.png"
            medallas.appendChild(imagenPlata)
        }
        //medallas.appendChild(imagenBronce)
 } 

export default createMedals;
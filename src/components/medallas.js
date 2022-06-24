
 const createMedals = (points) => {
     const medallas = document.createElement ("div")
     medallas.className ="medallas"

     if(points <= 20){
         const imagenOro = document.createElement ("img")
         imagenOro.src= "./img/medalla-de-oro.png"
         medallas.appendChild(imagenOro)
    
        } else if (points > 20 && points <= 30 ) {
            const imagenPlata = document.createElement ("img")
            imagenPlata.src= "./img/medalla-de-plata.png"
            medallas.appendChild(imagenPlata)
          
        } else {
            const imagenBronce = document.createElement ("img")
            imagenBronce.src= "./img/medalla-de-bronce.png"
            medallas.appendChild(imagenBronce)
        }
    return medallas    
 } 

export default createMedals;
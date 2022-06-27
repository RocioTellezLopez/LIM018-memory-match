
 const createMedals = (points) => {
     const medals = document.createElement ("div")
     medals.className ="medals"

     if(points <= 20){
         const imageGold = document.createElement ("img")
         imageGold.src= "./img/medalla-de-oro.png"
         medals.appendChild(imageGold)
    
        } else if (points > 20 && points <= 30 ) {
            const imageSilver = document.createElement ("img")
            imageSilver.src= "./img/medalla-de-plata.png"
            medals.appendChild(imageSilver)
          
        } else {
            const imageBronze = document.createElement ("img")
            imageBronze.src= "./img/medalla-de-bronce.png"
            medals.appendChild(imageBronze)
        }
    return medals    
 } 

export default createMedals;
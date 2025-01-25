let countDisplay = document.getElementById("countDisplay") ;        

function increaseCount() {
    let currentCount = parseInt (countDisplay.textContent)
    let updatedFollowers = 1 + currentCount ;
    countDisplay.textContent = updatedFollowers ;
    
    if (updatedFollowers===5 ) {

       alert (" Congragulations for new milestone, you have crossed 5 million followers")
    } else if (updatedFollowers ===10){
       alert  ("Congragulations for new milestone, you have crossed 10 million followers")
    } else if (updatedFollowers >10 && updatedFollowers % 5 ===0){
        alert (`Congragualtaions you have crossed a new milestone of ${updatedFollowers}`)
    }
}


function resetCount() {
    countDisplay.textContent= 0 ;
    alert ("The followers count has been reset to Zero")
}
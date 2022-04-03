var ranking = document.querySelector('#ranking');
var clear = document.querySelector('#clear');
// adds initials to ranking list
function updateRanking (){
    var loadScore = JSON.parse(localStorage.getItem('highscore'));
 

    if (loadScore){

        for(let i = 0; i < loadScore.length; i++){
            var concated = loadScore[i].initials + " " + loadScore[i].highscore;
            var litag = document.createElement('li');
            litag.textContent = concated;
            ranking.append(litag);
        }
    }

   

   
}
// clears scores from lcoal storage and the page
function clearScores () {
    localStorage.removeItem("highscore");
    localStorage.removeItem('initials');
    var liT = document.querySelectorAll('li');
    for (i=0; i < liT.length; i++) {
        liT[i].innerHTML = "";
    }
    location.reload();
}

clear.addEventListener('click',clearScores)
updateRanking();
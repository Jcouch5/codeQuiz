var ranking = document.querySelector('#ranking');
var clear = document.querySelector('#clear');
// adds initials to ranking list
function updateRanking (){
    var loadScore = localStorage.getItem('highscore');
    var loadInitials = localStorage.getItem('initials');
    var concated = loadInitials + " " + loadScore;
    var litag = document.createElement('li');
    litag.textContent = concated;
    ranking.append(litag);
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
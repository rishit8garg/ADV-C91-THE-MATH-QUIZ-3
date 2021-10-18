function back() {
    window.location = "activity_1.html";

}
function getScore()
{
    score = locationStorsge.getItem("score");
    document.getElementById("update").ineerHTML = "<h1>Score:" + score +"</h1>";
}

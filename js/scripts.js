function changeText(){
    var textsArr = ["Text 1","Text 2", "Text 3", "Text 4", "Text 5"]
    var number = getRandomNumberBetween(0,textsArr.length-1)
    console.log(number)
    document.getElementById("heading").innerHTML=textsArr[number];
}

function getRandomNumberBetween(a, b){
    return Math.floor(Math.random()*(a-b+1)+b)
}
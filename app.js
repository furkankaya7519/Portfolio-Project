


const pra = document.getElementById("cdp");



setInterval(function(){
    let d = new Date();
    let dateString = d.toString();
    let dateArray = dateString.split(" ");
    let showingDateText = dateArray[0] + " " + dateArray[1] + " " +  dateArray[2] +" "+ dateArray[3] + " "+ dateArray[4];
    pra.innerHTML = showingDateText;
},1000)

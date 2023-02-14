
const pra = document.getElementById("cdp");
const nameTF = document.getElementById("formGroupExampleInput");
const surNameTF = document.getElementById("formGroupExampleInput2");
const emailTF = document.getElementById("exampleFormControlInput1");
const ageTF = document.getElementById("exampleFormControlSelect1");
const fRadio = document.getElementById("femaleRadio");
const mRadio = document.getElementById("maleRadio");
const message = document.getElementById("exampleFormControlTextarea1");
const button = document.getElementById("button");

button.addEventListener("click",function(){
    
    if(!checkFilled()){
        alert("You must fill in all fields.");
        return;
    }

    let maleOrFemale;

    if(mRadio.checked){
        maleOrFemale = "Male";
    }
    else{
        maleOrFemale = "Female";
    }

    let inputs = [nameTF.value,surNameTF.value,emailTF.value,ageTF.value,maleOrFemale,message.value];
    let ran = Math.floor(Math.random() * 5000000) + 1000;
    localStorage.setItem("Contact : " + ran ,inputs);

})


function checkFilled(){
    if(nameTF.value.length == 0){
        return false;
    }
    else if(surNameTF.value.length == 0){
        return false;
    }
    else if(emailTF.value.length == 0){
        return false;
    }
    else if(ageTF.value.length == 0){
        return false;
    }
    else if(message.value.length == 0){
        return false;
    }

    return true;
}





setInterval(function(){
    let d = new Date();
    let dateString = d.toString();
    let dateArray = dateString.split(" ");
    let showingDateText = dateArray[0] + " " + dateArray[1] + " " +  dateArray[2] +" "+ dateArray[3] + " "+ dateArray[4];
    pra.innerHTML = showingDateText;
},1000)

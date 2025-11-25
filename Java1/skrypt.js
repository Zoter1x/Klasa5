function funkcja(){
    let imie=document.getElementById("imie").value;
    let nazwisko=document.getElementById("nazwisko").value;
    let email=document.getElementById("email1").value;
    let zgloszenie=document.getElementById("zgl").value;
    let par=document.getElementById("par");
    if(document.getElementById("reg").checked){
        par.style.color="Navy";
        par.innerHTML=imie.toUpperCase()+" "+nazwisko.toUpperCase()+" Treść Twojej sprawy: <br>"+zgloszenie;
    }
    else{
        par.style.color="red";
        par.innerHTML="Musisz zapoznać się z regulaminem.";
    }
}
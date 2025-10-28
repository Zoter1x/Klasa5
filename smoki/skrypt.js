function Zmiana(Show){
    const bl1=document.getElementById("bl1");
    const bl2=document.getElementById("bl2");
    const bl3=document.getElementById("bl3");
    const baza=document.getElementById("baza");
    const opis=document.getElementById("opis");
    const gal=document.getElementById("gal");
if(Show=="baza"){
    bl1.setAttribute("class","wyb");
    bl2.setAttribute("class","niewyb");
    bl3.setAttribute("class","niewyb");
    baza.setAttribute("class","swyb");
    opis.setAttribute("class","sniewyb");
    gal.setAttribute("class","sniewyb");
}
if(Show=="opisy"){
    bl1.setAttribute("class","niewyb");
    bl2.setAttribute("class","wyb");
    bl3.setAttribute("class","niewyb");
    baza.setAttribute("class","sniewyb");
    opis.setAttribute("class","swyb");
    gal.setAttribute("class","sniewyb");}

if(Show=="galeria"){
    bl1.setAttribute("class","niewyb");
    bl2.setAttribute("class","niewyb");
    bl3.setAttribute("class","wyb");
    baza.setAttribute("class","sniewyb");
    opis.setAttribute("class","sniewyb");
    gal.setAttribute("class","swyb");}
}
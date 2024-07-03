function inchToFeet(){
    const incheInput= document.getElementById("incheInput");
    const feetOutput=document.getElementById("feetOutput");
    const incheString= incheInput.value;
    const inche= parseInt(incheString);

    const feet=inche/12;
    feetOutput.innerText=feet;
    console.log(feet)
}






function mileToKm(){
    const mileInput= document.getElementById("mileInput");
    const mileOutput=document.getElementById("mileOutput");
    const mileString= mileInput.value;
    const mile= parseInt(mileString);

    const km=mile*1.609344;
    mileOutput.innerText=km;
    console.log(km);
}



function celsioucToFahrenheit(){
    const cenciousInput= document.getElementById("cenciousInput");
    const fahrenheitOutput= document.getElementById("fahrenheitOutput");
    const cenciousString=cenciousInput.value;
    const cencious=parseInt(cenciousString);

    const fahrenheit= (cencious* 9/5) + 32;
    fahrenheitOutput.innerText=fahrenheit;
    console.log(fahrenheit);

}
const button = document.getElementById("btn");
const result = document.getElementById("result");


const colorPicker = async ()=>{
    const eyeDropper = new window.EyeDropper();
    const color = await eyeDropper.open();
    console.log(color);
    console.log(eyeDropper);
    result.innerHTML = document.body.style.backgroundColor = color.sRGBHex;
    
};

button.addEventListener("click",colorPicker);
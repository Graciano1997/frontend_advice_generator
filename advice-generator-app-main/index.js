const quoteGenerator= async ()=>{
    const response= await fetch('https://api.adviceslip.com/advice');
    const responseObject= await response.json();
    
    document.querySelector('#quote').textContent=responseObject.slip.advice;
    document.querySelector('#quoteNumber').textContent=responseObject.slip.id;
}

const diceButton=document.querySelector('.diceContainer').addEventListener("click",()=>{
    quoteGenerator();
})
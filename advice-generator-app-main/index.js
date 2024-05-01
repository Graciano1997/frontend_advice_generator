const quoteGenerator= async ()=>{
    const response= await fetch('./advices.json'+["advice"]);
    console.log(response);
}

quoteGenerator();
function ayush(){
    console.log("I am Ayush");
}
ayush(); // This will call the ayush function immediately
setTimeout(ayush, 2000); // This will call the ayush function after 2 seconds


setTimeout(()=>{
    console.log("This is a callback function");
    setTimeout(()=>{
        console.log("This is a nested callback function");
    }, 2000);
    setTimeout(()=>{
        console.log("This is another nested callback function");
    }, 3000);
    setTimeout(()=>{
        console.log("This is yet another nested callback function");
    }, 4000);
}, 1000); // This will call the callback function after 1 second



const nayapromise = new Promise((resolve, reject) => {
    let deliver  = true;
    if(deliver){
        resolve("Promise is resolved");
    }    else{
        reject("Promise is rejected");
    }
});

nayapromise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});
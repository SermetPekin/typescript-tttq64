// Import stylesheets
import './style.css';

let bir = { id: "bir" , name : "asdasd"}
let iki ={ id: "iki" , sname :"copy" }
let uc  ={ id: "uc" , sname :"uc copy" }

const aa  = Object.assign( bir   , {} ,  iki  , uc )


// Write TypeScript code!


const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript ${JSON.stringify( aa ) }Starter</h1>`;


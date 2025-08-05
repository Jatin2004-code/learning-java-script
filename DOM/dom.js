// <body> ko access karna
console.log(document.body);

// <body> ke bachhe dekhna
console.log("childNodes of body:", document.body.childNodes); // Text nodes bhi dikhayega
console.log("children of body:", document.body.children);   // Sirf element nodes dikhayega

// Ek specific element ko pakadna
let list = document.querySelector("ul");

// Uske parent tak jaana
console.log("Parent of ul:", list.parentElement); // <div class="container">

// Uske agle bhai tak jaana
let heading = document.querySelector("h1");
console.log("Next sibling of h1:", heading.nextElementSibling); // <p>
let now = new Date();

let year = now.getFullYear();
let month = now.getMonth() + 1;
let date = now.getDate();

document.querySelector(".date").innerHTML = `${date}/${month}/${year}`;

const fullname = "Juan Carlos Lopera";
const age = 29;
const isDeveloper = true;
const birthDay = new Date(1993, 3, 30);
let favorite_book = {
    title: "El poder del ahora",
    autor: "Eckhart Tolle",
    date: new Date(1998, 0, 15).toDateString(),
    url: "www.elpoderdelahora.com"
};

let lista = [fullname, age, isDeveloper, birthDay, favorite_book];

console.log(lista);
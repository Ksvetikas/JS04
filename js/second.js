// 1.

const nr1N = 2;
const nr1M = 3;

if (nr1N > nr1M) {
    console.log("Ilgiau aptarnaujamas pirmasis pirkėjas");
}else {
    console.log("Ilgiau aptarnaujamas antrasis pirkėjas");
}


// 2.

const nr2N = 3;
const nr2M = 2;
let vardas;

if (nr2N > nr2M) {
    vardas = "Jonas";
}else {
    vardas= "Povilas";
}

console.log("Turnyrą laimėjo " + vardas + ".");


// 3.

const nr3M = 300;
const nr3K = 200;
let vardasNr3;

if (nr3M > nr3K) {
    vardasNr3 = "Martynas";
}else {
    vardasNr3 = "Karolis";
}

console.log("Daugiau saldainių pirko " + vardasNr3 + ".");


// 4.

const nr4M = 1904;
const metaiNuoPradzios = nr4M - 1896;
let secondNr4N;

if (nr4M < 1896) {
    console.log("Metai neolimpiniai.")
}else if (metaiNuoPradzios % 4 === 0) {
    secondNr4N = metaiNuoPradzios / 4;
    console.log("Metai " + nr4M + " yra " + secondNr4N + " olimpiniai metai.");
}else {
    console.log("Metai neolimpiniai.")
}


// 5.

const liko = 12;

if (liko < 1) {
    console.log("Įveskite likusį pamokos laiką.")
}else if (liko > 30) {
    console.log("Liko dar labai daug laiko.");
}else if (liko < 30 && liko > 15) {
    console.log("Liko dar nemažai laiko.");
}else if (liko < 15 && liko > 7) {
    console.log("Liko nedaug laiko.");
}else {
    console.log("Pamoka baigiasi.");
}


// 6.

const metai = 1605;
// const simtai = metai % 100

if (metai % 400 === 0 ){
    console.log("Metai keliamieji.");
}else if (metai % 100 === 0){
    console.log("Metai nekeliamieji.");
}else if (metai % 4 === 0){
    console.log("Metai keliamieji.");
}else {
    console.log("Metai nekeliamieji.");
}


// 7.

let sesiazenklis = 111100;
let sesiazenklioSuma = 0;

for (let i = 0; i < 6; i++){
    sesiazenklioSuma += sesiazenklis % 10;
    sesiazenklis = (sesiazenklis - (sesiazenklis % 10)) / 10;
}

console.log(sesiazenklioSuma);

if (sesiazenklioSuma % 4 === 0) {
    console.log("Bilietas laimingas.");
}else {
    console.log("Bilietas nelaimingas.");
}


// 8.

const p = 200;
const nKnygu = 10;
const savaites = 11;
const dienuP = [];
let sumP = 0;


dienuP [0] = 40;
dienuP [1] = 40;
dienuP [2] = 50;
dienuP [3] = 40;
dienuP [4] = 30;
dienuP [5] = 0;
dienuP [6] = 0;

for(let i = 0; i < 7; i++){
    sumP += dienuP[i];
}

sumP *= savaites;

if ((nKnygu * p) - sumP > 0){
    console.log("Jonas knygų perskaityti nespės.");
}else {
    console.log("Jonas knygas perskaityti spės.");
}


9.

let count = 0;
const nr9N1 = [];
nr9N1[0] = 1;
nr9N1[1] = 1;
nr9N1[2] = 1;

for (let i = 0; i < 3; i++) {
    if (nr9N1[i] > 0){
        count++;
    }
}

if (count === 3) {
    console.log("Mokinys desimtuka gaus.");
}else {
    console.log("Mokinys desimtuko negaus.");
}


// 10.

const k = 300;
let grupe;

switch(k > 0) {
    case (k > 4000):
        grupe = "pirmos";
        break;
    case ((k < 4000) && (k > 2999)):
        grupe = "antros";
        break;
    case ((k < 3000) && (k > 999)):
        grupe = "trecios";
        break;
    default:
        grupe = "ketvirtos";
}
console.log("Jolantai geriausiai tiktų " + grupe + " grupės kelionė.");
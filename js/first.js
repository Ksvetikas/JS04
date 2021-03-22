// 1.
let n = 2;
const m1 = 9;
const m2 = 12;
const b = 3;

function bendrasBagazoSvoris(m1, m2){
    return m1 + m2;
}

function mokesciuSuma(kb, b){
    return kb * b;
}

const kb = bendrasBagazoSvoris(m1, m2);
const s =  mokesciuSuma(kb, b);

console.log("Draugai iš viso veža " + kb + "kg bagažo. Bendra suma, kurią reikės mokėti už bagažą = " + s + "eur.");


// 1a.

function vidutiniskaiBagazo(n){
    return bendrasBagazoSvoris(m1, m2) / n;
}

const v = vidutiniskaiBagazo(n);

console.log("Draugai turi vidutiniskai " + v + "kg bagažo.");


// 1b.

const bagazuSvoriai = [];
bagazuSvoriai[0] = m1;
bagazuSvoriai[1] = m2;

function keliBagazaiMaziauNei10(bagazuSvoriai){

    let k = 0;

    for (let i = 0; i < bagazuSvoriai.length; i++ ){
        if (bagazuSvoriai[i] < 10){
            k++;
        }
    }

    return k;
}

console.log(keliBagazaiMaziauNei10(bagazuSvoriai));


// 1c.

function bagazaiMaziauNei10Info(bagazuSvoriai){

    let k = 0;
    let maziau10BagazoSuma = 0;
    let vid;


    for (let i = 0; i < bagazuSvoriai.length; i++ ){
        if (bagazuSvoriai[i] < 10){
            maziau10BagazoSuma += bagazuSvoriai[i];
            k++;
        }
    }

    vid = maziau10BagazoSuma / k;
    let kaina = maziau10BagazoSuma * b;

    return {
        kaina,
        vid,
        k
    };
}

let reiksmes = bagazaiMaziauNei10Info(bagazuSvoriai);

console.log("Maziau nei 10kg bagazo turejo " + reiksmes.k + " draugai/-as. Bagazo svorio vidurkis - " + reiksmes.vid + "kg. Ju bendra bagazo kaina = " + reiksmes.kaina + "eur.");


// 2.


const u1 = 7;
const u2 = 6;
const u3 = 3;
const u4 = 5;
const u5 = 10;

const mokiniuUzdaviniai = [];
mokiniuUzdaviniai[0] = u1;
mokiniuUzdaviniai[1] = u2;
mokiniuUzdaviniai[2] = u3;
mokiniuUzdaviniai[3] = u4;
mokiniuUzdaviniai[4] = u5;

function suma(mokiniuUzdaviniai){

    n = 5;
    let u = 0;

    for (let i = 0; i < n; i++) {
        u +=  mokiniuUzdaviniai[i];
    }
    return {
        u,
        n
    };
}

const rez = suma(mokiniuUzdaviniai);

console.log("Olimpiadoje dalyvavo " + rez.n + " programuotojai/-u jie is viso isprende " + rez.u + " uzduociu.");


// 3.

const n3 = 4;

let vizitai = []
const nr3m1 = vizitai[0]= 20;
const nr3m2 = vizitai[1]= 25;
const nr3m3 = vizitai[2]= 17;
const nr3m4 = vizitai[3]= 13;


function vidutiniskai(vizitai, n3){

    let sum = 0;
    let k = 0;

    for(let i = 0; i < n3; i++){
        sum += vizitai[i];
        if(vizitai[i] > 20){
            k++;
        }
    }

    let vid = sum / n3;

    return {
        vid,
        k
    };
}

let rezultatas = vidutiniskai(vizitai, n3);
console.log()

console.log("Pacientu konsultacijos vidutiniskai uztrunka " + rezultatas.vid + " minuciu. Is ju " + rezultatas.k + " pacientu uztrunka daugiau nei 20 min.");


// 4.

const nr4N = 3;

const v1 = 0;
const k1 = 70;
const nr4m1 = 43;

const v2 = 2;
const k2 = 200;
const nr4m2 = 12;

const v3 = 1;
const k3 = 100;
const nr4m3 = 20;

let autobusuInfo = [];

autobusuInfo[0] = [v1, k1, nr4m1];
autobusuInfo[1] = [v2, k2, nr4m2];
autobusuInfo[2] = [v3, k3, nr4m3];

function kiekKeleiviu(autobusuInfo, n){
    let kv = 0;
    let laikuSuma = 0;
    let k = 0;

    for (let i = 0; i < n; i++){

        kv += autobusuInfo[i][1];
        laikuSuma += (autobusuInfo[i][0] * 60) + autobusuInfo[i][2];

        if (autobusuInfo[i][1] < 10){
            k++;
        }
    }

    let t = Math.round(laikuSuma / n);

    return{
      t,
      k,
      kv
    };
}

const nr4Rez = kiekKeleiviu(autobusuInfo, nr4N);

console.log("kv = " + nr4Rez.kv + ", t = " + nr4Rez.t + ", k = " + nr4Rez.k + ".");


// 5.

const nr5N = 3;
const nr5B = 4;
const d = 5;

function kiekBraskiu(n, b, d){

    let k = b;

    for (let i = 1; i < n; i++){
        k += (k + d);
        console.log(k);
    }
    return k;
}

console.log("Per " + nr5N + " dienas prinoko " + kiekBraskiu(nr5N, nr5B, d) + " braškės.");


// 6.

const start = 5;
const end = 24;

function porcijos(start, end){

    let count = 0;

    for (; start <= end; start++){

        if ((start % 6) === 0){
            count++;
        }
    }

    return count;
}

console.log("Reikalingas porciju skaicius yra " + porcijos(start, end) + ".");


// 7.


const m = 17;

function dienos(m){
    let visi = m;
    let count = 0;
    let skyriai = 1;
    let vid;

    while (m > 0){
        m -= skyriai;
        skyriai += 1;
        count++;
    }

    vid = Math.round(((visi / skyriai) + Number.EPSILON) * 100) / 100;

    return {
        count,
        vid
    };
}

let nr7rez = dienos(m);

console.log("Tadas visą knygą perskaitys per " + nr7rez.count + " dienas (-ų). Tadas vidutiniškai per dieną perskaitė " + nr7rez.vid + " skyrius (-ų). ");
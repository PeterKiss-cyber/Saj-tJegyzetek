//Alap példák gyüjteménye js és ts

// néheny alap példa ts kódokra :
function ParosE(vizsgaltSzam: number): boolean {
    if (vizsgaltSzam % 2 == 0) {
        return true;
    }
    return false;
}
function Idojaras(homerseklet: number): string {
    if (homerseklet < 0) {
        return "fagyos";
    }
    else if (homerseklet < 15) {
        return "hűvös";
    }
    else if (homerseklet < 25) {
        return "kellemes";
    }
    else {
        return "meleg";
    }
}

function Jegyek(jegy: number): string {
    if (jegy == 1) {
        return "elégtelen";
    }
    else if (jegy == 2) {
        return "elégséges";
    }
    else if (jegy == 3) {
        return "közepes";
    }
    else if (jegy == 4) {
        return "jó";
    }
    else if (jegy == 5) {
        return "jeles";
    }
    else {
        return "hibás adat!";
    }
}

function Negyzetszamok(): number[] {
    let negyzetszamok: number[] = [];
    for (let i: number = 1; i <= 10; i++) {
        negyzetszamok.push(i * i);
    }
    return negyzetszamok;
}

function PrimE(vizsgaltSzam: number): boolean {
    let osztokSzama: number = 0;
    for (let i: number = 1; i <= vizsgaltSzam; i++) {
        if (vizsgaltSzam % i == 0) {
            osztokSzama++;
        }
    }
    if (osztokSzama == 2) {
        return true;
    }
    return false;
}

function SzamtaniSorozatGenerator(hossz: number, kezdoErtek: number, kulonbseg: number): number[] {
    let generaltTomb: number[] = [];
    for (let i: number = 0; i < hossz; i++) {
        generaltTomb.push(kezdoErtek);
        kezdoErtek += kulonbseg;
    }
    return generaltTomb;
}
console.log(SzamtaniSorozatGenerator(10, 1, 2));

function ParosakSzama(vizsgaltTomb: number[]): number {
    let parosakSzama: number = 0;
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] % 2 == 0) {
            parosakSzama++;
        }
    }
    return parosakSzama;
}

function SzamjegyekSzama(vizsgaltSzam: number): number {
    return vizsgaltSzam.toString().length;
}

function MinErtek(vizsgaltTomb: number[]): number {
    let minErtek: number = vizsgaltTomb[0];
    for (let i: number = 1; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] < minErtek) {
            minErtek = vizsgaltTomb[i];
        }
    }
    return minErtek;
}


//néhány alap példa js kódokra:
function PrimE(vizsgalt_szam) {
    let osztok_szama = 0;
    for (let i = 1; i <= vizsgalt_szam; i++) {
        if (vizsgalt_szam % i == 0) {
            osztok_szama++;//osztok_szama+=1; vagy osztok_szama=osztok_szama+1;
        }
    }
    if (osztok_szama == 2) {
        return true;
    }
    
    //Else ág elhagyható helyette lehet simán "return false;" is!
    else {
        return false;
    }
}
document.write(PrimE(21));
document.write("<hr>");
document.write(PrimE(13));
document.write("<hr>");
document.write(PrimE(19));
document.write("<hr>");
document.write(PrimE(42));
document.write("<hr>");

function SzamtaniSorozatGenerator(hossz, kezdoErtek, kulonbseg) {
    let generaltSorozat = [];
    for (let i = 0; i < hossz; i++) {
        generaltSorozat.push(kezdoErtek);
        kezdoErtek = kezdoErtek + kulonbseg;
    }
    return generaltSorozat;
}

function RandomSzam(hatar_egy, hatar_ketto) {
    if (hatar_egy < hatar_ketto) {
        var alsoHatar = hatar_egy;
        var felsoHatar = hatar_ketto;
    }
    else {
        var alsoHatar = hatar_ketto;
        var felsoHatar = hatar_egy;
    }
    let randomSzam = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
    return randomSzam;
}

function RandomSzamtombGenerator(hossz, alsoHatar, felsoHatar) {
    let generaltTomb = [];
    for (let i = 0; i < hossz; i++) {
        let randomSzam = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
        generaltTomb.push(randomSzam);
    }
    return generaltTomb;
}

//Tételek:
let szamtomb = [];
for (let i = 0; i < 10; i++) {
    let generaltSzam = Math.round(Math.random() * 100);
    szamtomb.push(generaltSzam);
}
document.write("A tömb elemei:");
for (let i = 0; i < szamtomb.length; i++) {
    document.write(szamtomb[i] + ",");
}

//F01_Összegzés tétele
let osszeg = 0;
for (let i = 0; i < szamtomb.length; i++) {
    osszeg = osszeg + szamtomb[i]; //osszeg+=szamtomb[i]
}

//F02_Átlagszámítás tétele

let osszeg = 0;
for (let i = 0; i < szamtomb.length; i++) {
    osszeg = osszeg + szamtomb[i]; //osszeg+=szamtomb[i]
}
document.write("<br>A tömb elemeinek átlaga:" + osszeg / szamtomb.length);
//.toFixed(2) => Kerekítés, 2 tizedesjegyre, a minta szerint

//F03_Minimumkeresés tétele: Érték alapján
let minErtek = szamtomb[0];
for (let i = 1; i < szamtomb.length; i++) {
    if (szamtomb[i] < minErtek) {
        minErtek = szamtomb[i];
    }
}
document.write("<br>A tömbben lévő legkisebb elem értéke:" + minErtek);

//F03_Minimumkeresés tétele: Index alapján
let minIndex = 0;
for (let i = 1; i < szamtomb.length; i++) {
    if (szamtomb[i] < szamtomb[minIndex]) {
        minIndex = i;
    }
}
document.write("<br>A tömbben lévő legkisebb elem indexe:" + minIndex);

//F03_Maximumkeresés tétele: Érték alapján
let maxErtek = szamtomb[0];
for (let i = 1; i < szamtomb.length; i++) {
    if (szamtomb[i] > maxErtek) {
        maxErtek = szamtomb[i];
    }
}
document.write("<br>A tömbben lévő legnagyobb elem értéke:" + maxErtek);

//F03_Maximumkeresés tétele: Index alapján
let maxIndex = 0;
for (let i = 1; i < szamtomb.length; i++) {
    if (szamtomb[i] > szamtomb[maxIndex]) {
        maxIndex = i;
    }
}
document.write("<br>A tömbben lévő legnagyobb elem indexe:" + maxIndex);

//F05_MegszámlálásTétele
let darab = 0;
for (let i = 0; i < szamtomb.length; i++) {
    if (szamtomb[i] % 2 == 0) {
        darab++;
    }
}
document.write("<br>A tömbben lévő páros számok mennyisége:" + darab);

//F06_KiválogatásTétele
document.write("<br>A tömbben lévő páros számok listája:");
for (let i = 0; i < szamtomb.length; i++) {
    if (szamtomb[i] % 2 == 0) {
        document.write(szamtomb[i] + ",");
    }
}

let parosak = [];
for (let i = 0; i < szamtomb.length; i++) {
    if (szamtomb[i] % 2 == 0) {
        parosak.push(szamtomb[i]);
    }
}
document.write("<br>A tömbben lévő páros számok mennyisége:" + parosak.length);

document.write("<br>A tömbben lévő páros számok listája:");
for (let i = 0; i < parosak.length; i++) {
    document.write(parosak[i] + ",");
}



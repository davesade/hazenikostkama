let sloupce = [];
let pocetKostek = 2
let pocetStranKostky = 12
let height = 800;
let width = 1600;

function setup() {
    createCanvas(width, height);
    for (let i = pocetKostek; i < pocetKostek * pocetStranKostky + 1; i++) {
        sloupce.push(new sloupec(i))
    }
}

function draw() {
    background(220);
    let vyber = hazeni() - pocetKostek;
    sloupce[vyber].vyska++;

    for (let sloupec of sloupce) {
        sloupec.kresli();
    }
}

class sloupec {
    constructor(pocet) {
        this.pocet = pocet - pocetKostek + 1
        this.hodnota = pocet
        this.x = (width / (pocetKostek * pocetStranKostky + 1)) * this.pocet
        console.log(pocet)
        console.log(this.x)
        this.y = 10
        this.vyska = 20
        this.colorR = 255 / this.pocet * random(1)
        this.colorG = 255 / this.pocet * random(1)
        this.colorB = 255 / this.pocet * random(1)

    }

    kresli() {
        //console.log(this.x)
        fill(this.colorR, this.colorG, this.colorB);
        stroke(this.colorR, this.colorG, this.colorB);
        rect(this.x, this.y, 20, this.vyska)
        fill(255)
        textSize(24)
        textAlign('center')
        text(this.hodnota, this.x, this.y, 25, 25);
    }

}

function hazeni() {
    let vysledekHodu = 0;
    for (let i = 1; i < pocetKostek + 1; i++) {
        let hod = Math.floor(random(1, pocetStranKostky + 1))
        //console.log("Hod jednou kostkou: ", hod)
        vysledekHodu = vysledekHodu + hod;
    }
    //console.log("Soucet hodu vsemi kostkami: ", vysledekHodu)
    return vysledekHodu;
}

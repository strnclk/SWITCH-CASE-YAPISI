//!--------UYGULAMA 1---------

let sayi = prompt("Lütfen 1 ile 5 arasında bir sayı giriniz");

switch (sayi) {
    case "1":
        console.log("GİRİLEN SAYI 1");
        break;

    case "2":
        console.log("GİRİLEN SAYI 2");
        break;

    case "3":
        console.log("GİRİLEN SAYI 3");
        break;

    case "4":
        console.log("GİRİLEN SAYI 4");
        break;

    case "5":
        console.log("GİRİLEN SAYI 5");
        break;



    default:
        console.log("GİRİLEN SAYI 1 İLE 5 ARASINDA OLMALIDIR!");
        break;


}


//!-----------UYGULAMA 2------------

let yeniSatir = "\r\n";
let metin = "1-Pazartesi" + yeniSatir
    + "2-Salı" + yeniSatir
    + "3-Çarşamba" + yeniSatir
    + "4-Perşembe" + yeniSatir
    + "5-cuma" + yeniSatir
    + "6-Cumartesi" + yeniSatir
    + "7-Pazar"+yeniSatir
    + "LÜTFEN BİR SEÇİM YAPINIZ";

let deger = prompt(metin);

switch (deger) {
    case "1":
        console.log("PAZARTESİ GÜNÜ");
        break;

    case "2":
        console.log("SALI GÜNÜ");
        break;

    case "3":
        console.log("ÇARŞAMBA GÜNÜ");
        break;

    case "4":
        console.log("PERŞEMBE GÜNÜ");
        break;

    case "5":
        console.log("CUMA GÜNÜ");
        break;

    case "6":
        console.log("CUMARTESİ GÜNÜ");
        break;

    case "7":
        console.log("PAZAR GÜNÜ");
        break;

        default:
            console.log("LÜTFEN GEÇERLİ BİR SEÇİM YAPINIZ");


}


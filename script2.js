// const yaş = 10;
// const yaşuygunmu = yaş >= 18;
// // console.log(yaşuygunmu);
// if (yaşuygunmu) {
//   console.log("Murat ehliyet alabilir");
// } else {
//   // console.log("Murat ehliyet alamaz");
//   const yılkaldı = 18 - yaş;
//   console.log(`murat çok genç. ${yılkaldı} yıl kadar beklemesi gerekiyor`);
// }
// const doğumyılı = 1986;
// if (doğumyılı <= 2000) {
//   yüzyıl = 20;
// } else {
//   yüzyıl = 21;
// }
// console.log(yüzyıl);
//challange 5
// const ülke = "Portekiz";
// const kıta = "Avrupa";
let nüfus = 40;
let ülke = "İtalya";
// let dil = "türkçe";

// const adaMı = false
// adaMı = true
// const dil = 'Portekizce'

// console.log(nüfus / 2)
// nüfus++
// console.log(nüfus)
// console.log(nüfus > 6)
// console.log(nüfus < 33)

// const açıklama = "Portekiz Avrupa'da ve 11 milyon insan portekizce konuşuyor"

// const açıklama =
//   ülke +
//   " " +
//   kıta +
//   "'da" +
//   " ve " +
//   nüfus +
//   " milyon insan " +
//   dil +
//   " konuşuyor.";

// console.log(açıklama)
// console.log(typeof adaMı)
// console.log(typeof ülke)
// console.log(typeof kıta)
// console.log(typeof nufüs)
// console.log(typeof dil)
// dil = 'Portekizce'
// console.log(typeof dil)
// console.log(ülke)
// console.log(kıta)
// console.log(nufüs)s
// if (nüfus > 33) {
//   console.log(`${ülke}'nin nüfusu ortalamanın üstünde`);
// } else {
//   console.log(`italyanın nüfusu ortalamanın, ${nüfus} milyon altında`);
// }

const boymurat = 1.75;
const boyengin = 1.82;
const ağırlıkmurat = 70;
const ağırlıkengin = 80;
// console.log(
//   "Murat'ın boyu " + boymurat,
//   "ve kilosu " +
//     ağırlıkmurat +
//     " " +
//     "Engin'in boyu " +
//     boyengin +
//     " " +
//     "ve kilosu " +
//     ağırlıkengin
// );
const vücutkitleendeksimurat = ağırlıkmurat / boymurat ** 2;
console.log("Muratın vücut kitle endeksi : " + vücutkitleendeksimurat);
const vücutkitleendeksiengin = ağırlıkengin / boyengin ** 2;
console.log("Enginin vücut kitle endeksi : " + vücutkitleendeksiengin);
const büyükmü = vücutkitleendeksimurat > vücutkitleendeksiengin;
console.log(büyükmü);
if (vücutkitleendeksiengin > vücutkitleendeksimurat) {
  console.log(
    `Enginin ${vücutkitleendeksiengin}'si Muratın ${vücutkitleendeksimurat} daha büyük`
  );
} else {
  console.log(
    `Muratın ${vücutkitleendeksimurat}'si Engininin ${vücutkitleendeksiengin} daha büyük`
  );
}

//Type conversion & Connection
// const girişyılı = "1986";
// console.log(Number(girişyılı), girişyılı);
// console.log(Number(girişyılı) + 18);
// console.log(Number("Furkan"));
// console.log(typeof NaN);
// // //
// Type coercion
// console.log("ben" + 36 + "Yaşındayım");
// console.log("ben" + 36 + "Yaşındayım");
// ------ eksi operatörü dizeleri sayıya dönüştürür..--------//
// console.log("36" - "10" - 3); //23
// console.log("36" + "10" + 3); //36103

//----------------- Truthy & Falsy Değerler--------------//

// 5 falsy değer:0,"",underfined,null,NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Furkan"));
// console.log(Boolean(1));
// console.log(Boolean(""));
// const money = 0;
// if (money) {
//   console.log("Sakın Harcama");
// } else {
//   console.log("harcamalarına dikkat etmelisin");
// }

// let yükseklik;// değer atamadığımız için false alanı çalışacak yani else durumu
// if (yükseklik) {
//   console.log("Yükseklik tanımlanmış");
// } else {
//   console.log("Yükseklik yok");
// }

//--------------- Eguaility Operatör-----------
// const yaş = 18;
// if (yaş === 18) {
//   console.log("Yeni Yetişkin oldum");
// }
// const favorinumber = Number(prompt("en sevdiğin numara"));
// console.log(favorinumber);
// console.log(typeof favorinumber);

// if (favorinumber === 23) {
//   console.log("23 bir sayıdır");
// } else if (favorinumber === 7) {
//   console.log("7 şanlı sayım");
// } else {
//   console.log(" sayı 23 ve 7 değil");
// }
// if (favorinumber !== 23) {
//   console.log("Neden 23 değil");
// }

const komşusayı = Number(prompt("ülkenizin kaç komşusu var"));
if (komşusayı == 1) {
  console.log("Sadece 1 komşu");
} else if (komşusayı > 1) {
  console.log("1 den fazla komşu");
} else {
  console.log("komşu yok");
}



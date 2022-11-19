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

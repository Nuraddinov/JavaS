// let isMarried = true;
// console.log(typeof isMarried);
// let myYear = 2000;
// {
//   myYear = 2003;
//   console.log(myYear);
// }
// let name = prompt("Ismingizni kiriting... ");
// let old = prompt("Yoshingizni kiriting...");
// alert("ismingiz " + name + "\n" + "yoshingiz " + old);
// console.log("ismingiz " + name + "\n" + "yoshingiz " + old);

// // Masalalar

// 1
// let a = prompt("Kvadratning tamonini kiriting");
// let peremetri = 4 * a;
// alert("Tomoni=" + a + "\n" + "Peremetiri=" + peremetri);

// 2
// let a = prompt("Kvadratning tamonini kiriting");
// let yuzi = a * a;
// alert("Tomoni=" + a + "\n" + "Yuzi=" + yuzi);

// 3
// let a = +prompt("To'g'ri to'rtburchakning a tomonini kiritng");
// let b = +prompt("To'g'ri to'rtburchakning b tomonini kiritng");
// let yuzi = a * b;
// let peremetri = 2 * (a + b);
// alert(
//   "Tomoni a=" +
//     a +
//     "\n" +
//     "Tomoni b=" +
//     b +
//     "\n" +
//     "Yuzi=" +
//     yuzi +
//     "\n" +
//     "Peremetri=" +
//     peremetri
// );

// 4
// let d = prompt("Aylananing diametirini kiritng");
// let p = 3.14;
// let uzunligi = d * p;
// alert(
//   "Aylana diametri=" +
//     d +
//     "\n" +
//     "p ning qiymati=" +
//     p +
//     "\n" +
//     "Uzunligi" +
//     uzunligi
// );

// 5
// let a = prompt("Kubning tomonini kiriting");
// let v = a ** 3;
// let S = 6 * a * a;
// alert(
//   "Kubning tomoni a=" + a + "\n" + "Hajimi v=" + v + "\n" + "To'la sirti s=" + S
// );

// 6
// let a = +prompt("Paralelipipedning a tomonini kiriting");
// let b = +prompt("Paralelipipedning b tomonini kiriting");
// let c = +prompt("Paralelipipedning c tomonini kiriting");
// let v = a * b * c;
// let s = 2 * (a * b + b * c + a * c);
// alert(
//   "Tomoni a=" +
//     a +
//     "\n" +
//     "Tomoni b=" +
//     b +
//     "\n" +
//     "Tomoni c=" +
//     c +
//     "\n" +
//     "Hajimi v=" +
//     v +
//     "\n" +
//     "To'la sirti s=" +
//     s
// );

// 7
// let r = prompt("Doiraning radiusini kiriting");
// let p = 3.14;
// let l = 2 * p * r;
// let s = p * r * r;
// alert(
//   "Radiusi r=" +
//     r +
//     "\n" +
//     "p=" +
//     p +
//     "\n" +
//     "Uzunligi l=" +
//     l +
//     "\n" +
//     "Yuzi s=" +
//     s
// );

// 8
// let a = +prompt("a Sonni kiriting");
// let b = +prompt("b Sonni kiriting");
// let ortaArifmetigi = (a + b) / 2;
// alert(
//   "a soni=" +
//     a +
//     "\n" +
//     "b soni=" +
//     b +
//     "\n" +
//     "O'rta arifmetigi=" +
//     ortaArifmetigi
// );

// 9
// let a = +prompt("a ni qiymatini kiriting"),
//   b = +prompt("b ni qiymatini kiriting");
// let g = (a * b) ** (1 / 2);
// alert("O'rta geometrigi =" + g);

// 10
// let a = +prompt("a sonni kiriting");
// let b = +prompt("b sonni kiriting");
// let yigindi = a + b;
// let kopaytmasi = a * b;
// let aNingKvadrati = a * a;
// let bNingKvadrati = b * b;
// alert(
//   "a soni=" +
//     a +
//     "\n" +
//     "a soni=" +
//     b +
//     "\n" +
//     "Yig'indisi" +
//     yigindi +
//     "\n" +
//     "Ko'paytmasi=" +
//     kopaytmasi +
//     "\n" +
//     "a sonining kvadrati=" +
//     aNingKvadrati +
//     "\n" +
//     "b sonining kvadrati=" +
//     bNingKvadrati
// );

// 11=10

// 12
// let a = +prompt("a ni qiymatini kiriting"),
//   b = +prompt("b ni qiymatini kiriting"),
//   c = (a ** 2 + b ** 2) ** (1 / 2),
//   p = a + b + c;
// alert("Gipotenuzasi c=" + c + "\n" + "Perimetri p=" + p);

// 13
// let r1 = +prompt("Aylana radiusini kiriting r1=");
// let r2 = +prompt("Aylana radiusini kiriting r2=");
// let p = 3.14;
// let s1 = r1 * p;
// let s2 = r2 * p;
// let s3 = s1 - s2;
// alert(
//   "r1=" +
//     r1 +
//     "\n" +
//     "r2=" +
//     r2 +
//     "\n" +
//     "p=" +
//     p +
//     "\n" +
//     "Birinchi aylananing yuzi s1=" +
//     s1 +
//     "\n" +
//     "Ikkinchi aylananing yuzi s2=" +
//     s2 +
//     "\n" +
//     "Ikkala aylana yuzlarining ayirmasi s3=" +
//     s3
// );

// 14
// let l = prompt("Aylana uzunligi kiriting");
// let p = 3.14;
// let r = l / (2 * p);
// let s = p * r * r;
// alert(
//   "Aylana uzunligi l=" +
//     l +
//     "\n" +
//     "p=" +
//     p +
//     "\n" +
//     "Aylana radiusi r=" +
//     r +
//     "\n" +
//     "Aylana yuzi s=" +
//     s
// );
// l=2pr
// s=pr**2

// 15
// let s = +prompt("Aylana yuzini kiritng");
// let p = 3.14;
// let r = l / (2 * p);
// let d = r * 2;
// alert(
//   "Aylana yuzi s=" +
//     s +
//     "\n" +
//     "p=" +
//     p +
//     "\n" +
//     "Aylana radiusi r=" +
//     r +
//     "\n" +
//     "Aylana diametri d=" +
//     d
// );

// 16
// let x1 = +prompt("x1 ni qiymatini kiriting"),
//   y1 = +prompt("y1 ni qiymatini kiriting"),
//   x2 = +prompt("x2 ni qiymatini kiriting"),
//   y2 = +prompt("y2 ni qiymatini kiriting"),
//   two = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** (1 / 2);
// alert("ikkita nuqta orasidagi masofa="+two)

// 17
// let x1 = +prompt("x1 ni qiymatini kiriting"),
//   x2 = +prompt("x2 ni qiymatini kiriting"),
//   x3 = +prompt("x3 ni qiymatini kiriting"),
//   y1 = +prompt("y1 ni qiymatini kiriting"),
//   y2 = +prompt("y2 ni qiymatini kiriting"),
//   y3 = +prompt("y3 ni qiymatini kiriting"),
//   x3_y3_x1_y1 = ((x3 - x1) ** 2 + (y3 - y1) ** 2) ** (1 / 2),
//   x2_y2_x3_y3 = ((x3 - x2) ** 2 + (y3 - y2) ** 2) ** (1 / 2),
//   yigindi =
//     ((x3 - x1) ** 2 + (y3 - y1) ** 2) ** (1 / 2) +
//     ((x3 - x2) ** 2 + (y3 - y2) ** 2) ** (1 / 2);
// alert(
//   "AC kesma uzunligi=" +
//     x3_y3_x1_y1 +
//     "\n" +
//     "BC kesma uzunligi=" +
//     x2_y2_x3_y3 +
//     "\n" +
//     "AC+BC yig'indisi=" +
//     yigindi
// );

// 18
// let x1 = +prompt("x1 ni qiymatini kiriting"),
//   x2 = +prompt("x2 ni qiymatini kiriting"),
//   x3 = +prompt("x3 ni qiymatini kiriting"),
//   y1 = +prompt("y1 ni qiymatini kiriting"),
//   y2 = +prompt("y2 ni qiymatini kiriting"),
//   y3 = +prompt("y3 ni qiymatini kiriting"),
//   x3_y3_x1_y1 = ((x3 - x1) ** 2 + (y3 - y1) ** 2) ** (1 / 2),
//   x2_y2_x3_y3 = ((x3 - x2) ** 2 + (y3 - y2) ** 2) ** (1 / 2),
//   yigindi =
//     ((x3 - x1) ** 2 + (y3 - y1) ** 2) ** (1 / 2) *
//     ((x3 - x2) ** 2 + (y3 - y2) ** 2) ** (1 / 2);
// alert(
//   "AC kesma uzunligi=" +
//     x3_y3_x1_y1 +
//     "\n" +
//     "BC kesma uzunligi=" +
//     x2_y2_x3_y3 +
//     "\n" +
//     "AC*BC ko'paytmasi=" +
//     yigindi
// );

// 19
// let x1 = +prompt("x1 ni qiymatini kiriting"),
//   y1 = +prompt("y1 ni qiymatini kiriting"),
//   x2 = +prompt("x2 ni qiymatini kiriting"),
//   y2 = +prompt("y2 ni qiymatini kiriting"),
//   peremetri = 2 * (x2 - x1) + 2 * (y2 - y1);
// alert("peremetri =" + peremetri);

// 20=16

// 21
// 20=21

// 22;
// let a = "olma",
//   b = "nok",
//   c;
// c = a;
// a = b;
// b = c;
// console.log(a);
// console.log(b);

// 23
// let a = "olma",
//   b = "nok",
//   d = "uzum",
//   c;
// c = a;
// a = b;
// b = d;
// d = c;
// console.log(a);
// console.log(b);
// console.log(d);

// 24
let a = "olma",
  b = "nok",
  c = "uzum",
  d;
d = a;
a = c;
c = b;
d = a;
console.log(a);
console.log(b);
console.log(c);

// 25
// let x = +prompt("x ning qiymatini kiriting");
// let y = 3 * x ** 6 - 6 * x ** 2 - 7;
// alert("x=" + x + "\n" + "Funksiyani qiymati y=" + y);

// 26
// let x = +prompt("x ning qiymatini kiriting");
// let y = 4 * (x - 3) ** 6 - 7 * (x - 3) ** 3 + 2;
// alert("x=" + x + "\n" + "Funksiyani qiymati y=" + y);

// 27
// let a = +prompt("a nign qiymatini kiriting");
// let a2 = a ** 2;
// let a4 = a ** 4;
// let a8 = a ** 8;
// alert("a="+a+"\n"+"a^2="+a2+"\n"+"a^4="+a4+"\n"+"a^8"+a8)

// 28=27

// let x = +prompt("hohlagan qiymatingizni kiriting"),
//   y = x ** (1 / 2);
// alert(y)
// let a=+prompt("Ihtiyoriy son kiritng")
// if()
// console.log());

/**
 * const,let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き"
// console.log(val1);

// //var変数は再宣言可能   
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "letを上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き不可
// val3 = "const変数を上書き";

// //const変数を再宣言不可
// const val3 = "const変数を再宣言";

// const val4 = {
//     name: "zyake",
//     age:28,
// };
// console.log(val4);

// //constで定義した配列のプロパティの変更が可能
// val4.name = "Sonoda";
// console.log(val4);

// //オブジェクトのプロパティを追加できる
// val4.name = "Ryo";
// val4.adddres = "Chiba";
// console.log(val4);

// //配列の宣言
// const val5 = ['dog','cat'];
// console.log(val5);

// //constで定義した配列のプロパティの変更が可能
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

//reactの変数宣言では基本的にはconstを使用する
//処理の中で上書きが必要な場合に限り、letを使用する。
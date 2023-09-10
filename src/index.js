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


/**
 * テンプレート文字列
 */

// const name = "Sonoda";
// const age = 32;

// //「私の名前はSonodaです。年齢は32歳です。」

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// /**
//  * アロー関数
//  */

// //従来の関数
// // function func1(str) {
// //     return str;
// // }
// const func1 = function(str){
//     return str;
// }
// console.log(func1("func1です"));

// //アロー関数(functionの記述を省略できる)
// const func2 = (str) => {
//     return str;
// }
// console.log(func2("func2です。"));

// //引数が1つの時は（）を省略できる
// const func3 = str => {
//     return str;
// }
// console.log(func3("func3です。"));

// //処理が1行で終わるような単一式の場合は、returnを省略できる
// //{}で囲った時はreturnが必要
// const func4 = str => str;
// console.log(func4("func4です。"));

// // const func5 = (num1 , num2) => {
// //     return num1 + num2;
// // }
// const func6 = (num1 , num2) => num1 + num2;
// console.log(func6(10 , 20));

/**
 * 分割代入
 */
// const myProfile = {
//     name:"Sonoda",
//     age:32,
// };
// const message3 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message3);

// const {name , age} = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

const myProfile = ["Sonoda" , 32];

const message5 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
console.log(message5);

const [name, age] = myProfile;
const message6 = `名前は${name}です。年齢は${age}歳です。`;
console.log(message6);


/**
 * デフォルト値
 */
const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん!`);
sayHello("Sonoda");

/**
 * スプレッド構文 ...(要素を順番に設定していく)
 */
//配列の展開
const arr1  = [1 , 2];
// console.log(arr1);
// console.log(...arr1);

const sumFunc = (num1 , num2) => console.log(num1 + num2);
sumFunc(arr1[0] , arr1[1]);
sumFunc(...arr1);

//まとめる
const arr2 = [1,2,3,4,5];
const [...arr3] = arr2;
// console.log(num1);
// console.log(num2);
console.log(arr3);

//配列のコピー、結合(reactでもよく使かう)
const arr4 = [10 , 20];
const arr5 = [30 , 40];

const arr6 = [...arr4];
arr6[0] = 100;
console.log(arr6);
console.log(arr4);

// const arr7 = [...arr4 , ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);


/**
 * mapやfilterを使った配列の処。
 * map:配列に対して使える関数で、順番にmapから取り出して配列を生成する。
 * filter:ある条件に一致したものだけを返却して新しい配列を生成する。
 */

const nameArr = ["Sonoda" , "Yamada" , "Tanaka"];
// for(let index=0; index<nameArr.length; index++){
//     console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// const nameArr2 = nameArr.map((name)=>{
//     return name;
// })
// console.log(nameArr2);

nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//     return num % 2 === 1;
// });
// console.log(newNumArr);


const newNameArr = nameArr.map((name) => {
    if(name ==="Sonoda"){
        return name
    }else{
        return `${name}さん`
    }
})
console.log(newNameArr);










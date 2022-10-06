/**
 * const.let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // leは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可
// // val3 = "const変数を上書き"

// const val3 = "consr変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "達也",
//   age: 27,
// };
// val4.name = "TATSUYA";
// val4.adres = "福岡";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "達也";
// const age = 27;
// // [私の名前は達也です。年齢は27歳です。]

// // 従来の方法
// const message = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// /**
//  * アロー関数
//  */
// // 従来の関数
// // function func1(str) {
// //   return str;
// // }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です。"));

// // アロー関数
// // 引数が１つの場合、かっこを省略することもできる
// // return が単一行の場合、return{}を省略することができる
// // ⇒ const func2 = (str) => str;
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です。"));

// // const func3 = (num1, num2) => {
// //   return num1 + num2;
// // }
// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "達也",
//   age: 27
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["たつや", 27];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// // 配列は順番が大事
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん!`);
// // 引数が何も設定されていない場合は、undefindになる
// sayHello();

/**
 * スプレッド構文　...
 */
// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(arr3);

// 配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// // const arr6 = [...arr4];
// // const arr62 = arr4;
// // console.log(arr62);

// // const arr7 = [...arr4, ...arr5];
// // console.log(arr7);

// // ↓　そのまま配列変数をコピーすれば？
// // ⇒参照が残ってしまうので、...を使用したコピーを使う
// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// // arr4もarr8も同じ結果となってしまう
// console.log(arr8);
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */

const namearr = ["田中","山田","奥野"];
// for (let index = 0 ; index < namearr.length; index++) {
//   console.log(`${index+1}番目は、${namearr[index]}です。`);
// }

// // mapを使用
// const nameArr2 = namearr.map((name) => {
//   return name;
// })
// console.log(nameArr2);

// 引数は複数とれる→インデックスを取得したり、、、
//namearr.map((name, index) => console.log(`${index + 1}番目は、${name}です。`));


// fileter：ある条件に一致したものだけ返却して新しい配列を生成する

const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);

const newNameArr = namearr.map((name) => {
  if (name === '奥野'){
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時：　条件がfalseの時
// 1行でかける
//const val1 = 1 > 0 ? 'trueです' : 'falseです';
//console.log(val1);

// const num = 1300;
// //console.log(num.toLocaleString());

// const formatNum = typeof num === "number" ? num.toLocaleString(num) : "数値を入力してください。";
// console.log(formatNum);

// 関数のリターン部分に三項演算子を用いてみる
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています' : '許容範囲内です。';
// };
// console.log(checkSum(50, 50));
// console.log(checkSum(50, 51));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// const flag1 = false;
// const flag2 = true;

// if (flag1 || flag2){
//   console.log("１か２はtrueになります");
// }

// if (flag1 && flag2){
//   console.log("１も２もtrueになります");
// }

// ★ ||は、又は　&&は、かつという意味ではない

// || は左側がfalseなら、右側を返す
// || は左側がtrueなら、左側を返す
// const num = 100;
// const fee = num || "金額未設定です。";
// console.log(fee);

// && は左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);

"use strict";
function copy(value) {
    return value;
}
// 関数呼び出し時に<>で型を渡す事で、関数側で<>として型を受け取ることができる = ジェネリクス
// console.log(copy<string>('hello'));
// ジェネリクスは、実は<>で型を渡さなくても、上記copy関数のように、関数側で型を受け取る仕組みさえ設けておけば、返り値の型推論を勝手にしてくれる
console.log(copy('hello'));
// extendsを使う事で引数で渡せる型に制約を付けることができる
// 以下の場合、引数で渡せる方は{name: string}のオブジェクトのみ
function copyExtends(value) {
    return value;
}
console.log(copy({ name: 'Quill' }));
// keyofを使う事でオブジェクトのkeyを抜き出すことができる
// 以下のように、extendsとkeyoを併用して「第一引数にオブジェクト、第二引数でオブジェクトのkey」を渡すように引数の型を指定する事で、
// 関数内で、value[key]のようにオブジェクトのメンバーに容易にアクセスできる
function copyKeyof(value, key) {
    value[key];
    return value;
}
console.log(copy({ name: 'Quill' }), 'name');
// ジェネリクスはclassにも使える
var LightDatabase = /** @class */ (function () {
    function LightDatabase() {
        this.data = [];
    }
    LightDatabase.prototype.add = function (item) {
        this.data.push(item);
    };
    LightDatabase.prototype.remove = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    LightDatabase.prototype.get = function () {
        return this.data;
    };
    return LightDatabase;
}());
var lightDatabase = new LightDatabase();
lightDatabase.add('Banana');
lightDatabase.add('Apple');
lightDatabase.remove('Banana');
console.log(lightDatabase.get());
var Tmp;
//# sourceMappingURL=generics.js.map
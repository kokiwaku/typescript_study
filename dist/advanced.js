"use strict";
var _a, _b, _c;
var quill = {
    name: 'quill',
    role: 'front-end',
    follower: 10000,
};
function toUpperCase(x) {
    // typeofで型チェックしてからであれば、toUpperCaseを使える
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return x;
}
var upperHi = toUpperCase('Hi');
function describeProfile(nomadwoker) {
    // in演算子でroleの存在を確認することで、NomadWorkerの型がEngineerであることを確定させている
    if ('role' in nomadwoker) {
        console.log(nomadwoker.role);
    }
}
var Dog = /** @class */ (function () {
    function Dog() {
        this.kind = 'dog';
    }
    Dog.prototype.speak = function () {
        console.log('Bow');
    };
    return Dog;
}());
var Bird = /** @class */ (function () {
    function Bird() {
        this.kind = 'bird';
    }
    Bird.prototype.speak = function () {
        console.log('tweet');
    };
    Bird.prototype.fly = function () {
        console.log('flutter');
    };
    return Bird;
}());
function havePet(pet) {
    pet.speak();
    if (pet instanceof Bird) {
        pet.fly();
    }
    // 各クラス等に判別用のプロパティ(kind)を設けて判定に使う方法もある（タグ付）
    switch (pet.kind) {
        case 'bird':
            pet.speak();
            break;
    }
}
// havePet(new Bird());
havePet(new Dog());
var designer = {
    name: 'taro',
    age: '1',
};
// インデックスシグネチャを使用した場合、存在しないメンバーにアクセスしようとしてもエラーが出ないので注意
console.log(designer.role);
var downloadedData = {
    id: 1
};
// オプショナルチェイシング
// ?を付ける事で「存在すればその値を返す.存在しなければundefinedを返す」という挙動になる
console.log((_b = (_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.first);
// Nullish Coalescing
// ?? を付ける事で「undefined or null以外ならその値を返す.それ以外では??の右辺の値を返す」という挙動になる
var userData = (_c = downloadedData.user) !== null && _c !== void 0 ? _c : 'no-user';
// タプルを使えば、可変長引数にも型を付けられる
function advancedFn() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(args);
}
advancedFn(1, 'hello', true, 3, 4);
var peter = {
    name: 'peter',
    age: 29,
};
//# sourceMappingURL=advanced.js.map
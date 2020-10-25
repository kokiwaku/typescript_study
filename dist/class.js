"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// abstract関数、プロパティを使う場合には、必ずabstract クラスにする必要がある
// abstractクラスはインスタンス化できない
var Person = /** @class */ (function () {
    // 初期化処理はコンストラクタの引数に書ける
    // public name: string;
    // private age: number;
    // readonlyをつけると、読み取り専用になる。ただし、constructor内では書き換え可能
    // private readonly age: number;
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.incrementAge = function () {
        this.age += 1;
    };
    Person.prototype.greeting = function () {
        // thisは、関数の呼び出し元で定義されたプロパティが入る
        console.log("Hi! My name is " + this.name + " I am " + this.age + " years old.");
        this.explainJob();
    };
    Person.species = 'homo sapiense';
    Person.isAdult = function (age) {
        return age >= 20;
    };
    return Person;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, _subject) {
        var _this = 
        // superで親クラスのconstructor関数を呼び出している
        _super.call(this, name, age) || this;
        _this._subject = _subject;
        return _this;
    }
    Teacher.prototype.explainJob = function () {
        console.log("I am teacher. I teach " + this.subject + ".");
    };
    Object.defineProperty(Teacher.prototype, "subject", {
        get: function () {
            if (!this._subject) {
                throw new Error('There is no value;');
            }
            return this._subject;
        },
        set: function (value) {
            if (!value) {
                throw new Error('There is no value;');
            }
            this._subject = value;
        },
        enumerable: false,
        configurable: true
    });
    // シングルトンパターン（このクラスのインスタンスは一度しか生成されない）
    Teacher.getInstance = function () {
        if (Teacher.instance)
            return Teacher.instance;
        Teacher.instance = new Teacher('Quile', 20, 'Math');
        return Teacher.instance;
    };
    return Teacher;
}(Person));
var teacher = Teacher.getInstance();
var teacher2 = Teacher.getInstance();
console.log(teacher, teacher2);
//# sourceMappingURL=class.js.map
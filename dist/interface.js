"use strict";
var nameable = {
    name: 'Quile',
    nickName: 'Quila'
};
var Developer = /** @class */ (function () {
    // オプショナルパラメータは引数の最後に書く
    function Developer(name, age, initName) {
        this.name = name;
        this.age = age;
        if (initName) {
            this.name = initName;
        }
    }
    Developer.prototype.greeting = function (message) {
        console.log('Hi');
    };
    return Developer;
}());

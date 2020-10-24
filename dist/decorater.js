"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logging(message) {
    return function (constractor) {
        console.log('logging');
        console.log(constractor);
    };
}
var User = /** @class */ (function () {
    function User() {
        this.name = 'Quill';
        console.log('User was created!');
    }
    User = __decorate([
        Logging('Logging User')
    ], User);
    return User;
}());
// デコレータはclassの定義時に一度のみ実行される
// 以下のように、インスタンス生成時に毎回実装される訳ではない
var user1 = new User();
var user2 = new User();
var user3 = new User();

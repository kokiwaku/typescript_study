function Logging(message: string) {
    return function (constractor: Function) {
        console.log('logging');
        console.log(constractor);
    }
}

@Logging('Logging User')
class User {
    name = 'Quill';
    constructor() {
        console.log('User was created!');
    }
}

// デコレータはclassの定義時に一度のみ実行される
// 以下のように、インスタンス生成時に毎回実装される訳ではない
const user1 = new User();
const user2 = new User();
const user3 = new User();
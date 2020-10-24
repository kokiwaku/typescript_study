type Nameable = {
    name: string;
    // オプショナルプロパティ。あってもなくてもいい。
    nickName?: string;
}

const nameable: Nameable = {
    name: 'Quile',
    nickName: 'Quila'
}

interface Human extends Nameable {
    // interfaceでreadonlyをつけても、implementのプロパティで上書きされる
    readonly name: string;
    age: number;
    greeting(message: string): void;
}

class Developer implements Human {
    // オプショナルパラメータは引数の最後に書く
    constructor(public name: string, public age: number, initName?: string) {
        if (initName) {
            this.name = initName;
        }
    }
    greeting(message?: string) {
        console.log('Hi');
    }
}

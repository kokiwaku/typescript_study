// abstract関数、プロパティを使う場合には、必ずabstract クラスにする必要がある
// abstractクラスはインスタンス化できない
abstract class Person {

    static species = 'homo sapiense';

    static isAdult = function(age: number) {
        return age >= 20;
    };

    // 初期化処理はコンストラクタの引数に書ける
    // public name: string;
    // private age: number;

    // readonlyをつけると、読み取り専用になる。ただし、constructor内では書き換え可能
    // private readonly age: number;

    constructor(public name: string, protected age: number) {
    }

    incrementAge() {
        this.age += 1;
    }

    greeting(this: Person) {
        // thisは、関数の呼び出し元で定義されたプロパティが入る
        console.log(`Hi! My name is ${this.name} I am ${this.age} years old.`);

        this.explainJob();
    }

    abstract explainJob(): void;
}

class Teacher extends Person {

    private static instance: Teacher;

    explainJob() {
        console.log(`I am teacher. I teach ${this.subject}.`);
    }

    get subject() {
        if (!this._subject) {
            throw new Error('There is no value;');
        }
        return this._subject;
    }

    set subject(value) {
        if (!value) {
            throw new Error('There is no value;');
        }
        this._subject = value;
    }

    private constructor(name: string, age: number, private _subject: string) {
        // superで親クラスのconstructor関数を呼び出している
        super(name, age);
    }

    // シングルトンパターン（このクラスのインスタンスは一度しか生成されない）
    static getInstance() {
        if (Teacher.instance) return Teacher.instance;
        Teacher.instance = new Teacher('Quile', 20, 'Math');
        return Teacher.instance;
    }
}

const teacher = Teacher.getInstance();
const teacher2 = Teacher.getInstance();
console.log(teacher,teacher2);
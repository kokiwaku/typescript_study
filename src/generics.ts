function copy<T>(value: T): T {
    return value;
}
// 関数呼び出し時に<>で型を渡す事で、関数側で<>として型を受け取ることができる = ジェネリクス
// console.log(copy<string>('hello'));
// ジェネリクスは、実は<>で型を渡さなくても、上記copy関数のように、関数側で型を受け取る仕組みさえ設けておけば、返り値の型推論を勝手にしてくれる
console.log(copy('hello'));

// extendsを使う事で引数で渡せる型に制約を付けることができる
// 以下の場合、引数で渡せる方は{name: string}のオブジェクトのみ
function copyExtends<T extends {name: string}>(value: T): T {
    return value;
}
console.log(copy({name: 'Quill'}));

// keyofを使う事でオブジェクトのkeyを抜き出すことができる
// 以下のように、extendsとkeyoを併用して「第一引数にオブジェクト、第二引数でオブジェクトのkey」を渡すように引数の型を指定する事で、
// 関数内で、value[key]のようにオブジェクトのメンバーに容易にアクセスできる
function copyKeyof<T extends {name: string}, U extends keyof T>(value: T, key: U): T {
    value[key];
    return value;
}
console.log(copy({name: 'Quill'}), 'name');

// ジェネリクスはclassにも使える
class LightDatabase<T extends string | number | boolean> {
    private data: T[] = [];
    add(item: T) {
        this.data.push(item);
    }
    remove(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get() {
        return this.data;
    }
}
const lightDatabase = new LightDatabase<string>();
lightDatabase.add('Banana');
lightDatabase.add('Apple');
lightDatabase.remove('Banana');
console.log(lightDatabase.get());

// union型との違い
// ジェネリクスを使う事で、newする時<>で指定した型で、引数で渡せる型を限定することができる
// union側の場合は、union型で指定した型であればなんでも引数で渡せてしまう

// ジェネリクスはデフォルト値を設けることもできる
interface ResponseData<T extends {name: string} = any> {
    data: T;
    status: number;
}
let Tmp: ResponseData;


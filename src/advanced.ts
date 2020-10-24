interface Engineer {
    name: string;
    role: string;
}

interface Blogger {
    name: string;
    follower: number;
}

// type EngineerBlogger = Engineer & Blogger;
interface EngineerBlogger extends Engineer, Blogger {}

const quill: EngineerBlogger = {
    name: 'quill',
    role: 'front-end',
    follower: 10000,
}

// 関数のオーバーロード
// ここでは、引数がstringの場合、string型を返すことを明示している
function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: string | number): string | number{
    // typeofで型チェックしてからであれば、toUpperCaseを使える
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return x;
}
const upperHi = toUpperCase('Hi');

type NomadWorker = Engineer | Blogger;
function describeProfile(nomadwoker: NomadWorker) {
    // in演算子でroleの存在を確認することで、NomadWorkerの型がEngineerであることを確定させている
    if ('role' in nomadwoker) {
        console.log(nomadwoker.role);
    }
}

class Dog {
    kind: 'dog' = 'dog';
    speak() {
        console.log('Bow');
    }
}
class Bird {
    kind: 'bird' = 'bird';
    speak() {
        console.log('tweet');
    }
    fly() {
        console.log('flutter');
    }
}
type Pet = Dog | Bird;
function havePet(pet: Pet) {
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

// ノンヌル アサーション
// 末尾に!を付ける事で、nullは入らないことを言い切る
// const input = document.getElementById('input')!;
// input.value;

// 型アサーション
// パターン1.先頭に<HTMLInputElement>を付ける
// const input = <HTMLInputElement>document.getElementById('input');
// パターン2.末尾にas HTMLInputElementを付ける
// const input = document.getElementById('input') as HTMLInputElement;
// input.value = 'input value';

// インデックスシグネチャ
interface Designer {
    name: string;
    // ⬇︎これを置くことで、interfaceで型付けをする変数側で任意のメンバーを追加することができる
    // ただし、追加するメンバーにおいて、型は全て「: 型」で指定した型に統一する必要がある
    [index: string]: string;
}
const designer: Designer = {
    name: 'taro',
    age: '1',
}
// インデックスシグネチャを使用した場合、存在しないメンバーにアクセスしようとしてもエラーが出ないので注意
console.log(designer.role);

interface DownloadedData {
    id: number;
    user?: {
        name?: {
            first: string;
            last: string;
        }
    }
}

const downloadedData: DownloadedData = {
    id: 1
}
// オプショナルチェイシング
// ?を付ける事で「存在すればその値を返す.存在しなければundefinedを返す」という挙動になる
console.log(downloadedData.user?.name?.first);

// Nullish Coalescing
// ?? を付ける事で「undefined or null以外ならその値を返す.それ以外では??の右辺の値を返す」という挙動になる
const userData = downloadedData.user ?? 'no-user';

// タプルを使えば、可変長引数にも型を付けられる
function advancedFn(...args: [number, string, boolean?, ...number[]]) {
    console.log(args);
}
advancedFn(1, 'hello', true, 3, 4);

const peter = {
    name: 'peter',
    age: 29,
};

// typeof を使う事で、peterオブジェクトの型のみを取得している.
type PeterType = typeof peter;
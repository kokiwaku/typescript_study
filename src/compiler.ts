function echo(message: string) {
    return message;
}

let noImplicitAny;
noImplicitAny = 'noImplicitAny';


let nullableMsg: string | null = null;
let undefinebleMsg: string | undefined = undefined;
let onlyNull: null | undefined = undefined;
let onlyUndefined: undefined | null = null;

echo.call(null, 'test');
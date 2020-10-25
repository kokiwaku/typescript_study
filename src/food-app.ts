interface Scoreable {
    readonly totalScore: number;
    render(): void;
}

interface Foodable {
    element: HTMLDivElement
    clickEventHandler(): void;
}

interface Foodsable {
    elements: NodeListOf<HTMLDivElement>;
    activeElements: HTMLDivElement[];
    activeElementsScore: number[];
}

class Score implements Scoreable {
    // シングルトンにする
    private static instance: Score;
    get totalScore() {
        const foods = Foods.getInstance();
        return foods.activeElementsScore.reduce((total, score) => total + score, 0);
    }
    render() {
        document.querySelector('.score__number')!.textContent = String(this.totalScore);
    }
    constructor() {}
    static getInstance() {
        if (!Score.instance) {
            Score.instance = new Score();
        }
        return Score.instance;
    }
}

// Food単体に対する振る舞いを記述
class Food implements Foodable { 
    // イベントを設定する
    constructor(public element: HTMLDivElement) {
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }
    clickEventHandler() {
        this.element.classList.toggle('food--active');
        const score  = Score.getInstance();
        score.render();
    }
}
// Food一覧を保持
class Foods implements Foodsable {
    // シングルトンにする
    private static instance: Foods;

    elements = document.querySelectorAll<HTMLDivElement>('.food');
    private _activeElements: HTMLDivElement[] = [];
    private _activeElementsScore: number[] = [];

    get activeElements() {
        this._activeElements = [];
        this.elements.forEach(element => {
            if (element.classList.contains('food--active')) {
                this._activeElements.push(element);
            }
        })
        return this._activeElements;
    }
    get activeElementsScore() {
        this._activeElementsScore = [];
        this._activeElements.forEach(element => {
            const foodScore = element.querySelector('.food__score');
            if (foodScore) {
                this._activeElementsScore.push(Number(foodScore.textContent));
            }
        })
        return this._activeElementsScore;
    }
    private constructor() {
        this.elements.forEach(element => {
            // Food単体に関する処理はFoodクラスに分離
            new Food(element);
        })
    }

    static getInstance() {
        if (!Foods.instance) {
            Foods.instance = new Foods();
        }
        return Foods.instance;
    }
}

// Food一覧を読み込む
const foods = Foods.getInstance();
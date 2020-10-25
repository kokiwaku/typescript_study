"use strict";
var Score = /** @class */ (function () {
    function Score() {
    }
    Object.defineProperty(Score.prototype, "totalScore", {
        get: function () {
            var foods = Foods.getInstance();
            return foods.activeElementsScore.reduce(function (total, score) { return total + score; }, 0);
        },
        enumerable: false,
        configurable: true
    });
    Score.prototype.render = function () {
        document.querySelector('.score__number').textContent = String(this.totalScore);
    };
    Score.getInstance = function () {
        if (!Score.instance) {
            Score.instance = new Score();
        }
        return Score.instance;
    };
    return Score;
}());
// Food単体に対する振る舞いを記述
var Food = /** @class */ (function () {
    // イベントを設定する
    function Food(element) {
        this.element = element;
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }
    Food.prototype.clickEventHandler = function () {
        this.element.classList.toggle('food--active');
        var score = Score.getInstance();
        score.render();
    };
    return Food;
}());
// Food一覧を保持
var Foods = /** @class */ (function () {
    function Foods() {
        this.elements = document.querySelectorAll('.food');
        this._activeElements = [];
        this._activeElementsScore = [];
        this.elements.forEach(function (element) {
            // Food単体に関する処理はFoodクラスに分離
            new Food(element);
        });
    }
    Object.defineProperty(Foods.prototype, "activeElements", {
        get: function () {
            var _this = this;
            this._activeElements = [];
            this.elements.forEach(function (element) {
                if (element.classList.contains('food--active')) {
                    _this._activeElements.push(element);
                }
            });
            return this._activeElements;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Foods.prototype, "activeElementsScore", {
        get: function () {
            var _this = this;
            this._activeElementsScore = [];
            this._activeElements.forEach(function (element) {
                var foodScore = element.querySelector('.food__score');
                if (foodScore) {
                    _this._activeElementsScore.push(Number(foodScore.textContent));
                }
            });
            return this._activeElementsScore;
        },
        enumerable: false,
        configurable: true
    });
    Foods.getInstance = function () {
        if (!Foods.instance) {
            Foods.instance = new Foods();
        }
        return Foods.instance;
    };
    return Foods;
}());
// Food一覧を読み込む
var foods = Foods.getInstance();
//# sourceMappingURL=food-app.js.map
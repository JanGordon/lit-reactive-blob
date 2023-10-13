"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactiveBlob = void 0;
var lit_1 = require("lit");
// import { customElement } from 'lit/decorators.js';
var short_unique_id_1 = require("short-unique-id");
var uid = new short_unique_id_1.default({
    dictionary: "alpha"
});
var ReactiveBlob = /** @class */ (function () {
    function ReactiveBlob(template) {
        this.id = uid.rnd();
        this.queue = [];
        this.currentHTMLResults = new Map([]);
        this.templateFunction = template;
    }
    ReactiveBlob.prototype.selectElement = function (currentDom) {
        this.currentDom = currentDom;
        console.log(this.currentDom);
        var v = this.currentDom.querySelector("#" + this.id);
        if (v) {
            this.self = v;
            for (var _i = 0, _a = this.queue; _i < _a.length; _i++) {
                var i = _a[_i];
                i();
            }
        }
        console.log("#" + this.id);
    };
    ReactiveBlob.prototype.getHTML = function () {
        return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n             <div id=\"", "\"></div>\n        "], ["\n             <div id=\"", "\"></div>\n        "])), this.id);
    };
    ReactiveBlob.prototype.append = function (data) {
        var _this = this;
        var id = uid.rnd();
        console.log(data);
        var d = this.templateFunction(data, id);
        var n = document.createElement("div");
        n.id = id;
        this.currentHTMLResults.set(id, d);
        console.log(this.self);
        if (this.self) {
            (0, lit_1.render)(d, n);
            this.self.appendChild(n);
        }
        else {
            this.queue.push(function () {
                (0, lit_1.render)(d, n);
                _this.self.appendChild(n);
            });
        }
    };
    ReactiveBlob.prototype.remove = function (id) {
        var _this = this;
        console.log("hey removing it");
        if (this.self) {
            var n = this.self.querySelector("#" + id);
            if (!n) {
                return false;
            }
            console.log("removing", n);
            this.self.removeChild(n);
        }
        else {
            this.queue.push(function () {
                var n = _this.self.querySelector("#" + id);
                _this.self.removeChild(n);
            });
        }
        return true;
    };
    ReactiveBlob.prototype.replace = function (id, data) {
        var _this = this;
        console.log("hey replacing it");
        var d = this.templateFunction(data, id);
        if (this.self) {
            var n = this.self.querySelector("#" + id);
            if (!n) {
                return false;
            }
            (0, lit_1.render)(d, n);
        }
        else {
            this.queue.push(function () {
                var n = _this.self.querySelector("#" + id);
                (0, lit_1.render)(d, n);
            });
        }
        return true;
    };
    return ReactiveBlob;
}());
exports.ReactiveBlob = ReactiveBlob;
var templateObject_1;
// type ShoppingListItem = {
//     name: string
//     date: string
// }
// @customElement('main-editor')
// export class MainEditor extends LitElement {
//     shoppingList: ReactiveBlob<ShoppingListItem>
//     constructor() {
//         super()
//         this.shoppingList = new ReactiveBlob<ShoppingListItem>((data: ShoppingListItem, id: string)=>{
//             return html`
//                 YOu need to to do ${data.name} by ${data.date}
//                 <button @click=${()=>this.shoppingList.replace(id, {name: "tricked you", date: "whenever"})}>remove</button>
//             `
//         })
//         this.shoppingList.append({
//             name: "eat",
//             date: "4th of July",
//         })
//         setTimeout(()=>{
//             this.shoppingList.append({
//                 name: "eat now",
//                 date: "4th of July",
//             })
//             console.log("added ne wuy")
//         },1000)
//     }
//     firstUpdated() {
//         super.connectedCallback()
//         console.log("selecting")
//         this.shoppingList.selectElement(this.shadowRoot)
//     }
//     render() {
//         return html`
//             Hello
//             ${this.shoppingList.getHTML()}
//         `
//     }
// }

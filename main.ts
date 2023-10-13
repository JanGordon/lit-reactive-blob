import {html, TemplateResult, render } from 'lit';
// import { customElement } from 'lit/decorators.js';
import ShortUniqueId from 'short-unique-id';

const uid = new ShortUniqueId({
    dictionary: "alpha"
})

export class ReactiveBlob<ReactiveData> {
    private id: string = uid.rnd()
    private currentDom: DocumentFragment | HTMLElement
    private self: HTMLDivElement
    private queue: (()=>void)[] = []
    private currentHTMLResults: Map<string, TemplateResult> = new Map<string, TemplateResult>([])
    templateFunction: (data: ReactiveData, id: string)=>TemplateResult
    constructor(template: (data: ReactiveData, id: string)=>TemplateResult) {
        this.templateFunction = template
    }

    selectElement(currentDom: DocumentFragment | HTMLElement) {
        this.currentDom = currentDom
        console.log(this.currentDom)
        let v = this.currentDom.querySelector("#"+this.id)
        if (v) {
            this.self = v as HTMLDivElement
            for (let i of this.queue) {
                i()
            }
        }
        console.log("#"+this.id)
    }


    getHTML(){
        return html`
             <div id="${this.id}"></div>
        `
    }

    append(data: ReactiveData) {
        var id = uid.rnd()
        console.log(data)
        var d = this.templateFunction(data, id)
        var n = document.createElement("div")
        n.id = id
        
        this.currentHTMLResults.set(id, d)
        console.log(this.self)
        if (this.self) {
            render(d, n)
            this.self.appendChild(n)

        } else {            
            this.queue.push(()=>{
                render(d, n)
                this.self.appendChild(n)

            })
        }
    }
    remove(id: string): boolean {
        console.log("hey removing it")
        if (this.self) {
            var n = this.self.querySelector("#"+id)
            if (!n) {
                return false
            }
            console.log("removing", n)
            this.self.removeChild(n)
        } else {            
            this.queue.push(()=>{
                var n = this.self.querySelector("#"+id)
                this.self.removeChild(n)
            })
        }
        return true
    }
    replace(id: string, data: ReactiveData) {
        console.log("hey replacing it")
        var d = this.templateFunction(data, id)
        if (this.self) {
            var n = this.self.querySelector("#"+id) as HTMLElement
            if (!n) {
                return false
            }
            render(d, n)
        } else {            
            this.queue.push(()=>{
                var n = this.self.querySelector("#"+id)  as HTMLElement
                render(d, n)
            })
        }
        return true
    }
}

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


  





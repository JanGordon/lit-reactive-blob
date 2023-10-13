import { TemplateResult } from 'lit';
export declare class ReactiveBlob<ReactiveData> {
    private id;
    private currentDom;
    private self;
    private queue;
    private currentHTMLResults;
    templateFunction: (data: ReactiveData, id: string) => TemplateResult;
    constructor(template: (data: ReactiveData, id: string) => TemplateResult);
    selectElement(currentDom: DocumentFragment | HTMLElement): void;
    getHTML(): TemplateResult<1>;
    append(data: ReactiveData): void;
    remove(id: string): boolean;
    replace(id: string, data: ReactiveData): boolean;
}

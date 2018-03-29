export default class PageElements {

    constructor() {
        this.window = window;
        this.document = document;
        this.head = this.document.head;
        this.body = this.document.body;
        this._ignoredTags = ['script', 'noscript'];
    }

    getRelevantDomElms() {
        let relevantDomElms = [];
        let allDomElms = this.body.getElementsByTagName('*');
        for (let i = 0; i < allDomElms.length; i++) {
            let de = allDomElms[i];
            if (!this._ignoredTags.includes(de.tagName.toLowerCase()) && this._isDomElmVisible(de)) {
                relevantDomElms.push(de);
            }
        }
        return relevantDomElms;
    }

    _isDomElmVisible(domElm) {
        while (
        domElm.nodeName.toLowerCase() !== 'body'
        && this.window.getComputedStyle(domElm).display.toLowerCase() !== 'none'
        && this.window.getComputedStyle(domElm).visibility.toLowerCase() !== 'hidden') {
            domElm = domElm.parentNode;
        }
        return domElm.nodeName.toLowerCase() === 'body';
    }
}
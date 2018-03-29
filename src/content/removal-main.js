import PageElements from './elements-metadata';


class ContentRemoval {

    constructor() {
        let that = this;
        // that._elementSelection =  new ElementSelection();
        that._pageElements = new PageElements();
        let domElements = that._pageElements.getRelevantDomElms();

        console.log(domElements);
    }
}

let contentRemoval = new ContentRemoval();
export default contentRemoval;

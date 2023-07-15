function newElement(tag, ...classes){
    let element = document.createElement(tag);
    classes.forEach(c => element.classList.add(c));

    return element;
}

export default {newElement};
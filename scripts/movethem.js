document.onscroll(changePositions);
document.onload(initializeList);

let elArr;

function initializeList() {
    let elArr = [].slice.call(document.querySelectorAll("#wavy-text"));
    console.log(elArr);
}

function changePositions() {

}
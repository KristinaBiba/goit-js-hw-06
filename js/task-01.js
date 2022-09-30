const categoriesQuantityEl = document.querySelector("#categories").children.length;

console.log(`Number of categories: ${categoriesQuantityEl}`);

const categoriesChildrenArr = document.querySelectorAll(".item");

for (let i = 0; i < categoriesChildrenArr.length; i++) {

    console.log(`Category: ${categoriesChildrenArr[i].querySelector('h2').textContent}`);
    console.log(`Elements: ${categoriesChildrenArr[i].querySelector('ul').children.length}`);
};


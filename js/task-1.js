const elements = {
    category: document.querySelectorAll(".item"),
}

console.log(`Number of categories: ${elements.category.length}`);

function showCategoryInfo() {
    return elements.category.forEach(e => {
        const categoryTitle = e.querySelector('.item-title');
        const sublistItems = e.querySelectorAll("ul li");
        console.log(`
            Category: ${categoryTitle.textContent}
            Elements: ${sublistItems.length}
            `)
    });
}

showCategoryInfo();
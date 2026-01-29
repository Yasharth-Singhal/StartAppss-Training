let products = [];

const box = document.querySelector(".product-container");
const search = document.querySelector(".search-input");
const category = document.querySelector(".category-filter");
const priceSort = document.querySelector(".sort-price");
const gridBtn = document.querySelector(".grid-btn");
const listBtn = document.querySelector(".list-btn");

// fetch products
fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {
    products = data;
    box.classList.add("grid");
    show(products);
  });

// show products
function show(items) {
  box.innerHTML = "";

  items.forEach(p => {
    box.innerHTML += `
      <div class="card">
        <img src="${p.image}" width="100">
        <h2>${p.title}</h2>
        <p>₹ ${p.price}</p>
        <p>${p.category}</p>
      </div>
    `;
  });
}

// filter + sort
function update() {
  let list = products;

  // search
  if (search.value) {
    list = list.filter(p =>
      p.title.toLowerCase().includes(search.value.toLowerCase())
    );
  }

  // category
  if (category.value !== "all") {
    list = list.filter(p => p.category === category.value);
  }

  // sort price
  if (priceSort.value === "lowtohigh") {
    list.sort((a, b) => a.price - b.price);
  }

  if (priceSort.value === "hightolow") {
    list.sort((a, b) => b.price - a.price);
  }

  show(list);
}

// events
search.oninput = update;
category.onchange = update;
priceSort.onchange = update;

// grid & list
gridBtn.onclick = () => {
  box.className = "container product-container grid";
};

listBtn.onclick = () => {
  box.className = "container product-container list";
};

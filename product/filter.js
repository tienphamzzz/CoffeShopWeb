let count = {
  cafe: document.querySelectorAll(".cafe").length,
  ts: document.querySelectorAll(".ts").length,
  coktail: document.querySelectorAll(".coktail").length,
  hoaqua: document.querySelectorAll(".hoaqua").length,
  all: document.querySelectorAll("article").length,
};

document.querySelectorAll(".menu-class-cafe button").forEach((button) => {
  let className = button.getAttribute("class");
  if (className == "all") {
    let countText = `<sup>${count[className]}</sup>`;
    button.innerHTML += countText;
  } else {
    let countText = `<sup>${count[className] - 1}</sup>`;
    button.innerHTML += countText;
  }
});

var btnList = document.querySelectorAll(".menu-class-cafe button");
var img1List = document.querySelectorAll("article img");
var chon = document.querySelector(".menu-class-cafe");

var arr = [];
img1List.forEach((item) => {
  arr.push({
    src: item.getAttribute("src"),
    type: item.parentNode.getAttribute("class"),
  });
});

btnList.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let type = e.currentTarget.getAttribute("class");
    let filterData;
    if (type === "all") {
      filterData = arr;
    } else {
      filterData = arr.filter((food) => food.type === type);
    }
    render(filterData);
  });
});

function render(list) {
  document.querySelectorAll("article").forEach((article) => {
    article.style.display = "none";
  });
  list.forEach((item) => {
    let articles = document.querySelectorAll(`.${item.type}`);
    articles.forEach((article) => {
      article.style.display = "inline-block";
    });
  });
}

// function activeButton(btnActive) {
//   btnList.forEach((btn) => {
//     btn.classList.remove("active");
//   });
//   btnActive.classList.add("active");
// }
// btnList.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     activeButton(e.currentTarget);
//     let type = e.currentTarget.getAttribute("type");

//     let filterData;
//     if (type === "all") {
//       filterData = arr;
//     } else {
//       filterData = arr.filter((food) => food.type === type);
//     }
//     render(filterData);
//   });
// });

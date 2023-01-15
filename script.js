// Вивести таблицю 10 × 10, заповнену числами від 1 до 100(таблиця створюється динамічно)

const divContainer = document.createElement("div");
divContainer.classList.add("container");
document.body.append(divContainer);

for (let i = 1; i < 101; i++) {
   const div = document.createElement("div");
    div.classList.add("box");
    divContainer.append(div);
    div.innerText = i;
};
let i = 1; //отсчёт для слайдов, начинается с 1
let p = 6; //отсчёт для слайдов, заканчивается 6

let to = []; // масив для URL сайтов
to[1] = "https://www.google.com/";
to[2] = "https://yandex.by/";
to[3] = "https://rabota.by/";
to[4] = "https://www.linkedin.com/";
to[5] = "https://www.youtube.com/";
to[6] = "https://training.by/";

let to1 = [],
  start,
  finish,
  result; //создаём массив для вывода названий сайтов в картинке(для каждой картинки, своё название сайта)
for (let j = 1; j < to.length; j++) {
  //прогоняем массив to через цикл
  start = to[j].indexOf(":", 0) + 3; //indexOf - метод ищет слева на право, букву и позицию этой буквы. Принимает 2 параметра, это что ищем, и откуда ищем
  finish = to[j].length - 1; //показывает всю длинну переменной s;
  result = to[j].substring(start, finish); //метод substring() отрезает от заданной позиции(например начинаем с google), и от позиции 0, начинает отрезать до заданной нам позоции(до google)
  to1[j] = result;
}

function changePic() {
  nextFunc();
  timerId = setTimeout(changePic, 2000);
}

function nextFunc() {
  //функция для слайдера next
  if (++i > p) i = 1; //ставим префикс на ++i
  change(); //удалили весь лишний код, и занесли функицю для next
}

function beforeFunc() {
  //функция для слайдера before
  if (--i < 1) i = 6; //ставим декремент на --i, для обратной прокрутки
  change(); //удалили весь лишний код, и занесли функицю для before
}

function change() {
  //создали отдельную функцию которая выводит для каждой картинки свой URL адрес сайтов
  hr.href = to[i];
  pic.src = `./images/img${i}b.jpg`;
  t1.innerHTML = `Заголовок слайда ${i}`;
  t2.innerHTML = `<a href="link${i}.html">Подзаголовок слайда ${i}</a>`;
  t3.innerHTML = `<a href="${to[i]}"> ${to1[i]}</a>`;
}

next.addEventListener("click", nextFunc); //вешаем прослушку для id="next"
before.addEventListener("click", beforeFunc); //вешаем прослушку для id="before"

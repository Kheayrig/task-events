import { doc } from 'prettier';

/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const btn = document.createElement('button');
    btn.innerHTML = 'Удали меня';
    document.body.append(btn);
    btn.addEventListener('click', function () {
        btn.remove();
    });
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const ul = document.createElement('ul');
    document.body.append(ul);

    for (let item of arr) {
        const li = document.createElement('li');
        li.innerHTML = item;
        li.addEventListener('mouseover', function () {
            li.setAttribute('title', li.innerHTML);
        });
        ul.append(li);
    }
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const a = document.createElement('a');
    a.setAttribute('href', 'https://tensor.ru/');
    a.innerHTML = 'tensor';
    document.body.append(a);

    a.addEventListener('click', function (event) {
        if (event.target.innerHTML === 'tensor') {
            event.target.innerHTML = `tensor ${event.target.getAttribute(
                'href',
            )}`;
        }
    });
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    const ul = document.createElement('ul');
    ul.innerHTML = '<li>Пункт</li>';
    document.body.append(ul);
    const btn = document.createElement('button');
    btn.innerHTML = 'Добавить пункт';
    document.body.append(btn);

    ul.addEventListener('click', function (event) {
        if (event.target && event.target.nodeName === 'LI') {
            event.target.innerHTML = event.target.innerHTML + '!';
        }
    });
    btn.addEventListener('click', function (event) {
        ul.innerHTML += '<li>Пункт</li>';
    });
}

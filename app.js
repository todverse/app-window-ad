let rand = (min, max) => { //Выбор рандномного объекта
  return Math.floor(Math.random() * (max - min + 1) + min)
};
let numObj = rand(0, arr_app.length-1);
let randObj = arr_app[numObj];


let title = document.getElementById("title"); //получение элементов документа
let detalPic = document.getElementById("detalPic");
let description = document.getElementById("description");
let availSub = document.getElementById('availSub');
let close = document.getElementsByClassName('closeBtn')[0];


title.innerHTML = randObj.title; //вывод информации из элемента массива на страницу
description.innerHTML = randObj.description;
detalPic.src = randObj.detalPic;
if (randObj.availSub) {
  availSub.innerHTML = "Доступно в подписке"
} else {
  availSub.innerHTML = "Бесплатно"
};
let urls = []; //копирование фотографий для слайдера из массива
for (let i = 0; i < randObj.images.length; i++) {
  urls[i] = {url: randObj.images[i]};
};

let count = 9; //таймер для кнопки "закрыть"
let interv = setInterval(() => {
  close.innerHTML = count--;
  if(count == -1) {
    close.innerHTML = "";
    close.style.cursor = 'pointer';
    close.onclick = () => {
      document.getElementById('app').style.display = 'none';
    };
    close.style.backgroundImage = 'url(https://avatars.mds.yandex.net/i?id=4cd96928f2fdeddb34dba1280ed34dde-4034027-images-thumbs&n=13)';
  };
},1000);
setTimeout(() => {clearInterval(interv)}, 10000);
/*for (let i = 10; i>=0; i--) {
  setTimeout(() => {
    close.innerHTML = i;
    console.log(i);
    if(i = 0) {
      close.innerHTML = "";
      console.log('done');
      close.style.backgroundImage = 'url(https://avatars.mds.yandex.net/i?id=4cd96928f2fdeddb34dba1280ed34dde-4034027-images-thumbs&n=13)';
    };
  },1000);
};*/

let sl = new Slider( //слайдер
  'slider',
  urls,
  {
    navs: true,
    pugs: true,
  }
  );
sl.start();
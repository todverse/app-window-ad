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
    close.addEventListener('mouseover', (e) => {
      close.style.backgroundImage = "url(\"data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg id='SVGRepo_bgCarrier' stroke-width='0'%3e%3c/g%3e%3cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3e%3c/g%3e%3cg id='SVGRepo_iconCarrier'%3e%3cpath d='M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z' stroke='%23292D32' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3e%3c/path%3e%3cg opacity='0.8'%3e%3cpath d='M9.16992 14.8299L14.8299 9.16992' stroke='%23292D32' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3e%3c/path%3e%3cpath d='M14.8299 14.8299L9.16992 9.16992' stroke='%23292D32' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e\")";
    });
    close.addEventListener('mouseout', (e) => {
      close.style.backgroundImage = "url(\"data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg id='SVGRepo_bgCarrier' stroke-width='0'%3e%3c/g%3e%3cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3e%3c/g%3e%3cg id='SVGRepo_iconCarrier'%3e%3cpath d='M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z' stroke='%23292D32' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3e%3c/path%3e%3cg opacity='0.4'%3e%3cpath d='M9.16992 14.8299L14.8299 9.16992' stroke='%23292D32' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3e%3c/path%3e%3cpath d='M14.8299 14.8299L9.16992 9.16992' stroke='%23292D32' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e\")";
    });
    close.style.backgroundImage = "url(\"data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg id='SVGRepo_bgCarrier' stroke-width='0'%3e%3c/g%3e%3cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3e%3c/g%3e%3cg id='SVGRepo_iconCarrier'%3e%3cpath d='M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z' stroke='%23292D32' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3e%3c/path%3e%3cg opacity='0.4'%3e%3cpath d='M9.16992 14.8299L14.8299 9.16992' stroke='%23292D32' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3e%3c/path%3e%3cpath d='M14.8299 14.8299L9.16992 9.16992' stroke='%23292D32' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e\")";
    close.style.backgroundSize = '55%';
    close.style.backgroundRepeat = 'no-repeat';
    close.style.backgroundPosition = 'left';
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
/*Task-01
Обязательное задание ( 3 балла )
Создайте массив tags с именами валидных тегов HTML5
Теперь создайте массив classes с именами классов
( число элементов в массиве classes должно быть не меньше, чем число элементов массива tags )
Создайте элемент style и вставьте его в head документа
Добавьте контент элемента style с описанием классов, имена которых находятся в массиве classes
Итерируйте массив tags, создавая соответствующие элементы и вставляя их на страницу, добавляя каждому элементу класс из массива classes*/
var tags = ['header','section','main','aside','article','footer'];
var className = ['header','section','main','aside','article','footer'];

var style = document.head.appendChild(
document.createElement('style')
);
style.textContent = `
 .header,.section,.main,.aside,.article,.footer{
  width: 100px;
  height: 100px;
  padding: 50px;
  background-color:#00ff00;
  color:black;
};
`
for(var tag of tags){
  var elm = document.createElement(tag);
  elm.innerText='some text'+ ' ' +tag;
   var classIndex = className.indexOf(tag);
  var classElem = className[classIndex];
  elm.classList.add(classElem);
  document.body.appendChild(elm);
  }
////////////////////////////////////////////////////////////////////////////////////////
/*Task-02
Дополнительно ( 4 балла )
Результат должен быть аналогичен тому, что получится в предыдущем упражнении
Однако исходный массив tags должен быть массивом объектов, каждый из которых содержит не только имя тега элемента, но и его атрибуты, а так же хотя бы один обработчик события
Таким образом, массив classes нам уже не нужен, но кроме стилизации элементов нужно еще добавить их контент, используя как атрибуты тегов, так и свойства элементов DOM*/
let someFunc = (classNameOfEl) => {
console.log(`Clicked on ${classNameOfEl}`)
}

var tags = [
    {
name:'header',
className:'header',
width: '150px',
innerText:'Hellow header!',
click: someFunc('header') 
 function(event){
 console.log('clicked on header')
}
    },
    {
name:'section',
className: 'section',
width: '150px',
innerText:'Hellow section!',
click: function(event){
console.log('clicked on section')
}
    },
    {
name:'main',
className: 'main',
width: '150px',
innerText:'Hellow main!',
click: function(event){
console.log('clicked on main')

}
    },
    {
name:'aside',
className: 'aside',
width: '150px',
innerText:'Hellow aside!',
click: function(event){
console.log('clicked on aside')
}
    },
    {
name:'article',
className: 'article',
width: '150px',
innerText:'Hellow article!',
click: function(event){
console.log('clicked on article')
}
    },
    {
name:'footer',
className: 'footer',
width: '150px',
innerText:'Hellow footer!',
click: function(event){
console.log('clicked on footer')
}
    },
]

var style = document.head.appendChild(
document.createElement('style')
)
style.textContent = `
 .header,.section,.main,.aside,.article,.footer{
  width: 100px;
  height: 100px;
  padding: 50px;
  background-color:#00ff00;
  color:black;
}
`
for(var tag of tags){
  var elm = document.createElement(tag.name);
  elm.innerText=tag.innerText;
  var classElem = tag.className;
  elm.classList.add(classElem);
  elm.setAttribute('width',tag.width);
  elm.onclick = tag.click;
  document.body.appendChild(elm);
  }
//////////////////////////////////////////////////////////////////////////////
/*Task-03
Дополнительно ( 5 баллов )
Напилить код, который выбирает все элементы-потомки body ( :warning: кроме элементов script ) и добавляет им класc:

.redBack {
    background-color: red!important;
}
Альтернативный вариант - выбрать все заранее заданные элементы:

var tags = [ "header", "footer", "main", "div", "p" ]
Запустить код в консоли любой страницы

Подсказка: используйте методы объекта classList*/
var tags = ['header','section','main','aside','article','footer']
var className = ['header','section','main','aside','article','footer']

for(var tag of tags){
  var elm = document.createElement(tag);
  elm.innerText='some text'+ ' ' +tag;
   var classIndex = className.indexOf(tag);
  var classElem = className[classIndex];
  elm.classList.add(classElem);
  document.body.appendChild(elm);
  }

var style = document.head.appendChild(
document.createElement('style')
)

style.textContent = `
.header,.section,.main,.aside,.article,.footer{
  width: 100px;
  height: 100px;
  padding: 50px;
  background-color:#00ff00;
  color:black;
}
 .redBack {
    background-color: red!important;
}
`
 for(var elem of document.body.children){
  if(elem.tagName !== 'SCRIPT') {
  elem.classList.add('redBack')
} 

 }
//////////////////////////////////////////////////////////////////////
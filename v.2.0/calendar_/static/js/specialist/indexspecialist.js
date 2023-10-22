

function SpecialistController(base_selector){
    this.base_selector = base_selector;// this.base_selector - создали атрибут для дальнейшего использования, это поле которое будет хранить селектор и отдавать его тем функциям который им будет нужен, селектор - это последовательность символов позволяющая отличить один элемент от другого
    this.api = new API();//создание обьекта по существующей функции в другом файле. Импорт происходит через хтмл файл. Смотри файл api.js
    this.specialistId = null;// обьявление переменной, this нужно для обозначентя области видимости этой переменной, она будет работать на уровне обьекта.
    this.token = null;// создали переменную для хранения токена специалиста. При отправке запроса мы должны передавать токен специалиста для его авторизации
    //почитать local storage js. https://learn.javascript.ru/localstorage
    this.start = function(){
        
    } 
    this.login = function(){

    }
    this.loadAuthData = function(){
        let specialist_id = localStorage.getItem(specialistIdKeyStorage);//получение ай ди специалиста от сервера
        let token = localStorage.getItem(tokenKeyStorage);//получение токена от сервера
//дз - написать код проверки есть ли в браузере психолога токен и айди специалиста.

            if(specialist_id==null){
                divError.innerHTML="Введенный логин некорректен";
            }
            else
            {

            }
//если нет, то запросить авторизацию


// выгрузить из local storage id специалиста и его токен
//см пример на https://learn.javascript.ru/localstorage
    }
}
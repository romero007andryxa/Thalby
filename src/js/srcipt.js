$('[data-modal=subscribe]').on('click', function(){
    $('.overlay, #thanks').fadeIn('slow');
});
$('.modal__close').on('click', function(){
    $('.overlay, #thanks').fadeOut('slow');
});

$('input[name=phone]').mask("+7 (999) 999-99-99");

$('form').submit(function(e){
    e.preventDefault(); /* отменяет стандартное поведение браузера(отключаем перезагрузку страницы) */

    if (!$(this).valid()) { /* если наша форма не прошла валидацию при помощи нашего плагина, то в таком случае мы функцию прекратим */
        return;
    }

    $.ajax({ /* отправляем данные на сервер */
        type: "POST", /* указываем хотим ли получить данные с сервера или отправить */
        url: "mailer/smart.php",
        data: $(this).serialize() /* отправляем данные на сервер */ /* .serialize - подготавливаем данные перед отправкой на сервер */
    }).done(function(){ /* когда мы выполним эту операцию, то мы выполним еще какое-то действие */ 
        $(this).find("input").val(""); /* после отправки формы мы очистим все инпуты */
        $('form').trigger('reset'); /* все формы должны очиститься после отправки */
    });
    return false;
});
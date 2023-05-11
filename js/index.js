window.onload = function () {
    /*_________________________*/
    /*для работы гамбургер меню*/
    let btn_gum_menu = document.getElementById('gum_menu');
    let btn_gum_menu_close = document.getElementById('gum_menu_close');
    let gum_menu = document.getElementById('gumburger_menu');
    let under_gum_menu = document.getElementById('under_gumburger_menu');

    btn_gum_menu.addEventListener('mouseup', function () {
        btn_gum_menu.style.opacity = '0';
        under_gum_menu.style.right = '0%';
        setTimeout(function () {
            gum_menu.style.right = '0px';
        }, 100);
    });

    btn_gum_menu_close.addEventListener('mouseup', function () {
        gum_menu.style.right = '-400px';
        under_gum_menu.style.right = '-100%';
        setTimeout(function () {
            btn_gum_menu.style.opacity = '1';
        }, 100);
    });

    under_gum_menu.addEventListener('mouseup', function () {
        gum_menu.style.right = '-400px';
        under_gum_menu.style.right = '-100%';
        setTimeout(function () {
            btn_gum_menu.style.opacity = '1';
        }, 100);
    });

    /*_____________________*/
    /*для работы расписания*/
    /*_____________________*/

    /*занятия*/
    let lesson_1 = document.getElementById('lesson_1').innerHTML;
    let lesson_2 = document.getElementById('lesson_2').innerHTML;
    let lesson_3 = document.getElementById('lesson_3').innerHTML;
    let lesson_4 = document.getElementById('lesson_4').innerHTML;
    let lesson_5 = document.getElementById('lesson_5').innerHTML;
    /*фио*/
    let snp_1 = document.getElementById('snp_1').innerHTML;
    let snp_2 = document.getElementById('snp_2').innerHTML;
    let snp_3 = document.getElementById('snp_3').innerHTML;
    let snp_4 = document.getElementById('snp_4').innerHTML;
    let snp_5 = document.getElementById('snp_5').innerHTML;
    /*ссылки*/
    let a_href_1 = document.getElementById('a_href_1').innerHTML;
    let a_href_2 = document.getElementById('a_href_2').innerHTML;
    let a_href_3 = document.getElementById('a_href_3').innerHTML;
    let a_href_4 = document.getElementById('a_href_4').innerHTML;
    let a_href_5 = document.getElementById('a_href_5').innerHTML;

    let lesson = ['<i>(пусто)</i>',
                  'Английский язык',
                  'Физическая культура',
                  'Общие компетенции профессионала',
                  'Основы алгоритмизации и программирования',
                  'Управление проектами',
                  'Основы исследовательской деятельности',
                  'Безопасность жизнедеятельности',
                  'Математические и логические основы электронно-вычислительной техники',
                  'Цифровая схемотехника',
                  'Проектирование цифровых устройств',
                  'Учебная практика'];
    let snp = ['<i>(пусто)</i>',
               'Чебоксарова Светлана Алексеевна',
               'Толмачёва Светлана Николаевна',
               'Ткачёва Ольга Борисовна',
               'Черникова Алёна Олеговна',
               'Бондаренко Дарья Андреевна',
               'Сивирина Елена Васильевна',
               'Никишин Иван Владимирович',
               'Куракова Кристина Сергеевна',
               'Ахмерова Анна Владимировна',
               'Черникова Алёна Олеговна',
               'Черникова Алёна Олеговна'];
    let a_href = ['<i>(пусто)</i>',
               'tasks.html#1',
               'tasks.html#2',
               'tasks.html#3',
               'tasks.html#4',
               'tasks.html#5',
               'tasks.html#6',
               'tasks.html#7',
               'tasks.html#8',
               'tasks.html#9',
               'tasks.html#10',
               '#'];

    for (var i = 0; i < 5; i++) {
        switch (window['lesson_' + [i + 1]].innerHTML) {
            case '0':
                window['lesson_' + [i + 1]].innerHTML = lesson[0];
                window['snp_' + [i + 1]].innerHTML = snp[0];
                window['a_href_' + [i + 1]].innerHTML = a_href[0];
                break;
            case '1':
                window['lesson_' + [i + 1]].innerHTML = lesson[1];
                window['snp_' + [i + 1]].innerHTML = snp[1];
                window['a_href_' + [i + 1]].innerHTML = '<a href=' + a_href[1] + '>Перейти к заданию</a>';
                break;
            case '2':
                window['lesson_' + [i + 1]].innerHTML = lesson[2];
                window['snp_' + [i + 1]].innerHTML = snp[2];
                window['a_href_' + [i + 1]].innerHTML = '<a href=' + a_href[2] + '>Перейти к заданию</a>';
                break;
            case '3':
                window['lesson_' + [i + 1]].innerHTML = lesson[3];
                window['snp_' + [i + 1]].innerHTML = snp[3];
                window['a_href_' + [i + 1]].innerHTML = '<a href=' + a_href[3] + '>Перейти к заданию</a>';
                break;
            case '4':
                window['lesson_' + [i + 1]].innerHTML = lesson[4];
                window['snp_' + [i + 1]].innerHTML = snp[4];
                window['a_href_' + [i + 1]].innerHTML = '<a href=' + a_href[4] + '>Перейти к заданию</a>';
                break;
            case '5':
                window['lesson_' + [i + 1]].innerHTML = lesson[5];
                window['snp_' + [i + 1]].innerHTML = snp[5];
                window['a_href_' + [i + 1]].innerHTML = '<a href=' + a_href[5] + '>Перейти к заданию</a>';
                break;
            case '6':
                window['lesson_' + [i + 1]].innerHTML = lesson[6];
                window['snp_' + [i + 1]].innerHTML = snp[6];
                window['a_href_' + [i + 1]].innerHTML = '<a href=' + a_href[6] + '>Перейти к заданию</a>';
                break;
            case '7':
                window['lesson_' + [i + 1]].innerHTML = lesson[7];
                window['snp_' + [i + 1]].innerHTML = snp[7];
                window['a_href_' + [i + 1]].innerHTML = '<a href=' + a_href[7] + '>Перейти к заданию</a>';
                break;
            case '8':
                window['lesson_' + [i + 1]].innerHTML = lesson[8];
                window['snp_' + [i + 1]].innerHTML = snp[8];
                window['a_href_' + [i + 1]].innerHTML = '<a href=' + a_href[8] + '>Перейти к заданию</a>';
                break;
            case '9':
                window['lesson_' + [i + 1]].innerHTML = lesson[9];
                window['snp_' + [i + 1]].innerHTML = snp[9];
                window['a_href_' + [i + 1]].innerHTML = '<a href=' + a_href[9] + '>Перейти к заданию</a>';
                break;
            case '10':
                window['lesson_' + [i + 1]].innerHTML = lesson[10];
                window['snp_' + [i + 1]].innerHTML = snp[10];
                window['a_href_' + [i + 1]].innerHTML = '<a href=' + a_href[10] + '>Перейти к заданию</a>';
                break;
            case '11':
                window['lesson_' + [i + 1]].innerHTML = lesson[11];
                window['snp_' + [i + 1]].innerHTML = snp[11];
                window['a_href_' + [i + 1]].innerHTML = '<a href=' + a_href[11] + '>Перейти к заданию</a>';
                break;
             case '12':
                window['lesson_' + [i + 1]].innerHTML = lesson[12];
                window['snp_' + [i + 1]].innerHTML = snp[12];
                window['a_href_' + [i + 1]].innerHTML = '<a href=' + a_href[12] + '>Перейти к заданию</a>';
                break; 
            default:
                window['lesson_' + [i + 1]].innerHTML = lesson[0];
                window['snp_' + [i + 1]].innerHTML = snp[0];
                window['a_href_' + [i + 1]].innerHTML = a_href[0];
                /*console.log('Непредвиденная ошибка в расписании на этапе, при котором i = ' + i);*/
                break;
        }
    }
}

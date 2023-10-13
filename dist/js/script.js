window.addEventListener('DOMContentLoaded', function () {

    // menu

    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const closeMenu = document.querySelector('.menu__close');
    const menuLink = document.querySelectorAll('.menu__link');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    /*  closeMenu.addEventListener('click', () => {
         menu.classList.remove('active');
     }); */

    menuLink.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });

    // scroll
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };

    // buttons 

    const btns = document.querySelectorAll('.promo__link');

    btns[0].addEventListener('click', () => {
        if (!btns[0].classList.contains('btn_active')) {
            btns[0].classList.add('btn_active');
            btns[1].classList.remove('btn_active');
        }
    });

    btns[1].addEventListener('click', () => {
        if (!btns[1].classList.contains('btn_active')) {
            btns[1].classList.add('btn_active');
            btns[0].classList.remove('btn_active');
        }
    });

    // skills


    const counters = document.querySelectorAll('.skills__ratings-counter');
    const lines = document.querySelectorAll('.skills__ratings-line span');

    counters.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
    });

    // resume


    class resumeCard {
        constructor(src, alt, title, descr, location, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.location = location;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            console.log('resumeCard constructor called');
        }

        render() {
            const element = document.createElement('li');
            console.log('Rendering resume card');

            element.innerHTML = `
                <div class="resume__item">
                    <div class="resume__item-head">
                        <figure class="resume__item-icon"><img src="${this.src}" alt="${this.alt}"></figure>
                        <h4 class="title title_fz14 resume__item-title">${this.title}</h4>
                        <p class="resume__item-location">${this.location}</p>
                    </div>
                    <div class="resume__item-body">
                        <p>${this.descr}</p>
                    </div>
                </div>
            `;

            this.parent.append(element);
        }
    }

    new resumeCard(
        "icons/experience/designer.svg",
        "work",
        "Интернет-маркетолог",
        'Радиостанция "Серебряный дождь", региональное отделение. Занимался ведением сайта и социальных сетей, разработкой контента, настройкой рекламы',
        'Радиостанция "Серебряный дождь" | Красноярск (2018-2019)',
        ".resume__column_second .resume__list"
    ).render();
    new resumeCard(
        "icons/experience/designer.svg",
        "work",
        "Интернет-маркетолог",
        "Компания занималась комплексными решениями по пожарной безопасности. Первая часть проекта - это некомерческая организация проводящая обучение поведению при ЧС. Вторая часть это проекта - это разработка планов пожарной эвакуации, помощь прохождение пожарного надзора и продажа пожарного оборудования. В мои обязанности в ходило администрирование сайтов, продвижение их, создание контента и настройка рекламы.",
        'Технопарк "Лабиринт безопасности" Альтернатива | Красноярск (2019 - 2020)',
        ".resume__column_second .resume__list"
    ).render();
    new resumeCard(
        "icons/experience/designer.svg",
        "work",
        "Интернет-маркетолог",
        "Фонд занимается созданием комплексных решений для онкологических пациентов и их близких. Основная часть проектов фонда сосредоточена в интернет-пространстве. В мои обязанности входил контроль, администрирование и продвижение этих ресурсов.",
        'Фонд "Не напрасно" | Санкт-Петербург (2020-2022)',
        ".resume__column_second .resume__list"
    ).render();
    new resumeCard(
        "icons/experience/designer.svg",
        "work",
        "Разработка / Проект-менеджер / Интернет-маркетолог",
        'Проект занимается сбором вещей, часть которых идет в переработку, а часть в благотворительность. TOLKOVO - это проект Фонда "Лепта". <br> В мои задачи входит:<br> - Разработка и согласование нового функционала; <br> - Постановка задач разработчикам;<br> - Внесение оперативных правок в верстку сайта;<br> - Тестирование сайта;<br> - Наполнение контентом; <br>',
        'Сервис "TOLKOVO" | Санкт-Петербург (2022 - по настоящее время)',
        ".resume__column_second .resume__list"
    ).render();
    new resumeCard(
        "icons/experience/designer.svg",
        "work",
        "Разработка / Контент-менеджер",
        'Санкт-Петербургский Театр Балета им. Леонида Якобсона. На проекте я занимаюсь контролем работоспособности сайта, разработкой и наполнением контентом',
        'Театр Балета им. Леонида Якобсона | Санкт-Петербург (2021 - по настоящее время)',
        ".resume__column_second .resume__list"
    ).render();

    console.log('Before resume() is called');
    console.log('After resume() is called');
});



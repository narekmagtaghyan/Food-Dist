window.addEventListener("DOMContentLoaded", () => {
    /* === ВКЛАДКИ === */
    // Получает элементы со страницы, картинки и кнопки
    const tabContents = document.querySelectorAll(".tabcontent"),
        tabs = document.querySelectorAll(".tabheader__item");

    // Скрывает все вкладки
    function hideTabContent() {
        tabContents.forEach((tabContent) => {
            tabContent.classList.add("hide");
            tabContent.classList.remove("show", "fade");
        });

        tabs.forEach((tab) => {
            tab.classList.remove("tabheader__item_active");
        });
    }

    // Показывает определенную вкладку
    function showTabContent(i = 0) {
        tabContents[i].classList.add("show", "fade");
        tabContents[i].classList.remove("hide");
        tabs[i].classList.add("tabheader__item_active");
    }

    tabs.forEach((tab, i) => {
        tab.addEventListener("click", () => {
            hideTabContent();
            showTabContent(i);
        });
    });

    hideTabContent();
    showTabContent();

    /* === ТАЙМЕР === */
    // Начальная точка для таймера
    const deadline = "2021-04-25";

    // Функиция определяет разницу меджду deadline-ом и с нашим текущим временем
    function getTimeRemainging(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            "total": t,
            "days": days,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        };
    }

    /* Проверяет данные таймера. Если какая-та цифра будет меньше чем 10, 
    то к ней будет прибавляться ноль */
    function getZero(num) {
        if (num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    // Установливает таймер на страницу
    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector("#hours"),
            minutes = timer.querySelector("#minutes"),
            seconds = timer.querySelector("#seconds"),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        // Функция для обновления таймера
        function updateClock() {
            const t = getTimeRemainging(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock(".timer", deadline);
});

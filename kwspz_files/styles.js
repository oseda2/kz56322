/* Naprawa styli framework 3.0 */

/* Dodanie styli dla pojedyńczego selektora */
const setStyleForSelector = (selector, device, styles) => {
    if (device === 'mobile' && window.innerWidth > 769) {
        return;
    }
    try {
        const domItem = document.querySelector(selector);
        styles.forEach(style => {
            domItem.style[style.name] = style.value;
        });
    } catch {

    }
}

/* Dodanie styli dla wielu selektorów */
const setStyleForSelectors = (selectors, device, styles) => {
    if (selectors == null || selectors == undefined) {
        return;
    }
    selectors.forEach(selector => setStyleForSelector(selector, device, styles));
}

setStyleForSelectors([
    '#ComboBox_37',
    '#ComboBox_37_inne_1',
    '#ComboBox_37_MIASTO_Filtr',
    '#ComboBox_40',
    '#ComboBox_42'
], 'mobile', [
    { name: 'width', value: 'auto' },
]);

setStyleForSelectors([
    '#ClearButton',
    "#CancelButton",
    "#SaveAndCancelButton",
    '#ComboBox_7_WOJEWODZTWO_Filtr',
    '#ComboBox_16_WOJEWODZTWO_Filtr',
    '#ComboBox_20_WOJEWODZTWO_Filtr'
], 'mobile', [
    { name: 'width', value: '100%' },
    { name: 'height', value: '40px' },
]);
setStyleForSelectors([
    '#pcKierunek_CC',
    'mobile', [
        {
            name: 'max-height', value: '306p;'
        },
        { name: 'overflow-y', value: 'scroll'}    ]])




try {
    $('body').click(function (event) {
        // Check if the target of the click event is not the button with the ID "trybyListy"
        if (event.target.id !== 'trybyListy') {
            setTimeout(function () {
                $(".dropdown-przedmioty").removeClass("show-ul");
            }, 100); // 1000 milliseconds = 1 second
        }
    });
} catch {

}

try {
    $(".dropdown-przedmioty").click(function () {
        /*document.querySelector('#dropdown-przedmioty').classList.add(`show-ul`);*/
        $(".dropdown-przedmioty").toggleClass("show-ul");
       /* $(".dropdown-przedmioty2").removeClass("show-ul");*/
    });
} catch {

}
try {
    $(".dropdown-przedmioty3").click(function () {
        /*document.querySelector('#dropdown-przedmioty').classList.add(`show-ul`);*/
        $(".dropdown-przedmioty3").toggleClass("show-ul");
    });
} catch {

} try {
    $(".dropdown-przedmioty4").click(function () {
        /*document.querySelector('#dropdown-przedmioty').classList.add(`show-ul`);*/
        $(".dropdown-przedmioty4").toggleClass("show-ul");
    });
} catch {

}
try {
    $(".dropdown-przedmioty2").click(function () {
        /*document.querySelector('#dropdown-przedmioty').classList.add(`show-ul`);*/
        $(".dropdown-przedmioty2").toggleClass("show-ul");
    });
} catch  {

}

try {
    $('body').click(function (event) {
        // Check if the target of the click event is not the button with the ID "trybyListy"
        if (event.target.id !== 'trybyListy2') {
            setTimeout(function () {
                $(".dropdown-przedmioty2").removeClass("show-ul");
            }, 100); // 1000 milliseconds = 1 second
        }
    });
} catch {

}
try {
    $('body').click(function (event) {
        // Check if the target of the click event is not the button with the ID "trybyListy"
        if (event.target.id !== 'WydrukiDropdown') {
            setTimeout(function () {
                $(".dropdown-przedmioty3").removeClass("show-ul");
            }, 100); // 1000 milliseconds = 1 second
        }
    });
} catch {

}
try {
    $('body').click(function (event) {
        // Check if the target of the click event is not the button with the ID "trybyListy"
        if (event.target.id !== 'EpuapDropdown') {
            setTimeout(function () {
                $(".dropdown-przedmioty4").removeClass("show-ul");
            }, 100); // 1000 milliseconds = 1 second
        }
    });
} catch {

}

const font0 = document.querySelector("#font0");
const font1 = document.querySelector("#font1");
const font2 = document.querySelector("#font2");

/*font1.classList.add('aktywny-font');*/

//font0.addEventListener('click', () => {
//    font0.classList.add('aktywny-font');
//    $("#font0").removeClass('bg-transparent');
//    try {
//        font1.classList.remove('aktywny-font');
//        $("#font1").addClass('bg-transparent');
//        $("#font2").addClass('bg-transparent');
//    } catch (e) {

//    }
//    try {
//        font2.classList.remove('aktywny-font');
//    } catch (e) {

//    }
//});

//font1.addEventListener('click', () => {
//    font1.classList.add('aktywny-font');
//    $("#font1").removeClass('bg-transparent');
//    try {
//        font0.classList.remove('aktywny-font');
//        $("#font0").addClass('bg-transparent');
//        $("#font2").addClass('bg-transparent');
//    } catch (e) {

//    }
//    try {
//        font2.classList.remove('aktywny-font');
//    } catch (e) {

//    }
//});

//font2.addEventListener('click', () => {
//    font2.classList.add('aktywny-font');
//    $("#font2").removeClass('bg-transparent');
//    try {
//        font1.classList.remove('aktywny-font');
//        $("#font1").addClass('bg-transparent');
//        $("#font0").addClass('bg-transparent');
//    } catch (e) {

//    }
//    try {
//        font0.classList.remove('aktywny-font');
//    } catch (e) {

//    }
//});
let serviceButtonText = 'смена фокуса на услугах в разделе service:';
let serviceButtonScore = 50;
let pricesAccorddionText = 'Accordion в секции prices:';
let pricesAccorddionScore = 50;
let contactSelectText = 'В разделе contacts реализован select:';
let contactSelectScore = 25;

let summBals = serviceButtonScore + pricesAccorddionScore + contactSelectScore;

console.log(`Вывод самооценки\n\n${serviceButtonText} ${serviceButtonScore}\n${pricesAccorddionText} ${pricesAccorddionScore}\n${contactSelectText} ${contactSelectScore}`);
console.log(`Суммарное колличество баллов: ${summBals};`);

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".burger__menu").addEventListener("click", function (doIt) {
        doIt.stopPropagation();
        document.querySelector(".header").classList.toggle("open");
    });

    document.addEventListener("click", function () {
        if (document.querySelector(".header").classList.contains("open")) {
            document.querySelector(".header").classList.toggle("open");
        }
    });
    const serviceItem = document.querySelectorAll(".service_item");
    const blurGarden = document.querySelectorAll(".garden");
    const blurPlant = document.querySelectorAll(".plant");
    const blurLawn = document.querySelectorAll(".lawn");
    const gardenB = document.querySelector(".gardens-button");
    const lawnB = document.querySelector(".lawn-button");
    const plantB = document.querySelector(".plant-button");

    gardenB.addEventListener("click", function () {
        if (!(gardenB.classList.contains("activ_button")) && (lawnB.classList.contains("activ_button")) && (plantB.classList.contains("activ_button"))) {
            gardenB.classList.add("activ_button");
            lawnB.classList.remove("activ_button");
            plantB.classList.remove("activ_button");
            blurGarden.forEach(blurIt => {
                blurIt.classList.remove("blur_item");
            });
            blurPlant.forEach(blurIt => {
                blurIt.classList.add("blur_item");
            });
            blurLawn.forEach(blurIt => {
                blurIt.classList.add("blur_item");
            });
        } else if (!(gardenB.classList.contains("activ_button")) && (lawnB.classList.contains("activ_button")) && !(plantB.classList.contains("activ_button"))) {
            gardenB.classList.add("activ_button");
            blurGarden.forEach(blurIt => {
                blurIt.classList.remove("blur_item");
            });
            blurLawn.forEach(blurIt => {
                blurIt.classList.remove("blur_item");
            });
            blurPlant.forEach(blurIt => {
                blurIt.classList.add("blur_item");
            });
        } else if ((gardenB.classList.contains("activ_button")) && (lawnB.classList.contains("activ_button")) && !(plantB.classList.contains("activ_button"))) {
            gardenB.classList.remove("activ_button");
            blurGarden.forEach(blurIt => {
                blurIt.classList.add("blur_item");
            });
            blurLawn.forEach(blurIt => {
                blurIt.classList.remove("blur_item");
            });
            blurPlant.forEach(blurIt => {
                blurIt.classList.add("blur_item");
            });
        } else if ((gardenB.classList.contains("activ_button")) && !(lawnB.classList.contains("activ_button")) && !(plantB.classList.contains("activ_button"))) {
            gardenB.classList.remove("activ_button");
            blurGarden.forEach(blurIt => {
                blurIt.classList.remove("blur_item");
            });
            blurLawn.forEach(blurIt => {
                blurIt.classList.remove("blur_item");
            });
            blurPlant.forEach(blurIt => {
                blurIt.classList.remove("blur_item");
            });
        } else if (!(gardenB.classList.contains("activ_button")) && !(lawnB.classList.contains("activ_button")) && (plantB.classList.contains("activ_button"))) {
            gardenB.classList.add("activ_button");
            blurGarden.forEach(blurIt => {
                blurIt.classList.remove("blur_item");
            });
            blurLawn.forEach(blurIt => {
                blurIt.classList.add("blur_item");
            });
            blurPlant.forEach(blurIt => {
                blurIt.classList.remove("blur_item");
            });
        } else if ((gardenB.classList.contains("activ_button")) && !(lawnB.classList.contains("activ_button")) && (plantB.classList.contains("activ_button"))) {
            gardenB.classList.remove("activ_button");
            blurGarden.forEach(blurIt => {
                blurIt.classList.add("blur_item");
            });
            blurLawn.forEach(blurIt => {
                blurIt.classList.add("blur_item");
            });
            blurPlant.forEach(blurIt => {
                blurIt.classList.remove("blur_item");
            });
        } else {
            gardenB.classList.add("activ_button");
            blurGarden.forEach(blurIt => {
                blurIt.classList.remove("blur_item");
            });
            blurPlant.forEach(blurIt => {
                blurIt.classList.add("blur_item");
            });
            blurLawn.forEach(blurIt => {
                blurIt.classList.add("blur_item");
            });
        }
    });

    lawnB.addEventListener("click", function () {
        if ((gardenB.classList.contains("activ_button")) && !(lawnB.classList.contains("activ_button")) && (plantB.classList.contains("activ_button"))) {
            lawnB.classList.add("activ_button");
            gardenB.classList.remove("activ_button");
            plantB.classList.remove("activ_button")
            blurGarden.forEach(blurIt => {
                blurIt.classList.add("blur_item");
            });
            blurLawn.forEach(blurIt => {
                blurIt.classList.remove("blur_item");
            });
            blurPlant.forEach(blurIt => {
                blurIt.classList.add("blur_item");
            });
        } else if (!(gardenB.classList.contains("activ_button")) && !(lawnB.classList.contains("activ_button")) && (plantB.classList.contains("activ_button"))) {
            lawnB.classList.add("activ_button");
            blurGarden.forEach(blurIt => {
                blurIt.classList.add("blur_item");
            });
            blurLawn.forEach(blurIt => {
                blurIt.classList.remove("blur_item");
            });
            blurPlant.forEach(blurIt => {
                blurIt.classList.remove("blur_item");
            });
        } else if ((gardenB.classList.contains("activ_button")) && !(lawnB.classList.contains("activ_button")) && !(plantB.classList.contains("activ_button"))) {
            lawnB.classList.add("activ_button");
            blurGarden.forEach(blurIt => {
                blurIt.classList.remove("blur_item");
            });
            blurLawn.forEach(blurIt => {
                blurIt.classList.remove("blur_item");
            });
            blurPlant.forEach(blurIt => {
                blurIt.classList.add("blur_item");
            });
        } else if (!(gardenB.classList.contains("activ_button")) && (lawnB.classList.contains("activ_button")) && !(plantB.classList.contains("activ_button"))) {
            lawnB.classList.remove("activ_button");
            blurGarden.forEach(blurIt => {
                blurIt.classList.remove("blur_item");
            });
            blurLawn.forEach(blurIt => {
                blurIt.classList.remove("blur_item");
            });
            blurPlant.forEach(blurIt => {
                blurIt.classList.remove("blur_item");
            });
        } else if ((gardenB.classList.contains("activ_button")) && (lawnB.classList.contains("activ_button")) && !(plantB.classList.contains("activ_button"))) {
            lawnB.classList.remove("activ_button");
            blurGarden.forEach(blurIt => {
                blurIt.classList.remove("blur_item");
            });
            blurLawn.forEach(blurIt => {
                blurIt.classList.add("blur_item");
            });
            blurPlant.forEach(blurIt => {
                blurIt.classList.add("blur_item");
            });
        } else if (!(gardenB.classList.contains("activ_button")) && (lawnB.classList.contains("activ_button")) && (plantB.classList.contains("activ_button"))) {
            lawnB.classList.remove("activ_button");
            blurGarden.forEach(blurIt => {
                blurIt.classList.add("blur_item");
            });
            blurLawn.forEach(blurIt => {
                blurIt.classList.add("blur_item");
            });
            blurPlant.forEach(blurIt => {
                blurIt.classList.remove("blur_item");
            });
        } else {
            lawnB.classList.add("activ_button");
            blurGarden.forEach(blurIt => {
                blurIt.classList.add("blur_item");
            });
            blurLawn.forEach(blurIt => {
                blurIt.classList.remove("blur_item");
            });
            blurPlant.forEach(blurIt => {
                blurIt.classList.add("blur_item");
            });
        }
    });

    plantB.addEventListener("click", function () {
        if ((gardenB.classList.contains("activ_button")) && (lawnB.classList.contains("activ_button")) && !(plantB.classList.contains("activ_button"))) {
            gardenB.classList.remove("activ_button");
            lawnB.classList.remove("activ_button");
            plantB.classList.add("activ_button")
            blurGarden.forEach(blurIt => {
                blurIt.classList.add("blur_item");
            });
            blurLawn.forEach(blurIt => {
                blurIt.classList.add("blur_item");
            });
            blurPlant.forEach(blurIt => {
                blurIt.classList.remove("blur_item");
            });
        } else if (!(gardenB.classList.contains("activ_button")) && (lawnB.classList.contains("activ_button")) && (plantB.classList.contains("activ_button"))) {
            plantB.classList.remove("activ_button");
            blurGarden.forEach(blurIt => {
                blurIt.classList.add("blur_item");
            });
            blurLawn.forEach(blurIt => {
                blurIt.classList.remove("blur_item");
            });
            blurPlant.forEach(blurIt => {
                blurIt.classList.add("blur_item");
            });
        } else if ((gardenB.classList.contains("activ_button")) && !(lawnB.classList.contains("activ_button")) && (plantB.classList.contains("activ_button"))) {
            plantB.classList.remove("activ_button");
            blurGarden.forEach(blurIt => {
                blurIt.classList.remove("blur_item");
            });
            blurLawn.forEach(blurIt => {
                blurIt.classList.add("blur_item");
            });
            blurPlant.forEach(blurIt => {
                blurIt.classList.add("blur_item");
            });
        } else if (!(gardenB.classList.contains("activ_button")) && !(lawnB.classList.contains("activ_button")) && (plantB.classList.contains("activ_button"))) {
            plantB.classList.remove("activ_button");
            blurGarden.forEach(blurIt => {
                blurIt.classList.remove("blur_item");
            });
            blurLawn.forEach(blurIt => {
                blurIt.classList.remove("blur_item");
            });
            blurPlant.forEach(blurIt => {
                blurIt.classList.remove("blur_item");
            });
        } else if ((gardenB.classList.contains("activ_button")) && !(lawnB.classList.contains("activ_button")) && !(plantB.classList.contains("activ_button"))) {
            plantB.classList.add("activ_button");
            blurGarden.forEach(blurIt => {
                blurIt.classList.remove("blur_item");
            });
            blurLawn.forEach(blurIt => {
                blurIt.classList.add("blur_item");
            });
            blurPlant.forEach(blurIt => {
                blurIt.classList.remove("blur_item");
            });
        } else if (!(gardenB.classList.contains("activ_button")) && (lawnB.classList.contains("activ_button")) && !(plantB.classList.contains("activ_button"))) {
            plantB.classList.add("activ_button");
            blurGarden.forEach(blurIt => {
                blurIt.classList.add("blur_item");
            });
            blurLawn.forEach(blurIt => {
                blurIt.classList.remove("blur_item");
            });
            blurPlant.forEach(blurIt => {
                blurIt.classList.remove("blur_item");
            });
        } else {
            plantB.classList.add("activ_button");
            blurGarden.forEach(blurIt => {
                blurIt.classList.add("blur_item");
            });
            blurLawn.forEach(blurIt => {
                blurIt.classList.add("blur_item");
            });
            blurPlant.forEach(blurIt => {
                blurIt.classList.remove("blur_item");
            });
        }
    });

    //логика работы кнопок в блоке Prices
    const btnBas = document.querySelector(".btn_base>.accordion_btn>.arrow_btn");
    const btnSt = document.querySelector(".btn_st>.accordion_btn>.arrow_btn");
    const btnPro = document.querySelector(".btn_pro>.accordion_btn>.arrow_btn");
    btnBas.addEventListener("click", function () {
        if (document.querySelector(".btn_st").classList.contains('activ_btn_price')) {
            document.querySelector(".btn_base").classList.add('activ_btn_price');
            document.querySelector(".btn_st").classList.remove('activ_btn_price');
        } else if (document.querySelector(".btn_pro").classList.contains('activ_btn_price')) {
            document.querySelector(".btn_base").classList.add('activ_btn_price');
            document.querySelector(".btn_pro").classList.remove('activ_btn_price');
        } else { document.querySelector(".btn_base").classList.toggle('activ_btn_price'); }

    });
    btnSt.addEventListener("click", function () {
        if (document.querySelector(".btn_base").classList.contains('activ_btn_price')) {
            document.querySelector(".btn_st").classList.add('activ_btn_price');
            document.querySelector(".btn_base").classList.remove('activ_btn_price');
        } else if (document.querySelector(".btn_pro").classList.contains('activ_btn_price')) {
            document.querySelector(".btn_st").classList.add('activ_btn_price');
            document.querySelector(".btn_pro").classList.remove('activ_btn_price');
        } else { document.querySelector(".btn_st").classList.toggle('activ_btn_price'); }

    });
    btnPro.addEventListener("click", function () {
        if (document.querySelector(".btn_st").classList.contains('activ_btn_price')) {
            document.querySelector(".btn_pro").classList.add('activ_btn_price');
            document.querySelector(".btn_st").classList.remove('activ_btn_price');
        } else if (document.querySelector(".btn_base").classList.contains('activ_btn_price')) {
            document.querySelector(".btn_pro").classList.add('activ_btn_price');
            document.querySelector(".btn_base").classList.remove('activ_btn_price');
        } else { document.querySelector(".btn_pro").classList.toggle('activ_btn_price'); }

    });

    //логика рабооты кнопки выбора города

    document.querySelector(".button_city").addEventListener("click", function () {
        document.querySelector(".button_city").classList.toggle('activ_select');
        document.querySelector(".contact_btn_select").classList.toggle('select_btn_open');
        document.querySelector(".activ_list").classList.toggle('activ');
        document.querySelector(".list_city").classList.toggle('activ');
        document.querySelector(".contact_card").classList.remove('activ');
        // activ
    });

    document.querySelector(".list_city").addEventListener("click", function (event) {
        document.querySelector(".city_btn_lable").textContent = event.target.textContent;
        if (!(document.querySelector(".city_btn_lable").textContent == "City")) {
            document.querySelector(".button_city").classList.add("activ_select");
            console.log(document.querySelector(".city_btn_lable").textContent);
        } else {
            document.querySelector(".button_city").classList.remove("activ_select");

        }
        document.querySelector(".city_btn_lable").textContent = event.target.textContent;
        document.querySelector(".addres_lable_text").textContent = event.target.textContent;
        document.querySelector(".activ_list").classList.toggle('activ');
        document.querySelector(".contact_btn_select").classList.toggle('select_btn_open');
        document.querySelector(".list_city").classList.toggle('activ');
        document.querySelector(".contact_card").classList.add('activ');
    });
});
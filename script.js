const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (btn) {
    console.log(btn);
    btn.addEventListener('click',function(event) {
        console.log(event);                 //it displays the which type of event
        console.log(event.target);        //it tells from where it comes
        switch (event.target.id) {
            case "grey":
                body.style.backgroundColor = event.target.id;
                break;
            case "white":
                body.style.backgroundColor = event.target.id;
                break;
            case "blue":
                body.style.backgroundColor = event.target.id;
                break;
            case "yellow":
                body.style.backgroundColor = event.target.id;
                break;
            default:
                break;
        }
    });
});


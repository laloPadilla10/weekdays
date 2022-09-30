const dia = document.getElementById("day");
const mes = document.getElementById("month");
const anio = document.getElementById("year");
const weekday = document.getElementById("habil");

const weekdays = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

document.getElementById("calc").addEventListener("click", function () {
    const d = new Date(anio.value, (mes.value-1), (dia.value), 10, 33, 30, 0);

    let dd;
    switch (d.getDay()) {
        case 0:
            dd = ", Fin de semana";
            break;
        case 1:
            dd = ", Día hábil";
            break;
        case 2:
            dd = ", Día hábil";
            break;
        case 3:
            dd = ", Día hábil";
            break;
        case 4:
            dd = ", Día hábil";
            break;
        case 5:
            dd = ", Día hábil";
            break;
        case 6:
            dd = ", Fin de semana";
            break;
        default:
            dd = " What?!"
            break;
    }
    weekday.value = weekdays[d.getDay()] + dd;
    console.log((dia.value) + "/ " + mes.value + "/ " + anio.value);
    console.log(typeof (parseInt(dia.value)));
    console.log(d.getDay());
    console.log("Type of dd" + typeof (dd))
});


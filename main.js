const porcentaje_sla = document.querySelector("#porcentaje_sla");
const calcula_por_sla = document.querySelector("#calcula-por-sla");
const tiempo_inactividad_sla = document.querySelector(
  "#tiempo-inactividad-sla"
);
const tiempo_sla = document.querySelector("#tiempo_sla");
const tiempo_disponibilidad = document.querySelector("#tiempo_disponibilidad");
const porcentaje_por_tiempo = document.querySelector("#porcentaje-por-tiempo");

document.addEventListener("click", main);

function main(obj) {
  const action = obj.target;

  if (action.classList.contains("calcula-por-sla")) {
    calculatiempo(porcentaje_sla.value);
  } else if (action.classList.contains("calcula-por-tiempo")) {
    calcula_porcentaje(tiempo_sla.value);
  }
}

function calculatiempo(sla) {
  const SLA = sla / 100;
  const Tiempo_maximo = 525600;
  const Tiempo_inactividad = Tiempo_maximo - Tiempo_maximo * SLA;
  console.log(Tiempo_inactividad.toFixed(2));
  pintaHTML_tiempo(Tiempo_inactividad.toFixed(2) + " mins");
}

function pintaHTML_tiempo(txt) {
  const resultado = document.createElement("div");
  resultado.innerHTML = `<h2> ${txt} </h2>`;
  tiempo_inactividad_sla.appendChild(resultado);
}

function calcula_porcentaje(tmp) {
  const Tiempo_max_disponibilidad = tiempo_disponibilidad.value;
  const Tiempo_inactividad = tmp;
  const SLA =
    [
      (Tiempo_max_disponibilidad - Tiempo_inactividad) /
        Tiempo_max_disponibilidad,
    ] * 100;
  pintarHTML_porcentaje(SLA);
}

function pintarHTML_porcentaje(sla){
    const porcentaje = document.createElement('div');
    porcentaje.innerHTML= `<h2> ${sla.toFixed(4)} %</h2>`;

    porcentaje_por_tiempo.appendChild(porcentaje);
}
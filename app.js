// Variables
let numMaximoPosible = 10;
let numeroSecreto = Math.floor(Math.random() * numMaximoPosible) + 1;
let numeroUsuario = 0;
let intentos = 1;
// let palabraVeces = "vez";
let maximosIntentos = 3;

while (numeroSecreto != numeroUsuario) {
  // 5 == 5
  numeroUsuario = parseInt(
    prompt(`Ingresa un número entre 1 y ${numMaximoPosible} por favor:`)
  ); // 5
  console.log(typeof numeroUsuario);

  /*
        Este código realiza
        la comparación
        */
  if (numeroUsuario == numeroSecreto) {
    // 5 == 5
    // Acertamos, fue verdadera la condición
    alert(
      `Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${
        intentos == 1 ? "vez" : "veces"
      }`
    );
  } else {
    if (numeroUsuario > numeroSecreto) {
      // 9 > 5
      alert("El numero secreto es menor");
    } else {
      alert("El numero secreto es mayor");
    }
    intentos++;
    // palabraVeces = "veces";
    if (intentos > maximosIntentos) {
      alert("Llegaste al numero maximo de intentos");
      break; // corta el ciclo while cuando pasas de los 3 intentos
    }
    /*
            La condición no se cumplió
            alert('Lo siento, no acertaste el número');
            */
  }
}

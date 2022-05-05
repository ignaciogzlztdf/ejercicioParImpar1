import "./styles.css";

let numeroIngresado: number | null = Number(
  prompt("Ingrese un número para determinar si es par o impar.")
);

if (numeroIngresado === 0) {
  alert("El número ingresado es 0.");
} else if (numeroIngresado % 2 === 0) {
  alert("El número ingresado es par.");
} else {
  alert("El número ingresado es impar.");
}

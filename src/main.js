const Dolares = 20.5;
const Euros = 22.7;
export default class App {
    convertir(pesos){
        let resultado;
        if(pesos<2000){
            resultado = pesos/Dolares;
        }
        else if(pesos >= 2000){
            resultado = pesos/Euros;
        }
        return resultado.toFixed(2);
    }
    costoRenta(kilometros) {
        if (kilometros<50) {
            return kilometros*3;
        }
        else if (kilometros>=50 && kilometros<100) {
            return kilometros*5;
        }
        else if (kilometros>=100 && kilometros<200) {
            return kilometros*6;
        }
        else if (kilometros>=200) {
            return kilometros*6.5;
        }
    }

}

let app = new App();

console.log(app.convertir(1850),"Dolares");
console.log(app.convertir(2000),"Euros");
console.log("");

console.log(app.costoRenta(10));
console.log(app.costoRenta(60));
console.log(app.costoRenta(150));
console.log(app.costoRenta(250));
console.log("");



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
    puedeCircular(dia, terminacion) {
        switch (dia) {
            case 1:
                if (terminacion===0){
                    return true;
                }
                else if (terminacion != 1 && terminacion != 2) {
                    return true;
                }
                else {
                    return false;
                }
                break;
            case 2:
                if (terminacion===1){
                    return true;
                }
                else if (terminacion!=0 && terminacion!=2) {
                    return true;
                }
                else {
                    return false;
                }
                break;
            case 3:
                if (terminacion===2){
                    return true;
                }
                else if (terminacion!=0 && terminacion!=1) {
                    return true;
                }
                else {
                    return false;
                }
                break;
            case 4:
                if (terminacion===2){
                    return true;
                }
                else if (terminacion!=0 && terminacion!=1) {
                    return true;
                }
                else {
                    return false;
                }
                break;
            case 5:
                if (terminacion!=0 && terminacion!=1 && terminacion!=2){
                    return true;
                }
                else {
                    return false;
                }
                break;
            case 6:
                if (terminacion!=0 && terminacion!=1 && terminacion!=2){
                    return true;
                }
                else {
                    return false;
                }
                break;
            case 7:
                if (terminacion!=0 && terminacion!=1 && terminacion!=2){
                    return true;
                }
                else {
                    return false;
                }
                break;
                default:
                    return false;
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

console.log("Lunes terminacion placa: 0",app.puedeCircular(0,1));
console.log("Martes terminacion placa: 1",app.puedeCircular(1,2));
console.log("Miercoles terminacion placa: 2",app.puedeCircular(3,2));
console.log("Jueves terminacion placa: 2",app.puedeCircular(4,2));
console.log("Viernes terminacion placa: 3",app.puedeCircular(8,3));
console.log("Sabado terminacion placa: 1",app.puedeCircular(7,2));
console.log("Domingo terminacion placa: 2",app.puedeCircular(5,3));




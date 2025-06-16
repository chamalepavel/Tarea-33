
// variable paso
let paso = 0;

//funcion para avanzar al siguiente paso
const pasos = () => {
    paso++;
    console.log(" ");
    console.log("===================================");
    console.log(`Paso ${paso}`);
    console.log("------------------------------------");
}



// codigo original

class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get department() {
    return this._department;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

// paso 1
pasos();


// Al final del siguiente codigo, use console.log() para imprimir el valor guardado en la propiedad name del objeto surgeonRomero.
console.log(surgeonRomero.name); // Francisco Romero



// paso 2
pasos();

// Realiza una llamada al metodo takeVacationDays() en la instancia surgeonRomero, pasando el argumento 3.

surgeonRomero.takeVacationDays(3);



// paso 3
pasos();

// Despues de la llamada al metodo takeVacationDays(), utilice console.log() para imprimir el valor guardado en la propiedad remainingVacationDays de la instancia surgeonRomero.

console.log(surgeonRomero.remainingVacationDays); // 17




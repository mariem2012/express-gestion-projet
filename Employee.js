export class Employee {
  constructor() {}

  createEmployee(employee) {
    this.nom = employee.nom;
    this.prenom = employee.prenom;
    this.email = employee.email;
    this.poste = employee.poste;
    this.dateEmbauche = employee.dateEmbauche;
    this.statut = employee.statut;
    console.log(
      `Employee: ${this.nom}, ${this.prenom}, ${this.email}, ${this.poste}, ${this.dateEmbauche}, ${this.statut}  has been created`
    );
  }

  destroyEmployee() {
    this.nom = null;
    this.prenom = null;
    this.email = null;
    this.poste = null;
    this.dateEmbauche = null;
    this.statut = null;
    console.log(`Employee: has been deleted`);
  }

  editEmployee(newEmployee) {
    this.nom = newEmployee.nom;
    this.email = newEmployee.email;
    console.log(
      `Employee: ${this.nom}, ${this.prenom}, ${this.email}, ${this.poste}, ${this.dateEmbauche}, ${this.statut}  has been updated`
    );
  }
  getEmployee() {
    console.log(
      `Employee: ${this.nom}, ${this.prenom}, ${this.email} has been geted`
    );
    return {
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      poste: this.poste,
      dateEmbauche: this.dateEmbauche,
      statut: this.statut,
    };
  }
}

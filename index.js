import express from "express";
import bodyParser from "body-parser";
import { Employee } from "./Employee.js";
import { Tache } from "./Tache.js";
import { Assignation } from "./Assignation.js";

const app = express();
const port = 3300;

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Bonjour les employés");
});

app.post("/app", (req, res) => {
  const e1 = new Employee();
  e1.createEmployee({
    nom: "Diani",
    prenom: "Mariem",
    email: "mariem@gmail.com",
    poste: "Developpeuse",
    dateEmbauche: "2024-09-01",
    statut: "Actif",
  });

  const e2 = new Employee();
  e2.createEmployee({
    nom: "Traore",
    prenom: "Harouna",
    email: "hr@gmail.com",
    poste: "Professeur",
    dateEmbauche: "2022-09-01",
    statut: "Inactif",
  });

  const e3 = new Employee();
  e3.createEmployee({
    nom: "Sem",
    prenom: "Thillo",
    email: "thillo@gmail.com",
    poste: "Dev front",
    dateEmbauche: "2010-11-20",
    statut: "CDD",
  });

  const t1 = new Tache();
  t1.createTache({
    nom: "README",
    description: "Rédaction du fichier README.md",
    dateDebut: "2024-01-01",
    dateFin: "2024-11-22",
    statut: "En cours",
    priorite: 1,
  });

  const t2 = new Tache();
  t2.createTache({
    nom: "Développement",
    description: "Développement de la nouvelle fonctionnalité",
    dateDebut: "2024-02-01",
    dateFin: "2024-12-31",
    statut: "Non commencé",
    priorite: 2,
  });

  const t3 = new Tache();
  t3.createTache({
    nom: "Modification de la maquette",
    description:
      "Améliorer le UI, rendre responsive, ajouter une espace de connexion",
    dateDebut: "2023-06-11",
    dateFin: "2023-12-22",
    statut: "A faire",
    priorite: "3",
  });
  console.log("**************");
  // Assignation.assign({ employe: e1, tache: t1, dateAssignation: new Date() });

  const assignation = Assignation.tabAssignations;
  Assignation.getEmpAssign(e1);

  const newAssignation = Assignation.tabAssignations;

  Assignation.assign({
    employe: e1.getEmployee(),
    tache: t3.getTache(),
    dateAssignation: new Date(),
  });
  Assignation.assign({
    employe: e2.getEmployee(),
    tache: t2.getTache(),
    dateAssignation: new Date(),
  });

  // const assignation = Assignation.getTab()
  const resulFiltre = Assignation.getEmpAssign(e1.getEmployee());

  // const newAssignation = Assignation.getTab()

  Assignation.assign({
    employe: e2.getEmployee(),
    tache: t1.getTache(),
    dateAssignation: new Date(),
  });

  const testEcrase = Assignation.tabAssignations;

  res.status(200).json({ newAssignation, testEcrase, resulFiltre });
});

app.listen(port, () => {
  console.log(`L'application est en ecoute sur port ${port}`);
});

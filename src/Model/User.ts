import { CategorieClient } from "./CategorieClient";
import { Profession } from "./Profesion";
import { Role } from "./Role";

export class User {
    idClient: number;
    nom: string;
    prenom: string;
    username: string;
    dateNaissance: Date;
    email: string;
    password: string;
    categorieClient: CategorieClient;
    profession: Profession;
    roles: Role[];

   constructor(idClient,nom,prenom,username,dateNaissance,email,password,categorieClient,profession,roles){
        this.idClient = idClient ;
        this.nom = nom ;
        this.prenom = prenom ;
        this.username= username ;
        this.dateNaissance = dateNaissance ;
        this.email = email;
        this.password = password ;
        this.categorieClient = categorieClient;
        this.profession = profession ;
        this.roles = roles ;
    }
    
    

}
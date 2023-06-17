export interface UserModel {
    id: number;
    structure: string;
    photo: string;
    nom: string;
    postnom: string;
    prenom: string;
    sexe: string;
    nationalite: string;
    etat_civile: string;
    adresse: string;
    titre: string;
    pays: string;
    province: string;
    zone_sante: string;
    email: string;
    telephone: string;
    matricule: string;
    role: string;
    password: string;
    signature: string;
    created: Date| undefined;
    update_created: Date| undefined;
}

export interface UserModel {
    id: number | undefined;
    structure: string | undefined;
    photo: string | undefined;
    nom: string | undefined; 
    postnom: string | undefined;
    prenom: string | undefined;
    sexe: string | undefined;
    nationalite: string | undefined;
    etat_civile: string | undefined;
    adresse: string | undefined;
    titre: string | undefined;
    pays: string | undefined;
    province: string;
    zone_sante: string;
    email: string | undefined;
    telephone: string | undefined;
    matricule: string | undefined;
    password: string | undefined;
    signature: string | undefined;
    created: Date| undefined;
    update_created: Date| undefined;
}
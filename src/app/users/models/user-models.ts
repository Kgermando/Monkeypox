export interface UserModel {
    id: number; 
    structure: string; 
    photo: string;
    nom: string; 
    prenom: string;
    sexe: string;   
    date_naissance: Date;
    lieu_naissance: string;
    nationalite: string; 
    email: string;
    telephone: string; 
    etat_civile: string;
    nbr_enfant: string; 
    nbr_dependants: string;
    nbr_dependants_max: string; 
    adresse: string; 
    matricule: string;
    numero_cnss: string;
    role: string; 
    departement: string;
    title: string;
    fonction: string;
    services: string; 
    site_location: string;

    type_contrat: string;
    date_debut_contrat: Date;
    date_fin_contrat: Date;

    salaire: number; 
    compte_bancaire: string; // Number compte
    nom_banque: string;
    frais_bancaire: number;

    statut_personnel: boolean;
    cv_url: string;

    signature: string;
    created: Date;
    update_created: Date;
}
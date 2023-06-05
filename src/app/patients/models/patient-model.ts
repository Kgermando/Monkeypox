export class PatientModel {
    id: number | undefined;
    photo: string | undefined;
    nom: string | undefined;
    postnom: string | undefined;
    prenom: string | undefined;
    sexe: string | undefined;
    age_an: number | undefined;
    age_mois: number | undefined;
    fourchette_age: string | undefined;
    lieu_residence: string | undefined;  // Village ou quartier
    aire_sante: string | undefined;
    profession: string | undefined;
    email: string | undefined;
    telephone: string | undefined;
    signature: string | undefined; // celui qui fait le document
    created: Date | undefined;
    update_created : Date | undefined; 

}
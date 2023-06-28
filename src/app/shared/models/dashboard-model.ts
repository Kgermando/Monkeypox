export class PatientCountPourcentModel {
    statut: string;
    pourcentage: number;
}

export class TrancheAgePieModel {
    fourchette_age: string;
    count: number; 
} 

export class NbrePatientSexeModel {
    sexe: string;
    pourcentage: number;
}

export class EteContactPatientModel {
    a_ete_contact_patient: string;
    pourcentage: number;
}

export class EteHospitaliseModel {
    a_ete_hospitalise: string;
    pourcentage: number;
}

export class TypeContactModel {
    type_contact: string;
    pourcentage: number;
}

export class FievreModel {
    fievre: string;
    pourcentage: number;
}

export class EruptionCutaneeModel {
    eruption_cutanee: string;
    pourcentage: number;
}

export class DecesProvinceModel {
    province: string;
    count: number;
}

export class StatutEpidemiologiqueModel {
    month: any;
    statut: string;
    count: number;
}

export class EvolutionCasModel { 
    year: any;
    statut: string;
    count: number;
}

export class StatutDecesModel {  
    month: any;
    pourcentage: number;
}
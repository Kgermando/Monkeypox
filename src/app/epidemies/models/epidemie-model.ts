export class EpidemieModel {
    id: number;
    pays: string;
    province: string;
    zone_sante: string;
    num_epi: string;
    
    semaine_epi: number;
    date_notification: Date;
    patient_id: number;
    
    fievre: string;
    eruption_cutanee: string;
    date_symptome: Date;
    autres: string;
    
    date_admition: Date;
    date_diagonstic: Date;
    structure: string;
    
    a_ete_contact_patient: string;
    type_contact: string;
    a_ete_hospitalise: string;
    
    croute: string;
    ecouvillon: string;
    prevelement_sanguin: string;
    date_prelevement: Date;
    date_expedition: Date;
    
    statut: string;
    commentaire: string;
    campaign: string;
    epidemie: string;
    signature: string;
    created: Date;
    update_created: Date;
}
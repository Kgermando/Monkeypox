export class EpidemieModel {
    id: number;
    pays: string | undefined;
    province: string | undefined;
    zone_sante: string | undefined;
    num_epi: string | undefined;
    
    semaine_epi: number | undefined;
    date_notification: Date | undefined;
    patient_id: number | undefined; 
    
    fievre: boolean | undefined;
    eruption_cutanee: boolean | undefined;
    date_symptome: Date | undefined;
    autres: string | undefined;
    
    date_admition: Date | undefined;
    date_diagonstic: Date | undefined;
    structure: string | undefined;
    
    a_ete_contact_patient: boolean | undefined;
    type_contact: string | undefined;
    a_ete_hospitalise: boolean | undefined;
    
    croute: string | undefined;
    ecouvillon: string | undefined;
    prevelement_sanguin: string | undefined;
    date_prelevement: Date | undefined;
    date_expedition: Date | undefined;
    
    statut: string | undefined;
    commentaire: string | undefined;
    campaign: string | undefined;
    epidemie: string | undefined;
    signature: string | undefined;
    created: Date | undefined;
    update_created: Date | undefined;
}
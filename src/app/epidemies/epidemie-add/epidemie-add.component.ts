import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service'; 
import { provinces } from 'src/app/shared/utils/province';
import { UserModel } from 'src/app/users/models/user-models';
import { EpidemieService } from '../epidemie.service';
import { EpidemieModel } from '../models/epidemie-model';
import { Editor, Toolbar } from 'ngx-editor';
import { CampaignModel } from 'src/app/reglage/models/campaign-model';
import { CampaignService } from 'src/app/reglage/campaigns/campaign.service';
import { formatDate } from '@angular/common';
import { LocalService } from 'src/app/shared/services/local.service';
import { PatientService } from 'src/app/patients/patient.service';
import { PatientModel } from 'src/app/patients/models/patient-model';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-epidemie-add',
  templateUrl: './epidemie-add.component.html',
  styleUrls: ['./epidemie-add.component.scss']
})
export class EpidemieAddComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  isLoadingData: boolean = false;

  errorMessage: string =' '; 
  
  currentUser: UserModel = {
    id: 0,
    structure: '-',
    photo: '-',
    nom: '-',
    postnom: '-',
    prenom: '-',
    sexe: '-',
    nationalite: '-',
    etat_civile: '-',
    adresse: '-',
    titre: '-',
    pays: '-',
    province: '-',
    zone_sante: '-',
    email: '-',
    telephone: '-',
    matricule: '-',
    role: 'User',
    password: '-',
    signature: '-',
    created: new Date,
    update_created: new Date
};

  formGroup!: FormGroup;

  provinceList: String[] = provinces; 


  epidemieList: EpidemieModel[] = []; 
  patientList: PatientModel[] = []; 
  patient: PatientModel = {
    id: 0,
    photo: '',
    fullname: '',
    sexe: '',
    age_an: 0,
    age_mois: 0,
    fourchette_age: '',
    lieu_residence: '',
    aire_sante: '',
    profession: '',
    email: '',
    telephone: '',
    province: '',
    signature: '',
    created: new Date,
    update_created: new Date
  }; 

  epidemieID: number[] = []; // List ID

  campaignList: CampaignModel[] = []; 

  editor: Editor;
  toolbar: Toolbar = [
    // default value
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }], 
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
    ['horizontal_rule', 'format_clear'],
];

  constructor(
    private _formBuilder: FormBuilder,
    private authService: AuthService,
    private epidemieService: EpidemieService,
    private patientService: PatientService,
    private campaignService: CampaignService,
    private localStore: LocalService,
    private router: Router) { }


    ngOnInit(): void {
      var userId: any = this.localStore.getData('auth')
      this.authService.user(parseInt(userId)).subscribe(
        res => {
            this.currentUser = res; 
        }
      );
      this.isLoadingData = true;
      this.epidemieService.all().subscribe(res => {
        this.epidemieList = res;  
        this.epidemieID = this.epidemieList.map(e => e.id);

        console.log(this.epidemieID)
        this.isLoadingData = false;
      });
      this.isLoadingData = false;

      

      this.campaignService.all().subscribe(res => {
        this.campaignList = res;  
      });

      this.editor = new Editor();
  
      this.formGroup = this._formBuilder.group({ 
        semaine_epi: ['', Validators.required],
        date_notification: ['', Validators.required],
        patient_id: ['', Validators.required],
        fievre: ['', Validators.required],
        eruption_cutanee: ['', Validators.required],
        date_symptome: ['', Validators.required],
        autres: ['', Validators.required],
        date_admition: ['', Validators.required],
        date_diagonstic: ['', Validators.required], 
        a_ete_contact_patient: ['', Validators.required],
        type_contact: ['', Validators.required],
        a_ete_hospitalise: ['', Validators.required], 
        croute: ['', Validators.required],
        ecouvillon: ['', Validators.required],
        prevelement_sanguin: ['', Validators.required], 
        date_prelevement: ['', Validators.required],
        date_expedition: ['', Validators.required],
        statut: ['', Validators.required], 
        commentaire: ['', Validators.required],
        campaign: ['', Validators.required],
      });

      this.patientService.all().subscribe((res: any) => {
        this.patientList = res;
      });

      
    }

    onKeyUpEvent(event: any){
      console.log(event.target.value);
      console.log(this.patientList);
      this.patient = this.patientList.filter(
        (c) => c.id == event.target.value
      )[0];
      if (this.patient === null) {
        console.log(this.patient);
        alert("Ce numero ordre n'existe pas dans le système!")
      }
    } 

  
    onSubmit() {
      try { 
        if (this.formGroup.valid) {
          this.isLoading = true;
        var prov = this.currentUser.province.slice(0,3);
        var zoneSante = this.currentUser.zone_sante.replace(/\s/g, "").slice(0,5);
        var year = formatDate(new Date(), 'yy', 'en'); 
        var numID = 0;
        if (this.epidemieID.length !== 0) {
          numID = Math.max(...this.epidemieID);
        }
        var body = {
          pays: 'RDC',
          province: this.currentUser.province, // User
          zone_sante: this.currentUser.zone_sante, // User
          num_epi: `RDC-${prov}-${zoneSante}-${year}-${numID + 1}`,
          semaine_epi: this.formGroup.value.semaine_epi,
          date_notification: this.formGroup.value.date_notification,
          patient_id: this.formGroup.value.patient_id,
          fievre: this.formGroup.value.fievre,
          eruption_cutanee: this.formGroup.value.eruption_cutanee,
          date_symptome: this.formGroup.value.date_symptome,
          autres: this.formGroup.value.autres,
          date_admition: this.formGroup.value.date_admition,
          date_diagonstic: this.formGroup.value.date_diagonstic,
          structure: this.currentUser.structure, // User
          a_ete_contact_patient: this.formGroup.value.a_ete_contact_patient,
          type_contact: this.formGroup.value.type_contact,
          a_ete_hospitalise: this.formGroup.value.a_ete_hospitalise,
          croute: this.formGroup.value.croute,
          ecouvillon: this.formGroup.value.ecouvillon,
          prevelement_sanguin: this.formGroup.value.prevelement_sanguin,
          date_prelevement: this.formGroup.value.date_prelevement,
          date_expedition: this.formGroup.value.date_expedition,
          statut: this.formGroup.value.statut,
          commentaire: this.formGroup.value.commentaire,
          campaign: this.formGroup.value.campaign,
          epidemie: 'Monkeypox',
          signature: this.currentUser.matricule, // User
          created: new Date(),
          update_created: new Date()
        };
        console.log(body);
        this.epidemieService.create(body).subscribe(() => {
            this.isLoading = false;
            this.formGroup.reset();
            this.router.navigate(['/layouts/epidemies/epidemie-list']);
        });
        this.isLoading = false;
        }
        
      } catch (error) {
        this.isLoading = false;
        console.log(error);
      }
    }

  
    // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }

 
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

@Component({
  selector: 'app-epidemie-edit',
  templateUrl: './epidemie-edit.component.html',
  styleUrls: ['./epidemie-edit.component.scss']
})
export class EpidemieEditComponent implements OnInit, OnDestroy {
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

id: number;

  constructor(
    private _formBuilder: FormBuilder,
    private authService: AuthService,
    private epidemieService: EpidemieService,
    private campaignService: CampaignService,
    private localStore: LocalService,
    private route: ActivatedRoute,
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

      this.campaignService.all().subscribe(res => {
        this.campaignList = res;  
      });

      this.editor = new Editor();
  
      this.formGroup = this._formBuilder.group({ 
        semaine_epi: [''],
        date_notification: [''],
        patient_id: [''],
        fievre: [''],
        eruption_cutanee: [''],
        date_symptome: [''],
        autres: [''],
        date_admition: [''],
        date_diagonstic: [''], 
        a_ete_contact_patient: [''],
        type_contact: [''],
        a_ete_hospitalise: [''], 
        croute: [''],
        ecouvillon: [''],
        prevelement_sanguin: [''], 
        date_prelevement: [''],
        date_expedition: [''],
        statut: [''], 
        commentaire: [''],
        campaign: [''],
      });

      this.id = this.route.snapshot.params['id'];
      this.epidemieService.get(this.id).subscribe(res => {
        this.formGroup.patchValue({ // load data to form
          semaine_epi: res.semaine_epi,
          date_notification: res.date_notification,
          patient_id: res.patient_id,
          fievre: res.fievre,
          eruption_cutanee: res.eruption_cutanee,
          date_symptome: res.date_symptome,
          autres: res.autres,
          date_admition: res.date_admition,
          date_diagonstic: res.date_diagonstic, 
          a_ete_contact_patient: res.a_ete_contact_patient,
          type_contact: res.type_contact,
          a_ete_hospitalise: res.a_ete_hospitalise,
          croute: res.croute,
          ecouvillon: res.ecouvillon,
          prevelement_sanguin: res.prevelement_sanguin,
          date_prelevement: res.date_prelevement,
          date_expedition: res.date_expedition,
          statut: res.statut,
          commentaire: res.commentaire,
          campaign: res.campaign, 
          signature: this.currentUser.matricule,
          created: res.created,
          update_created: new Date()
          });
        }
      ); 
    }

    onSubmit() {
      try {
        this.isLoading = true;
        this.epidemieService.update(this.id, this.formGroup.getRawValue())
        .subscribe({
          next: () => {
            this.router.navigate(['/layouts/epidemies/epidemie-list']);
            this.isLoading = false;
          },
          error: err => {
            console.log(err);
            this.isLoading = false;
          }
        });
  
        this.isLoading = false;
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

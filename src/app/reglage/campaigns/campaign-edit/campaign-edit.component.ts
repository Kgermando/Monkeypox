import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { LocalService } from 'src/app/shared/services/local.service';
import { CampaignService } from '../campaign.service';
import { UserModel } from 'src/app/users/models/user-models';

@Component({
  selector: 'app-campaign-edit',
  templateUrl: './campaign-edit.component.html',
  styleUrls: ['./campaign-edit.component.scss']
})
export class CampaignEditComponent {
  isLoading: boolean = false; 

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

  id: number;

  constructor(
    private _formBuilder: FormBuilder,
    private authService: AuthService,
    private localStore: LocalService,
    private route: ActivatedRoute,
    private campaignService: CampaignService,
    private router: Router) { }

  ngOnInit(): void {
    var userId: any = this.localStore.getData('auth')
      this.authService.user(parseInt(userId)).subscribe(
        res => {
            this.currentUser = res; 
        }
      );
    this.formGroup = this._formBuilder.group({
      nom: [''],
      date_debut: [''],
      date_fin: [''],
      aire_sante: [''],
      nbre_agent: ['']
    });

    this.id = this.route.snapshot.params['id'];
    this.campaignService.get(this.id).subscribe(user => {
        this.formGroup.patchValue({ // load data to form
          nom: user.nom,
          date_debut: user.date_debut,
          date_fin: user.date_fin,
          aire_sante: user.aire_sante,
          nbre_agent: user.nbre_agent, 
          signature: this.currentUser.matricule,
          created: user.created,
          update_created: new Date()
        });
      }
    ); 
     
  } 
  
  onSubmit() {
    try {
      this.isLoading = true;
      this.campaignService.update(this.id, this.formGroup.getRawValue())
      .subscribe({
        next: () => {
          this.router.navigate(['/layouts/reglages/campaign-list']);
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
}

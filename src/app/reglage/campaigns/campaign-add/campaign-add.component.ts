import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators } from 'ngx-editor';
import { CampaignService } from '../campaign.service';
import { AuthService } from 'src/app/auth/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserModel } from 'src/app/users/models/user-models';
import { CampaignModel } from '../../models/campaign-model';

@Component({
  selector: 'app-campaign-add',
  templateUrl: './campaign-add.component.html',
  styleUrls: ['./campaign-add.component.scss']
})
export class CampaignAddComponent implements OnInit {
  isLoading: boolean = false;
  structure: CampaignModel = new CampaignModel();

  currentUser: UserModel;

  formGroup!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private authService: AuthService,
    private campaignService: CampaignService,
    private router: Router) { }

  ngOnInit(): void {
    this.authService.user().subscribe(
      res => {
          console.log(res);
          this.currentUser = res; 
      }
    )
    this.formGroup = this._formBuilder.group({
      nom: ['', Validators.required],
      date_debut: ['', Validators.required],
      date_fin: ['', Validators.required],
      aire_sante: ['', Validators.required],
      nbre_agent: ['', Validators.required]
    });
    
  }


  goList() {
    this.router.navigate(['/reglages/campaign-list'])
  }

  
  onSubmit() {
    try {
      console.log(this.formGroup); 
      console.log(this.currentUser.matricule); 
      this.isLoading = true;
      var body = {
        nom: this.formGroup.value.nom,
        date_debut: this.formGroup.value.date_debut,
        date_fin: this.formGroup.value.date_fin,
        aire_sante: this.formGroup.value.aire_sante,
        nbre_agent: this.formGroup.value.nbre_agent,
        signature: this.currentUser.matricule,
        created: new Date(),
        update_created: new Date()
      };
      console.log(body);
      this.campaignService.createData(body).subscribe(() => {
          this.isLoading = false;
          this.goList();
      }); 
    } catch (error) {
      console.log(error);
    }
  }
}

import { Component, OnInit } from '@angular/core';

import { UserModel } from 'src/app/users/models/user-models';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { LocalService } from 'src/app/shared/services/local.service';
import { ZoneSanteService } from '../zone-sante.service';
import { ActivatedRoute, Router } from '@angular/router';
import { provinces } from 'src/app/shared/utils/province';

@Component({
  selector: 'app-zone-sante-edit',
  templateUrl: './zone-sante-edit.component.html',
  styleUrls: ['./zone-sante-edit.component.scss']
})
export class ZoneSanteEditComponent implements OnInit {
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

  provinceList: String[] = provinces;

  id: number;

  constructor(
    private _formBuilder: FormBuilder,
    private authService: AuthService,
    private localStore: LocalService,
    private zoneSanteService: ZoneSanteService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    var userId: any = this.localStore.getData('auth')
    this.authService.user(parseInt(userId)).subscribe(
      res => {
          this.currentUser = res; 
      }
    );
    this.formGroup = this._formBuilder.group({
      zone: [''],
      province: [''],
      territoire: ['']
    });

    this.id = this.route.snapshot.params['id'];
    this.zoneSanteService.get(this.id).subscribe(user => {
        this.formGroup.patchValue({ // load data to form
          zone: user.zone,
          province: user.province,
          territoire: user.territoire, 
          zone_sante: user.zone_sante, 
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
      this.zoneSanteService.update(this.id, this.formGroup.getRawValue())
      .subscribe({
        next: () => {
          this.router.navigate(['/layouts/reglages/zone-sante-list']);
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

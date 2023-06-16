import { Component, OnInit } from '@angular/core';
import { ZoneSanteModel } from '../../models/zone-sante-model';
import { UserModel } from 'src/app/users/models/user-models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { ZoneSanteService } from '../zone-sante.service';
import { Router } from '@angular/router';
import { provinces } from 'src/app/shared/utils/province';
import { LocalService } from 'src/app/shared/services/local.service';

@Component({
  selector: 'app-zone-sante-add',
  templateUrl: './zone-sante-add.component.html',
  styleUrls: ['./zone-sante-add.component.scss']
})
export class ZoneSanteAddComponent implements OnInit {
  isLoading: boolean = false;
  zoneSante: ZoneSanteModel = new ZoneSanteModel();

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
    password: '-',
    signature: '-',
    created: new Date,
    update_created: new Date
};

  formGroup!: FormGroup;

  provinceList: String[] = provinces;

  constructor(
    private _formBuilder: FormBuilder,
    private authService: AuthService,
    private localStore: LocalService,
    private zoneSanteService: ZoneSanteService,
    private router: Router) { }

  ngOnInit(): void {
    var userId: any = this.localStore.getData('auth')
    this.authService.user(parseInt(userId)).subscribe(
      res => {
          this.currentUser = res; 
      }
    );
    this.formGroup = this._formBuilder.group({
      zone: ['', Validators.required],
      province: ['', Validators.required],
      territoire: ['', Validators.required]
    });
    
  }


  goList() {
    this.router.navigate(['/reglages/zone-sante-list'])
  }

  
  onSubmit() {
    try {
      console.log(this.formGroup); 
      console.log(this.currentUser.matricule); 
      this.isLoading = true;
      var body = {
        zone: this.formGroup.value.zone,
        province: this.formGroup.value.province,
        territoire: this.formGroup.value.territoire,
        signature: this.currentUser.matricule,
        created: new Date(),
        update_created: new Date()
      };
      console.log(body);
      this.zoneSanteService.create(body).subscribe(() => {
          this.isLoading = false;
          this.goList();
      }); 
    } catch (error) {
      console.log(error);
    }
  }
  
}

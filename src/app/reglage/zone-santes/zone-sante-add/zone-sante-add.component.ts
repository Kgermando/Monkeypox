import { Component, OnInit } from '@angular/core';
import { ZoneSanteModel } from '../../models/zone-sante-model';
import { UserModel } from 'src/app/users/models/user-models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { ZoneSanteService } from '../zone-sante.service';
import { Router } from '@angular/router';
import { provinces } from 'src/app/shared/utils/province';

@Component({
  selector: 'app-zone-sante-add',
  templateUrl: './zone-sante-add.component.html',
  styleUrls: ['./zone-sante-add.component.scss']
})
export class ZoneSanteAddComponent implements OnInit {
  isLoading: boolean = false;
  zoneSante: ZoneSanteModel = new ZoneSanteModel();

  currentUser: UserModel;

  formGroup!: FormGroup;

  provinceList: String[] = provinces;

  constructor(
    private _formBuilder: FormBuilder,
    private authService: AuthService,
    private zoneSanteService: ZoneSanteService,
    private router: Router) { }

  ngOnInit(): void {
    this.authService.user().subscribe(
      res => {
          console.log(res);
          this.currentUser = res; 
      }
    )
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
      this.zoneSanteService.createData(body).subscribe(() => {
          this.isLoading = false;
          this.goList();
      }); 
    } catch (error) {
      console.log(error);
    }
  }
  
}

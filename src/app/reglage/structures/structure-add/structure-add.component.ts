import { Component, OnInit } from '@angular/core';
import { StructureModel } from '../../models/structure-model';
import { StructureService } from '../structure.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { UserModel } from 'src/app/users/models/user-models';

@Component({
  selector: 'app-structure-add',
  templateUrl: './structure-add.component.html',
  styleUrls: ['./structure-add.component.scss']
})
export class StructureAddComponent implements OnInit {

  isLoading: boolean = false;
  structure: StructureModel = new StructureModel();

  currentUser: UserModel;

  formGroup!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private authService: AuthService,
    private structureService: StructureService,
    private router: Router) { }

  ngOnInit(): void {
    this.authService.user().subscribe(
      res => {
          console.log(res);
          this.currentUser = res; 
      }
    )
    this.formGroup = this._formBuilder.group({
        nom_complet: ['', Validators.required],
        single: ['', Validators.required],
        manager: ['', Validators.required]
    });
    
  }


  goList() {
    this.router.navigate(['/reglages/structure-list'])
  }

  
  onSubmit() {
    try {
      console.log(this.formGroup); 
      console.log(this.currentUser.matricule); 
      this.isLoading = true;
      var body = {
        nom_complet: this.formGroup.value.nom_complet,
        single: this.formGroup.value.single,
        manager: this.formGroup.value.manager,
        signature: this.currentUser.matricule,
        created: new Date(),
        update_created: new Date()
      };
      console.log(body);
      this.structureService.createData(body).subscribe(() => {
          this.isLoading = false;
          this.goList();
      }); 
    } catch (error) {
      console.log(error);
    }
  }
  
}

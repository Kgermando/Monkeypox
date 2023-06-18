import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { LocalService } from 'src/app/shared/services/local.service';
import { UserModel } from 'src/app/users/models/user-models';
import { StructureService } from '../structure.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-structure-edit',
  templateUrl: './structure-edit.component.html',
  styleUrls: ['./structure-edit.component.scss']
})
export class StructureEditComponent {
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
    private route: ActivatedRoute,
    private localStore: LocalService,
    private structureService: StructureService,
    private router: Router) { }

  ngOnInit(): void {
    var userId: any = this.localStore.getData('auth')
      this.authService.user(parseInt(userId)).subscribe(
        res => {
            this.currentUser = res; 
        }
      );
    this.formGroup = this._formBuilder.group({
        nom_complet: [''],
        single: [''],
        manager: ['']
    });

    this.id = this.route.snapshot.params['id'];
    this.structureService.get(this.id).subscribe(user => {
        this.formGroup.patchValue({ // load data to form
          nom_complet: user.nom_complet,
          single: user.single,
          manager: user.manager,  
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
      this.structureService.update(this.id, this.formGroup.getRawValue())
      .subscribe({
        next: () => {
          this.router.navigate(['/layouts/reglages/structure-list']);
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

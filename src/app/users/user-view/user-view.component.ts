import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user-models';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  isLoading = false;

  user: UserModel = {
    id: undefined,
    structure: undefined,
    photo: undefined,
    nom: undefined,
    postnom: undefined,
    prenom: undefined,
    sexe: undefined,
    nationalite: undefined,
    etat_civile: undefined,
    adresse: undefined,
    titre: undefined,
    pays: undefined,
    province: undefined,
    zone_sante: undefined,
    email: undefined,
    telephone: undefined,
    matricule: undefined,
    password: undefined,
    signature: undefined,
    created: undefined,
    update_created: undefined
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private usersService: UsersService) {}

  ngOnInit(): void {
    this.isLoading = true;
    let id = this.route.snapshot.paramMap.get('id');
    this.usersService.getDataById(Number(id)).subscribe(res => {
      this.user = res;
      this.isLoading = false;

      console.log(this.user);
    });
  }

  
}

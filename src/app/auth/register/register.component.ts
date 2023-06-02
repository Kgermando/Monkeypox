import { Component, OnInit } from '@angular/core';
import { CustomizerSettingsService } from "src/app/common/customizer-settings/customizer-settings.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Countries } from 'src/app/shared/models/country.model';
import { countries } from 'src/app/shared/utils/countries';

interface Sexe {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

    hide = true;

    isLoading: boolean = false;
        countries: Countries[] = countries;

    sexes: Sexe[] = [
        { value: 'Femme', viewValue: 'Femme' },
        { value: 'Homme', viewValue: 'Homme' },
    ];

    identiteFormGroup!: FormGroup; 


    constructor(
        public themeService: CustomizerSettingsService,
        private _formBuilder: FormBuilder,
        private http: HttpClient,
        private router: Router,
        private authService: AuthService
    ) { }


    ngOnInit(): void {
        this.identiteFormGroup = this._formBuilder.group({
            structure: ['', Validators.required],
            // photo: [''],
            nom: ['', Validators.required],
            postnom: ['', Validators.required],
            prenom: ['', Validators.required],
            sexe: ['', Validators.required],
            nationalite: ['', Validators.required],
            etat_civile: ['', Validators.required],
            adresse: ['', Validators.required],
            titre: ['', Validators.required],
            // pays: ['', Validators.required],
            province: ['', Validators.required],
            zone_sante: ['', Validators.required],
            email: ['', Validators.required],
            telephone: ['', Validators.required],
            matricule: ['', Validators.required],
            password: ['', Validators.required],
            password_confirm: ['', Validators.required],
        });
    }

 

    onSubmitIdentite() {
        console.log("reactive form submitted");
        console.log(this.identiteFormGroup);
        if (this.identiteFormGroup.valid) {
            this.isLoading = true;
            var body = {
                structure: this.identiteFormGroup.value.structure,
                photo: '-',
                nom: this.identiteFormGroup.value.nom,
                postnom: this.identiteFormGroup.value.postnom,
                prenom: this.identiteFormGroup.value.prenom,
                sexe: this.identiteFormGroup.value.sexe,
                nationalite: this.identiteFormGroup.value.nationalite,
                etat_civile: this.identiteFormGroup.value.etat_civile,
                adresse: this.identiteFormGroup.value.adresse,
                titre: this.identiteFormGroup.value.titre,
                pays: 'RDC',
                province: this.identiteFormGroup.value.province,
                zone_sante: this.identiteFormGroup.value.zone_sante,
                email: this.identiteFormGroup.value.email,
                telephone: this.identiteFormGroup.value.telephone,
                matricule: this.identiteFormGroup.value.matricule,
                password: this.identiteFormGroup.value.password,
                password_confirm: this.identiteFormGroup.value.password_confirm,
                signature: '-',
                created: new Date(),
                update_created: new Date()
            };
            console.log(body);
            this.authService.register(body).subscribe(() => {
                this.isLoading = false;
                this.router.navigate(['/dashboard']);
            });
        }
    }
}

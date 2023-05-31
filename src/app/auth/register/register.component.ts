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
            photo: [''],
            nom: ['', Validators.required],
            postnom: ['', Validators.required],

            prenom: ['', Validators.required],
            sexe: ['', Validators.required],

            date_naissance: ['', Validators.required],
            lieu_naissance: ['', Validators.required],
            nationalite: ['', Validators.required],

            email: ['', Validators.required],
            telephone: ['', Validators.required],

            etat_civile: ['', Validators.required],
            nbr_enfant: ['', Validators.required],

            nbr_dependants: ['', Validators.required],
            nbr_dependants_max: ['', Validators.required],

            adresse: ['', Validators.required],

            // matricule: [''],
            // numero_cnss: [''],
            // role: [''],
            // departement: [''],
            // title: [''],
            // fonction: [''],
            // services: [''],
            // site_location: [''],
            // type_contrat: [''],
            // date_debut_contrat: [''],
            // date_fin_contrat: [''],
            // salaire: [''],
            // compte_bancaire: [''],
            // nom_banque: [''],
            // frais_bancaire: [''],
            // statut_personnel: [''],
            // cv_url: [''],
            // signature: [''],
            // // created: [''],
            // // update_created: [''],
            // statut_presence: [''],
            // syndicat: [''],
        });
    }



    onSubmitIdentite() {
        console.log("reactive form submitted");
        console.log(this.identiteFormGroup);
        if (this.identiteFormGroup.valid) {
            this.isLoading = true;
            var body = {
                photo: this.identiteFormGroup.value.photo,
                nom: this.identiteFormGroup.value.nom,
                postnom: this.identiteFormGroup.value.postnom,
                prenom: this.identiteFormGroup.value.prenom,
                sexe: this.identiteFormGroup.value.sexe,
                date_naissance: this.identiteFormGroup.value.date_naissance,
                lieu_naissance: this.identiteFormGroup.value.lieu_naissance,
                nationalite: this.identiteFormGroup.value.nationalite,
                email: this.identiteFormGroup.value.email,
                telephone: this.identiteFormGroup.value.telephone,
                etat_civile: this.identiteFormGroup.value.etat_civile,
                nbr_enfant: this.identiteFormGroup.value.nbr_enfant,
                nbr_dependants: this.identiteFormGroup.value.nbr_dependants,
                nbr_dependants_max: this.identiteFormGroup.value.nbr_dependants_max,
                adresse: this.identiteFormGroup.value.adresse,
                matricule: '1234',
                numero_cnss: '1234',
                role: '1',
                departement: 'DP',
                title: '-',
                fonction: '-',
                services: '-',
                site_location: '-',
                type_contrat: '-',
                date_debut_contrat: this.identiteFormGroup.value.date_naissance,
                date_fin_contrat: this.identiteFormGroup.value.date_naissance,
                salaire: 0,
                compte_bancaire: '-',
                nom_banque: '-',
                frais_bancaire: 0,
                statut_personnel: false,
                cv_url: '-',
                signature: '-',
                created: new Date(),
                update_created: new Date(),
                password: '1234',
                password_confirm: '1234',
                statut_presence: false,
                syndicat: false 
            };
            this.authService.register(body).subscribe(() => {
                this.isLoading = false;
                this.router.navigate(['/dashboard']);
            });
        }
    }
}

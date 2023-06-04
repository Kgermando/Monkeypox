import { Component, OnInit } from '@angular/core';
import { CustomizerSettingsService } from "src/app/common/customizer-settings/customizer-settings.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Countries } from 'src/app/shared/models/country.model';
import { countries } from 'src/app/shared/utils/countries';
import { StructureService } from 'src/app/reglage/structures/structure.service';
import { StructureModel } from 'src/app/reglage/models/structure-model';

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

    formGroup!: FormGroup;

    structureList: StructureModel[] = [];


    constructor(
        public themeService: CustomizerSettingsService,
        private _formBuilder: FormBuilder,
        private router: Router,
        private authService: AuthService,
        private structureService: StructureService,
    ) { }


    ngOnInit(): void {
        // this.structureService.getList().subscribe(res => {
        //     this.structureList = res;
        // });
        this.formGroup = this._formBuilder.group({
            structure: ['ASBL', Validators.required],
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
        console.log(this.formGroup);
        if (this.formGroup.valid) {
            this.isLoading = true;
            var body = {
                structure: this.formGroup.value.structure,
                photo: '-',
                nom: this.formGroup.value.nom,
                postnom: this.formGroup.value.postnom,
                prenom: this.formGroup.value.prenom,
                sexe: this.formGroup.value.sexe,
                nationalite: this.formGroup.value.nationalite,
                etat_civile: this.formGroup.value.etat_civile,
                adresse: this.formGroup.value.adresse,
                titre: this.formGroup.value.titre,
                pays: 'RDC',
                province: this.formGroup.value.province,
                zone_sante: this.formGroup.value.zone_sante,
                email: this.formGroup.value.email,
                telephone: this.formGroup.value.telephone,
                matricule: this.formGroup.value.matricule,
                password: this.formGroup.value.password,
                password_confirm: this.formGroup.value.password_confirm,
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

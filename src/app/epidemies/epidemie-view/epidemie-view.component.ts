import { Component, OnInit } from '@angular/core';
import { EpidemieModel } from '../models/epidemie-model';
import { CustomizerSettingsService } from 'src/app/common/customizer-settings/customizer-settings.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EpidemieService } from '../epidemie.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-epidemie-view',
  templateUrl: './epidemie-view.component.html',
  styleUrls: ['./epidemie-view.component.scss']
})
export class EpidemieViewComponent implements OnInit {

  isLoading = false;

  epidemie: EpidemieModel;

  constructor(
    public themeService: CustomizerSettingsService,
    private route: ActivatedRoute, 
    private _snackBar: MatSnackBar,
    private router: Router, 
    private epidemieService: EpidemieService) {}


    ngOnInit(): void {
      this.isLoading = true;
      let id = this.route.snapshot.paramMap.get('id');
      this.epidemieService.get(Number(id)).subscribe(res => {
        this.epidemie = res;
        this.isLoading = false;
  
        console.log(this.epidemie);
        console.log(id);
      });
    }
  
    toggleTheme() {
      this.themeService.toggleTheme();
    }

    delete(id: number): void {
      if (confirm('Voulez-vous vraiment supprimer cet element ?')) {
        this.epidemieService.delete(id).subscribe(() => { 
          this.router.navigate(['/layouts/epidemies/epidemie-list']);
          this._snackBar.open("Cet élement a été supprimé!", "ok");
        });
      }
    }
  

}

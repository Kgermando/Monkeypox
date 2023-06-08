import { Component, HostListener, OnInit } from '@angular/core';
import { ToggleService } from './toggle.service'; 
import { DatePipe } from '@angular/common';
import { CustomizerSettingsService } from '../customizer-settings/customizer-settings.service';
import { AuthService } from 'src/app/auth/auth.service';
import { UserModel } from 'src/app/users/models/user-models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSticky: boolean = false;
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= 50) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }
    }

    isToggled = false;

    loading = false;
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

    
    constructor(
        private toggleService: ToggleService,
        private datePipe: DatePipe,
        public themeService: CustomizerSettingsService,
        private authService: AuthService
    ) {
        this.toggleService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }


    ngOnInit(): void {
        this.authService.user().subscribe(
            res => {
                console.log(res);
                this.currentUser = res; 
            }
        )
    }

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    toggle() {
        this.toggleService.toggle();
    }

    toggleSidebarTheme() {
        this.themeService.toggleSidebarTheme();
    }

    toggleHideSidebarTheme() {
        this.themeService.toggleHideSidebarTheme();
    }

    toggleCardBorderTheme() {
        this.themeService.toggleCardBorderTheme();
    }

    toggleHeaderTheme() {
        this.themeService.toggleHeaderTheme();
    }

    toggleCardBorderRadiusTheme() {
        this.themeService.toggleCardBorderRadiusTheme();
    }

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

    currentDate: Date = new Date();
    formattedDate: any = this.datePipe.transform(this.currentDate, 'dd MMMM yyyy');
}

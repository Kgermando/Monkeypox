import { CanActivateFn } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);

  if (localStorage.getItem('auth')) {
    return true;
  } else {
    authService.isLoggIn();
    return false;
  }



};

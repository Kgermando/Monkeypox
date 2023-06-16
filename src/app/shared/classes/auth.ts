import {EventEmitter} from '@angular/core'; 
import { UserModel } from 'src/app/users/models/user-models';

export class Auth {
  static userEmitter = new EventEmitter<UserModel>();
  public static user: UserModel;
}

import {Injectable} from '@angular/core';
import {User} from 'firebase/app';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
import {NotificationService} from "../services/notification.service";
import {DialogService} from "../services/dialog.service";

@Injectable()
export class AuthService {
  user: User;

  constructor(public angularFire: AngularFireAuth, private router: Router,
              private notification: NotificationService,
              private dialogService: DialogService) {

    angularFire.authState.subscribe(user => {
      this.user = user;
    });
  }

  login(email: string, password: string) {
    this.angularFire.auth
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this.router.navigate(['/todoTask']);
      })
      .catch(err => {
        console.log(err);

        this.dialogService.openErrorDialog(err);
      });
  }

  signup(email: string, password: string) {
    this.angularFire.auth
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user);
      })
      .catch(err => {
        console.log(err);
        this.notification.warn(err);
      });
  }

  logout() {
    this.angularFire.auth.signOut();
  }
}

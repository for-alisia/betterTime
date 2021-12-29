import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}

  async onLogin() {
    this.authService.login();
    const loadingEl = await this.loadingCtrl.create({
      keyboardClose: true,
      message: 'Logging in',
    });
    loadingEl.present();

    setTimeout(() => {
      loadingEl.dismiss();
      this.router.navigateByUrl('/places/discover');
    }, 2000);
  }

  onSignUp() {
    this.authService.signUp();
    setTimeout(() => {
      this.router.navigateByUrl('/places/discover');
    }, 2000);
  }
}

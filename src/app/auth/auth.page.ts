import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NgForm, FormBuilder, Validators } from '@angular/forms';

enum AuthMode {
  login = 'login',
  signUp = 'signup',
}
@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  mode: typeof AuthMode = AuthMode;
  authMode = AuthMode.login;
  authForm = this.fb.group({
    test: ['', Validators.minLength(6)],
    name: ['', Validators.minLength(3)],
    email: ['', Validators.email],
    password: ['', Validators.minLength(6)],
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private fb: FormBuilder
  ) {}

  ngOnInit() {}

  async onSubmit() {
    console.log(this.authForm);
    if (!this.authForm.valid) {
      return;
    }

    this.authService.login();
    const loadingEl = await this.loadingCtrl.create({
      keyboardClose: true,
      message:
        this.authMode === this.mode.login ? 'Logging in...' : 'Signing up...',
    });
    loadingEl.present();

    setTimeout(() => {
      loadingEl.dismiss();
      this.router.navigateByUrl('/places/discover');
    }, 2000);
  }

  onSwitchMode(mode: AuthMode) {
    if (this.authMode === mode) {
      return;
    }

    this.authMode =
      this.authMode === this.mode.login ? this.mode.signUp : this.mode.login;
  }

  onLogin() {
    if (this.authMode === this.mode.login) {
      return;
    }

    this.authMode = this.mode.login;
  }
}

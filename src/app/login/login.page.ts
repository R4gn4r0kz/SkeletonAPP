import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true, 
  imports: [CommonModule, FormsModule, IonicModule], 
})
export class LoginPage {
  constructor() {}

  onLogin() {
    console.log('Inicio de sesión realizado');

  }
}
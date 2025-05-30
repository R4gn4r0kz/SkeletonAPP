import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule
  ],
  animations: [
    trigger('inputAnim', [
      state('none', style({ transform: 'translateX(0)' })),
      state('move', style({ transform: 'translateX(0)' })),
      transition('none => move', [
        animate('1s', style({ transform: 'translateX(100px)' })),
        animate('0s', style({ transform: 'translateX(0)' }))
      ])
    ]),
    trigger('titleAnim', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.7)' }),
        animate('600ms', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class HomePage {
  usuario: string = '';
  form: FormGroup;
  animateInputs = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      nombre: [''],
      apellido: [''],
      nivel: [''],
      fechaNacimiento: ['']
    });

    // Rescata usuario desde NavigationExtras
    const nav = this.router.getCurrentNavigation();
    if (nav && nav.extras.state && nav.extras.state['usuario']) {
      this.usuario = nav.extras.state['usuario'];
    }
  }

  limpiar() {
    this.form.reset();
    this.animateInputs = false;
    setTimeout(() => this.animateInputs = true, 0);
    setTimeout(() => this.animateInputs = false, 1000);
  }

  mostrar() {
    const nombre = this.form.value.nombre;
    const apellido = this.form.value.apellido;
    alert(`Su nombre es ${nombre} ${apellido}`);
  }
}
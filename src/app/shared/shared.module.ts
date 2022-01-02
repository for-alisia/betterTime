import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule],
  exports: [InputComponent],
})
export class SharedModule {}

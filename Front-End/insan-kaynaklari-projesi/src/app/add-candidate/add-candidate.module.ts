import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddCandidatePageRoutingModule } from './add-candidate-routing.module';
import { AddCandidatePage } from './add-candidate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // Form desteği için eklenmeli
    IonicModule,
    AddCandidatePageRoutingModule
  ],
  declarations: [AddCandidatePage]
})
export class AddCandidatePageModule {}

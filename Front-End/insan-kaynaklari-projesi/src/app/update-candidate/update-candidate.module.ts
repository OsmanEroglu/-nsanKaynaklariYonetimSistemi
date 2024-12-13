import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateCandidatePageRoutingModule } from './update-candidate-routing.module';

import { UpdateCandidatePage } from './update-candidate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateCandidatePageRoutingModule
  ],
  declarations: [UpdateCandidatePage]
})
export class UpdateCandidatePageModule {}

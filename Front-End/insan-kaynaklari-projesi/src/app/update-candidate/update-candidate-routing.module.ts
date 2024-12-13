import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateCandidatePage } from './update-candidate.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateCandidatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateCandidatePageRoutingModule {}

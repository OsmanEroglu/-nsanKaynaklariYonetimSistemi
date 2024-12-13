import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'candidates',
    pathMatch: 'full'
  },
  {
    path: 'candidates',
    loadChildren: () => import('./candidates/candidates.module').then( m => m.CandidatesPageModule)
  },
  {
    path: 'add-candidate',
    loadChildren: () => import('./add-candidate/add-candidate.module').then( m => m.AddCandidatePageModule)
  },
  {
    path: 'update-candidate',
    loadChildren: () => import('./update-candidate/update-candidate.module').then( m => m.UpdateCandidatePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

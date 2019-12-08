import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'group1',
    loadChildren: () => import('./group1/group1.module').then( m => m.Group1PageModule)
  },
  {
    path: 'group2',
    loadChildren: () => import('./group2/group2.module').then( m => m.Group2PageModule)
  },
  {
    path: 'group3',
    loadChildren: () => import('./group3/group3.module').then( m => m.Group3PageModule)
  },
  {
    path: 'group4',
    loadChildren: () => import('./group4/group4.module').then( m => m.Group4PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

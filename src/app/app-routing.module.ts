import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IonicModule } from '@ionic/angular';
import { AddComponent } from './pages/add/add.component';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tabs/tab1/tab1.module').then(m => m.Tab1PageModule)
  },

  {
    path: 'tab3',
    loadChildren: () => import('./tabs/tab3/tab3.module').then(m => m.Tab3PageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tabs/tab4/tab4.module').then(m => m.Tab4PageModule)
  },
  {
    path: 'tab5',
    loadChildren: () => import('./tabs/tab5/tab5.module').then(m => m.Tab5PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tabs/tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  { path: 'add', component: AddComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), IonicModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

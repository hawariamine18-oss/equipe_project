import { Routes } from '@angular/router';
import { Equipe } from './equipe/equipe';
import { AddJoueur } from './add-joueur/add-joueur';
import { UpdateJoueur } from './update-joueur/update-joueur';

export const routes: Routes = [
  { path: 'equipe', component: Equipe },
  { path: 'add-joueur', component: AddJoueur },
  { path: 'updateJoueur/:id', component: UpdateJoueur },
  { path: '', redirectTo: 'equipe', pathMatch: 'full' }
];
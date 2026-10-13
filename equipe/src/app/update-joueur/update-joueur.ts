import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Joueur } from '../model/equipe.model';
import { JoueurService } from '../services/joueur';

@Component({
  selector: 'app-update-joueur',
  imports: [FormsModule, DatePipe],
  templateUrl: './update-joueur.html',
})
export class UpdateJoueur implements OnInit {
  currentJoueur = new Object() as Joueur;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private joueurService: JoueurService
  ) {}

  ngOnInit() {
    this.currentJoueur = this.joueurService.consulterJoueur(
      this.activatedRoute.snapshot.params['id']
    );
  }

  updateJoueur() {
    this.joueurService.updateJoueur(this.currentJoueur);
    this.router.navigate(['equipe']);
  }
}
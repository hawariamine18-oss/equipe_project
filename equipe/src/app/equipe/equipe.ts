import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Joueur } from '../model/equipe.model';
import { JoueurService } from '../services/joueur';

@Component({
  selector: 'app-equipe',
  imports: [CommonModule, RouterLink],
  templateUrl: './equipe.html',
})
export class Equipe implements OnInit {
  equipe!: Joueur[];

  constructor(private joueurService: JoueurService) {
    this.equipe = joueurService.listerJoueur();
  }

  ngOnInit() {}

  supprimerJoueur(j: Joueur) {
    let conf = confirm("etes_vous sur ?");
    if (conf)
        this.joueurService.supprimerJoueur(j);
  }
}
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Joueur } from '../model/equipe.model';
import { JoueurService } from '../services/joueur';
import { niveau } from '../model/niveau.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-joueur',
  imports: [FormsModule],
  templateUrl: './add-joueur.html',
  styleUrl: './add-joueur.css'
})
export class AddJoueur {
  newJoueur = {} as Joueur;
  message!: string;
  niveaux!: niveau[];
  newIdNiv!: number;
  newNiveau!: niveau;
  constructor(private joueurService: JoueurService
              ,private router: Router          
  ) { }

  ngOnInit() {
    this.niveaux = this.joueurService.listeNiveau();
    
  }

  addJoueur() {
    this.newNiveau = this.joueurService.consulterCategorie(this.newIdNiv);
    this.joueurService.consulterCategorie(this.newIdNiv);
    this.newJoueur.niveau = this.newNiveau;
    this.joueurService.ajouterJoueur(this.newJoueur);
    this.router.navigate(['equipe']);
  }
}
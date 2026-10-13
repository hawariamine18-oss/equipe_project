import { Injectable } from '@angular/core';
import { Joueur } from '../model/equipe.model';
import { niveau } from '../model/niveau.model';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {
  joueurs: Joueur[]; 

  joueur!: Joueur;
  niveau! : niveau[];
  constructor() {

    this.niveau = [
      { idNiv: 1, nomNiv: 'junior' },
      { idNiv: 2, nomNiv: 'espoire' },
      { idNiv: 3, nomNiv: 'senior' }
    ];

    this.joueurs = [
      { numerojoueur: 11, nomjoueur: 'youssef', prixjoueur: 3000, datedenaissance: new Date('1985-01-10') ,niveau : { idNiv: 1, nomNiv: 'junior' }},
      { numerojoueur: 12, nomjoueur: 'mouhamed', prixjoueur: 2500, datedenaissance: new Date('1990-12-12') ,niveau : { idNiv: 2, nomNiv: 'espoire' }},
      { numerojoueur: 13, nomjoueur: 'hamza', prixjoueur: 1000, datedenaissance: new Date('1995-12-05') ,niveau : { idNiv: 3, nomNiv: 'senior' }}
    ];
  }

  listerJoueur(): Joueur[] {
    return this.joueurs;
  }

  ajouterJoueur(joueur: Joueur) {
    this.joueurs.push(joueur);
  }

  supprimerJoueur(joueur: Joueur) {

    const index = this.joueurs.indexOf(joueur, 0);
    if (index > -1) {
      this.joueurs.splice(index, 1);
    }

  }

  consulterJoueur(id: number): Joueur {
    this.joueur = this.joueurs.find(j => j.numerojoueur == id)!;
    return this.joueur;
  }

 

  updateJoueur(j: Joueur) {
    this.supprimerJoueur(j);
    this.ajouterJoueur(j);
    
  }
  listeNiveau():niveau[] {
      return this.niveau;
}
  consulterCategorie(id:number): niveau{
      return this.niveau.find(niv => niv.idNiv == id)!;
}
}
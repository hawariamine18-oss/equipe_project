import { niveau } from "./niveau.model";

export interface Joueur {
  numerojoueur: number;
  nomjoueur?: string;
  prixjoueur?: number;
  datedenaissance?: Date;
  niveau?: niveau;
}
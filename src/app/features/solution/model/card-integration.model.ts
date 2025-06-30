import { WritableSignal } from "@angular/core";

export interface CardIntegration {
  image: string;
  frontIcon: string;
  frontTitle: string;
  frontDescription: string;
  backTitle: string;
  backDescription: string;
  isFlipped: WritableSignal<boolean>;
  route: string;
  fragment: string;
}
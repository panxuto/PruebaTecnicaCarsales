import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodesComponent } from './components/episodes/episodes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,        // Para *ngFor y otras directivas
    EpisodesComponent,   // Componente de episodios
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PruebaTecnicaCarsales';
}

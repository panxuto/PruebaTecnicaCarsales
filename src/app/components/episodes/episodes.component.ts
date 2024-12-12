import { Component, OnInit } from '@angular/core'; // Decorador y ciclo de vida
import { CommonModule } from '@angular/common'; // Para usar directivas como *ngFor y *ngIf
import { ApiService } from '../../services/api.service'; // Servicio para consumir la API
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-episodes',
  standalone: true,
  imports: [CommonModule,
            FormsModule, // Importar FormsModule para habilitar [(ngModel)]
  ],
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css'],
})
export class EpisodesComponent implements OnInit {
  episodes: any[] = []; // Todos los episodios
  filterText: string = ''; // Texto del filtro
  selectedEpisode: any = null; // Episodio seleccionado

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadEpisodes();
  }

  loadEpisodes(): void {
    this.apiService.getEpisodes().subscribe(
      (data: { results: any[] }) => {
        this.episodes = data.results; // Asigna los episodios
      },
      (error: any) => {
        console.error('Error al obtener episodios:', error);
      }
    );
  }

  clearFilter(): void {
    this.filterText = ''; // Limpia el texto del filtro
    this.selectedEpisode = '';
  }

  get filteredEpisodes(): any[] {
    return this.episodes.filter((episode) =>
      episode.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }

  onSelectEpisode(episode: any): void {
    this.selectedEpisode = episode; // Almacena el episodio seleccionado
  }
}

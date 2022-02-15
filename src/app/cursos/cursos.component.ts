import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  nomePortal: string;

  cursos: string[];

  constructor(private service: CursosService) {
    this.nomePortal = 'http://loiane.trainning';

    this.cursos = this.service.getCursos();
  }

  ngOnInit(): void {}
}

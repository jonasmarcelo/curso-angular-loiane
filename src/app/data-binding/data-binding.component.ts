import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {

  url: string = 'https://agilizeodonto.com.br';
  cursoAngular: boolean = true;
  urlImagem: string = 'https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_960_720.jpg';

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  constructor() {}

  ngOnInit(): void {}
}

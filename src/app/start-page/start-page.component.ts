import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SopaGeneratorService } from '../sopa-generator.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  palavras;
  linhas;
  colunas;

  constructor(
    private router : Router,
    private sopaService : SopaGeneratorService
  ) { }

  ngOnInit(): void {
    this.linhas = 10;
    this.colunas = 10;
  }

  generate(){
    this.sopaService.generate(this.linhas, this.colunas, this.palavras);
    this.router.navigate(['/sopa']);
  }
}

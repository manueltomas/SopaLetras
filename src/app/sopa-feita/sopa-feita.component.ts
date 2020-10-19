import { Component, OnInit } from '@angular/core';
import { SopaGeneratorService } from '../sopa-generator.service';

@Component({
  selector: 'app-sopa-feita',
  templateUrl: './sopa-feita.component.html',
  styleUrls: ['./sopa-feita.component.css']
})
export class SopaFeitaComponent implements OnInit {

  sopaLetras;

  constructor(
    private sopaService : SopaGeneratorService) { }

  ngOnInit(): void {
    this.sopaLetras = this.sopaService.resultString;
  }

}

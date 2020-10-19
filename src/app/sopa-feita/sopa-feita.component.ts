import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SopaGeneratorService } from '../sopa-generator.service';

@Component({
  selector: 'app-sopa-feita',
  templateUrl: './sopa-feita.component.html',
  styleUrls: ['./sopa-feita.component.css']
})
export class SopaFeitaComponent implements OnInit {

  sopaLetras;

  constructor(
    private router : Router,
    private sopaService : SopaGeneratorService) { }

  ngOnInit(): void {
    this.sopaLetras = this.sopaService.resultString;
    if(this.sopaLetras == undefined || this.sopaLetras == [] || this.sopaLetras == [[]]){
      this.router.navigate(['inicial'])
    }
  }

}

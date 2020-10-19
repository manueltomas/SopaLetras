import { Injectable } from '@angular/core';
import { Palavra } from './palavra';

@Injectable({
  providedIn: 'root'
})
export class SopaGeneratorService {

  resultString;
  constructor() { }

  generate(x, y, words:string){
    var result = [];
    this.populate(result, x, y);
    const aux = words.split(" ");
    this.insert(result, aux);
    //this.resultString = this.arrayToString(result);
    this.resultString = result;
    console.log(this.resultString);
  }

  populate(array, x, y){
    for (let i = 0; i < x; i++) {
      array.push([]);
      for (let j = 0; j < y; j++) {
        var aux = Math.random() * 25 + 65;
        var char = String.fromCharCode(aux);
        array[i].push(char);
      }
    }
  }

  insert(array : any[][], words : string[]){
    var posicoes : Palavra[] = [];
    words.forEach(palavra => {
      console.log("Palavra: " + palavra);
      palavra = palavra.toUpperCase();
      var position :number = Math.round(Math.random());
      console.log(position);
      if(position == 0){
        var x = Math.round(Math.random() * (array.length - 1));
        var y = Math.round(Math.random() * ((array[x].length - 1) - palavra.length));
        while(this.verifyCollision(x,y,position,palavra.length, posicoes)){
          x = Math.round(Math.random() * (array.length - 1));
          y = Math.round(Math.random() * ((array[x].length - 1) - palavra.length));
        }
        posicoes.push({
          posicoes: this.makePoints(x,y,position,palavra.length)
        })
        console.log(posicoes);
        for (let i = y; i < palavra.length + y; i++) {
          array[i][x] = palavra.charAt(i - y);
        }
      }else{
        var x = Math.round(Math.random() * ((array.length - 1) - palavra.length));
        var y = Math.round(Math.random() * (array[x].length - 1));
        while(this.verifyCollision(x,y,position,palavra.length, posicoes)){
          x = Math.round(Math.random() * ((array.length - 1) - palavra.length));
          y = Math.round(Math.random() * (array[x].length - 1));
        }
        posicoes.push({
          posicoes: this.makePoints(x,y,position,palavra.length)
        })
        console.log(posicoes);
        for (let i = x; i < palavra.length + x; i++) {
          array[y][i] = palavra.charAt(i - x);
        }
      }
    });
  }
  
  verifyCollision(x: number, y: number, position: number, length: number, posicoes: Palavra[]) {
    //console.log(posicoes);
    for(var i = 0; i < posicoes.length; i++){
      const palavra = posicoes[i];
      if(this.colides(x,y,position,length, palavra)){
        return true;
      }
    }
    return false;
  }
  
  colides(x: number, y: number, position: number, length: number, palavra:Palavra) {
    var aux = this.makePoints(x,y,position,length);
    for(var i = 0; i < aux.length; i++){
      const value = aux[i];
      for(var j = 0; j < palavra.posicoes.length; j++){
        const string = palavra.posicoes[j];
        console.log(value);
        console.log(string);
        console.log(value === string);
        if(value === string){
          console.log("deu true");
          return true;
        }
      }
    }
    return false;
  }
  
  makePoints(x,y,position,length){
    var aux = [];
    if(position == 0){
      for (let i = y; i < y + length; i++){
        aux.push("(" + x + "," + i + ")");
      }
    }else{
      for (let j = x; j < x + length; j++) {
        aux.push("(" + j + "," + y + ")");        
      }
    }
    return aux;
  }

  arrayToString(array : any[][]){
    var result = "";
    array.forEach(linha => {
      linha.forEach(coluna => {
        result = result.concat(coluna + " ");
      });
      result = result.concat("\n");
    });
    return result;
  }
  /*
    private String arrayToString(char[][] array) {
        StringBuilder sBuilder = new StringBuilder();
        for (char[] linha : array) {
            for (char coluna : linha) {
                sBuilder.append(coluna + " ");
            }
            sBuilder.deleteCharAt(sBuilder.length()-1);
            sBuilder.append('\n');
        }
        return sBuilder.toString();
    }
  */
}

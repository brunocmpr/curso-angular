import { Component, Input, OnChanges, SimpleChanges, } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  //Não será utilizado o diretamente array "photos" como modelo para renderização
  //pois há fotos demais e ele estoura o limite de 12 colunas do bootstrap.
  //Portanto quebraremos em rows.
  @Input() photos: Photo[] = [];
  rows: any = [];

  constructor() { }


  ngOnChanges(changes: SimpleChanges): void { //SimpleChanges contem todas as mudanças que chegam às inbound properties,
                                              //mesmo após a instanciacao deste objeto
                                              //Se entendi bem, também deve executar logo de inicio como ngOnInit
    if(changes.photos){
      this.rows = this.groupColumns(this.photos);
    }
  }
  
  groupColumns(photos: Photo[]): any[] {
    const newRows:any = [];

    for(let index=0; index<photos.length; index+=3){
      newRows.push( photos.slice(index, index+3) );
    }

    return newRows;
  }

}

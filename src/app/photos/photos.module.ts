import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PhotoComponent } from "./photo/photo.component";
import { PhotoService } from "./photo/photo.service";
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';

@NgModule({
    declarations:[
        PhotoComponent,
        PhotoListComponent,
        PhotoFormComponent
    ],
    imports:[
        HttpClientModule,
        CommonModule,   //SEMPRE IMPORTAR COMMONMODULE em qualquer modulo que criar.
                        //O BrowserModule é quem permite o uso de diretivas como ngIf e ngFor, mas este só pode ser
                        //importado 1x na aplicacao, e pelo visto é sempre em AppModule. Entao aqui só podemos importar
                        //esse submodulo de BrowserModule, o CommonModule. Então a boa prática é SEMPRE importar este módulo.
    ],
    // exports: [
    //     PhotoComponent  //1. pelo visto alem de declarar o componente em "declarations",
    //                     //precisamos também exportar ele aqui... meio que os declarations
    //                     //sao declaracoes privadas a este modulo, e durante este comentario
    // ],                  //precisei usar esse componente em AppComponent
    // ], //2. pude comentar isso ao retirar esse componente de AppComponent
    providers:[
        PhotoService,
    ]
})
export class PhotosModule{

}
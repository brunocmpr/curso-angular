import { NgModule } from "@angular/core";

import { PhotoService } from "./photo/photo.service";
import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';

@NgModule({
    declarations:[
    ],
    imports:[
        PhotoModule,
        PhotoFormModule,
        PhotoListModule,
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
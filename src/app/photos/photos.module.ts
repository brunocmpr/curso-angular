import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";
import { PhotoService } from "./photo/photo.service";

@NgModule({
    declarations:[
        PhotoComponent
    ],
    exports: [
        PhotoComponent  //pelo visto alem de declarar o componente em "declarations",
                        //precisamos também exportar ele aqui... meio que os declarations
                        //sao declaracoes privadas
    ],
    providers:[
        PhotoService,
    ]
})
export class PhotosModule{

}
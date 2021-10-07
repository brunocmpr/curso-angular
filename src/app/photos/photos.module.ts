import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";

@NgModule({
    declarations:[
        PhotoComponent
    ],
    exports: [
        PhotoComponent  //pelo visto alem de declarar o componente em "declarations",
                        //precisamos também exportar ele aqui... meio que os declarations
                        //sao declaracoes privadas
    ]
})
export class PhotosModule{

}
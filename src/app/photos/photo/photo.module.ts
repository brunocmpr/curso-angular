import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo.component';

@NgModule({
    declarations: [
        PhotoComponent,
    ],
    imports: [
        CommonModule,   //SEMPRE IMPORTAR COMMONMODULE em qualquer modulo que criar, pelo menos os que tiverem componentes filhos diretos.
                        //Senão não precisa
                        //O BrowserModule é quem permite o uso de diretivas como ngIf e ngFor, mas este só pode ser
                        //importado 1x na aplicacao, e pelo visto é sempre em AppModule. Entao aqui só podemos importar
                        //esse submodulo de BrowserModule, o CommonModule. Então a boa prática é SEMPRE importar este módulo.
        HttpClientModule,
    ],
    exports: [ PhotoComponent ] //Esse componente precisa ser exportado porque outro módulo o instanciará via sua tag HTML.
                                //Não é necessário exportar se outro modulo nao chamará sua tag, que é o caso do modulo de rotas!
})
export class PhotoModule{

}
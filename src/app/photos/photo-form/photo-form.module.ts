import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoFormComponent } from './photo-form.component';

@NgModule(
    {
        declarations: [
            PhotoFormComponent,
        ],
        imports: [
            CommonModule,   //SEMPRE IMPORTAR COMMONMODULE em qualquer modulo que criar, pelo menos os que tiverem componentes filhos diretos.
                        //Senão não precisa
                        //O BrowserModule é quem permite o uso de diretivas como ngIf e ngFor, mas este só pode ser
                        //importado 1x na aplicacao, e pelo visto é sempre em AppModule. Entao aqui só podemos importar
                        //esse submodulo de BrowserModule, o CommonModule. Então a boa prática é SEMPRE importar este módulo.
        ]
    }
)
export class PhotoFormModule{

}
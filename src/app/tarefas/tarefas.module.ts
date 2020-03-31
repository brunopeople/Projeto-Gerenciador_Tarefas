import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared';
import { ListarTarefaComponent } from './listar-tarefa/listar-tarefa.component';
import { CadastroTarefaComponent } from './cadastro-tarefa/cadastro-tarefa.component';
import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';

@NgModule({
  imports: [
    CommonModule
  ],

  declarations: [ListarTarefaComponent, CadastroTarefaComponent, EditarTarefaComponent],
  providers: [
  	TarefaService
  ]
})
export class TarefasModule { }

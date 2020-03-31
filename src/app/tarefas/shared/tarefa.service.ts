import { Injectable } from '@angular/core';
import { Tarefa } from './';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

/*  listarTodo(): Tarefa[]{
  	const tarefas: localStorage['tarefas'];
  	return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastrar(tarefa: Tarefa):void {
  	const tarefas = this.listarTodos();
  	tarefa.id = new Date().getTime();
  	tarefas.push(tarefa);
  	localStorage['tarefas'] = JSON.strigify(tarefas);
  }

  buscarPorId(id: number): Tarefa {
  	const tarefas: Tarefa[] = this.listarTodos();
  	return tarefas.find(tarefa => tarefa.id === id);
  }

*/
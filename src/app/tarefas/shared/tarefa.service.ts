import { Injectable } from '@angular/core';
import { Tarefa } from './';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

/**
* Metodo listarTodo onde ele guarda um array de objetos chamado de tarefa e depois 
retorna este array como um objeto JSON. 
*/

  listarTodo(): Tarefa[]{
  	const tarefas: localStorage['tarefas'];
  	return tarefas ? JSON.parse(tarefas) : [];
  }
/**
* metodo que realiza os cadastro da tarefa e listar as tarefas cadastradas, ele recebe
um método chamado tarefa e retorna como nulo, a const recebe a variavel tarefas e lista.Após
isto ela pega o atributo id da variavel tarefa e atualiza com a hora e data em que ela foi cadastrada
em seguida a constante chama o método push para que o dado seja inserido no Array como ultimo da lista. Por fim
estou pegando o objeto tarefas no localStorage e em seguida convertendo em string e imprimindo como objeto JSON.
*/
  cadastrar(tarefa: Tarefa):void {
  	const tarefas = this.listarTodos();
  	tarefa.id = new Date().getTime();
  	tarefas.push(tarefa);
  	localStorage['tarefas'] = JSON.strigify(tarefas);
  }

/**
* O método buscarPorId ele recebe parametro id atributo como do tipo numero e retorna 
como objeto Tarefa nela a constante tarefas e recebe o instaceamento  do metodo listarTodos 
e daí retorna o itinetário do array tarefa e encontra a tarefa com atributo id. 
*/
  buscarPorId(id: number): Tarefa {
  	const tarefas: Tarefa[] = this.listarTodos();
  	return tarefas.find(tarefa => tarefa.id === id);
  }

/**
*  O metodo atualizar é responsável por buscar o objeto do localStorage 
	identificalo pelo id e atualizar o objeto. O método recebe Tarefa e retorna o array Tarefa
	em seguida ele lista os elementos que estão no array tarefa, mas para cada elemento cadastro 
	ele tem que fazer uma busca de qual objeto ele tem que atualizar, a constante ele chama o metodo forEach
	e atraves parametos obj, que é o objeto que está contido no array, o index é a posicao em que o objeto
	e o obj que é o proprio array do objeto. No if ele procura a tarefa pelo atributo id e pergunta se o id do obj 
	for igual ao objeto iterado então retorna. Apos isto ele retorna o objeto para o localStorage atualizado. 
*/
atualizar(tarefa: Tarefa):void {
	const tarefas:Tarefa[] = this.listarTodos();
	tarefas.forEach((obj, index, objs) => {
		if(tarefa.id === obj.id){
			objs[index] = tarefa;
		}
	});
	localStorage['tarefas'] = JSON.stringify(tarefas);
}

/**
* o método remover é responsável pela remoção do objeto no array. Neste ele array 
chama o método filter que faz a filtragem de objeto de acordo com uma condição e nesta
condição perguntamos se o id do objeto da tarefa for diferente do id, senão ele permanece na lista
se for então ele é removido da lista.
*/
remover(id: number):void {
	let tarefas: Tarefa[] = this.listarTodos();
	tarefas = tarefas.filter(tarefa => tarefa.id !== id);
	localStorage['tarefas'] = JSON.stringify(tarefas);
}


/**
* Já o método alterarStatus que tem a lógica bem parecida 
* porém a diferença é que na tarefa que chama o método foreach ele pergunta se 
*  se o id é igual ao id do objeto do array se sim, retorna a posição atual do objeto
* no array 
*/
alterarStatus(id:number):void {
	const tarefas: Tarefa[] = this.listarTodos();
	tarefas.forEach(obj,index,objs) => {
		if( id === obj.id){
			obj[index].concluida = !obj.concluida;
		}
	}
}
*/
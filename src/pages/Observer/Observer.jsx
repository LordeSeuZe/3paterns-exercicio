/* 
Exercício 3: Notificar (Padrão Observer)

O Problema: A função de postar vídeo de um canal do YouTube está chamando diretamente as funções dos usuários específicos (ex: notificarJoao().... notificarMaria()...). Se o canal ganhar 100 inscritos novos, teremos que alterar a função principal 100 vezes.

A Tarefa: Desacople o código! Crie um array vazio chamado inscritos. Faça a função do canal apenas percorrer esse array notificando todos que estiverem lá dentro, sem que ela precise saber o nome de quem está sendo avisado.
*/
import './Observer.scss'
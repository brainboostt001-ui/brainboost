export interface Flashcard {
  id: string;
  pergunta: string;
  resposta: string;
  categoria: string;
  dificuldade: 'fácil' | 'médio' | 'difícil';
  dataCriacao: Date;
}

export type Dificuldade = 'fácil' | 'médio' | 'difícil';
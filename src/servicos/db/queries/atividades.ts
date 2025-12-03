import supabase from "../db.config";

export async function buscarTodos(tabela: string) {
  const { data, error } = await supabase
    .from(tabela)
    .select('*');

  if (error) {
    console.error('Erro ao buscar dados:', error.message);
    return { success: false, error: error.message, data: null };
  }

  return { success: true, data };
}

/**
 * Buscar um registro específico por ID
 */
export async function buscarPorId(tabela: string, id: number | string) {
  const { data, error } = await supabase
    .from(tabela)
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Erro ao buscar registro:', error.message);
    return { success: false, error: error.message, data: null };
  }

  return { success: true, data };
}

/**
 * Inserir um novo registro
 */
export async function inserirRegistro(tabela: string, dados: Record<string, any>) {
  const { data, error } = await supabase
    .from(tabela)
    .insert([dados])
    .select();

  if (error) {
    console.error('Erro ao inserir registro:', error.message);
    return { success: false, error: error.message, data: null };
  }

  return { success: true, data: data[0] };
}

/**
 * Atualizar um registro
 */
export async function atualizarRegistro(
  tabela: string,
  id: number | string,
  dados: Record<string, any>
) {
  const { data, error } = await supabase
    .from(tabela)
    .update(dados)
    .eq('id', id)
    .select();

  if (error) {
    console.error('Erro ao atualizar registro:', error.message);
    return { success: false, error: error.message, data: null };
  }

  return { success: true, data: data[0] };
}

/**
 * Deletar um registro
 */
export async function deletarRegistro(tabela: string, id: number | string) {
  const { error } = await supabase
    .from(tabela)
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Erro ao deletar registro:', error.message);
    return { success: false, error: error.message };
  }

  return { success: true };
}

/**
 * Buscar com filtros
 */
export async function buscarComFiltros(
  tabela: string,
  filtros: Record<string, any>
) {
  let query = supabase.from(tabela).select('*');

  // Aplicar filtros dinamicamente
  Object.entries(filtros).forEach(([campo, valor]) => {
    query = query.eq(campo, valor);
  });

  const { data, error } = await query;

  if (error) {
    console.error('Erro ao buscar com filtros:', error.message);
    return { success: false, error: error.message, data: null };
  }

  return { success: true, data };
}

/**
 * Buscar com ordenação
 */
export async function buscarOrdenado(
  tabela: string,
  campoOrdenacao: string,
  ordem: 'asc' | 'desc' = 'asc'
) {
  const { data, error } = await supabase
    .from(tabela)
    .select('*')
    .order(campoOrdenacao, { ascending: ordem === 'asc' });

  if (error) {
    console.error('Erro ao buscar ordenado:', error.message);
    return { success: false, error: error.message, data: null };
  }

  return { success: true, data };
}

/**
 * Buscar com limite e paginação
 */
export async function buscarComPaginacao(
  tabela: string,
  pagina: number = 1,
  itensPorPagina: number = 10
) {
  const inicio = (pagina - 1) * itensPorPagina;
  const fim = inicio + itensPorPagina - 1;

  const { data, error, count } = await supabase
    .from(tabela)
    .select('*', { count: 'exact' })
    .range(inicio, fim);

  if (error) {
    console.error('Erro ao buscar com paginação:', error.message);
    return { success: false, error: error.message, data: null, total: 0 };
  }

  return {
    success: true,
    data,
    total: count || 0,
    pagina,
    totalPaginas: Math.ceil((count || 0) / itensPorPagina),
  };
}
import { loginUsuario, cadastrarUsuario, logoutUsuario } from "./db/queries/usuarios";
import { buscarTodos, buscarPorId, inserirRegistro, atualizarRegistro, deletarRegistro, buscarComFiltros, buscarOrdenado, buscarComPaginacao } from "./db/queries/atividades";
const servicos = {
    loginUsuario,
    cadastrarUsuario,
    logoutUsuario, 
    buscarTodos,
    buscarPorId,
    inserirRegistro,
    atualizarRegistro,
    deletarRegistro,
    buscarComFiltros,
    buscarOrdenado,
    buscarComPaginacao
}

export { servicos }
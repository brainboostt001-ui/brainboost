import { loginUsuario, cadastrarUsuario, logoutUsuario, getUsuarioAtual } from "./db/queries/usuarios";
import { buscarTodos, buscarPorId, inserirRegistro, atualizarRegistro, deletarRegistro, buscarComFiltros, buscarOrdenado, buscarComPaginacao } from "./db/queries/atividades";
const servicos = {
    loginUsuario,
    cadastrarUsuario,
    logoutUsuario,
    getUsuarioAtual,
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
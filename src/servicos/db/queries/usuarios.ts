import supabase from "../db.config";

export async function loginUsuario(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error('Erro ao fazer login:', error.message);
    return { success: false, error: error.message };
  }

  return { success: true, data };
}

export async function cadastrarUsuario(email: string, password: string, type?: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        type: type || '',
      },
    },
  });

  if (error) {
    console.error('Erro ao cadastrar:', error.message);
    return { success: false, error: error.message };
  }

  return { success: true, data };
}

export async function logoutUsuario() {
  const { error } = await supabase.auth.signOut();
  
  if (error) {
    console.error('Erro ao fazer logout:', error.message);
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function getUsuarioAtual() {
  const { data: { user }, error } = await supabase.auth.getUser();
  
  if (error) {
    console.error('Erro ao obter usuário:', error.message);
    return null;
  }

  return user;
}
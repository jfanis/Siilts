# Git está usando credenciais erradas!

## Problema
Git está tentando autenticar como "joao9993" mas o repositório pertence a "jfanis".

## Solução Rápida: Usar SSH (Recomendado)

### 1. Mudar para SSH
```bash
git remote set-url origin git@github.com:jfanis/Siilts.git
git push -u origin main
```

Se pedir para adicionar o host, digite `yes`.

---

## Alternativa: Usar Token no URL

### 1. Criar Personal Access Token
1. Vá para: https://github.com/settings/tokens/new
2. Nome: "Siilts Deploy"
3. Marque: `repo` (full control)
4. Click "Generate token"
5. **COPIE O TOKEN** (você não verá novamente!)

### 2. Usar o Token
```bash
git remote set-url origin https://SEU_TOKEN_AQUI@github.com/jfanis/Siilts.git
git push -u origin main
```

Substitua `SEU_TOKEN_AQUI` pelo token que você copiou.

---

## Solução Manual: Limpar Credenciais

```bash
# Limpar credenciais antigas
git credential reject

# Depois tente o push novamente
git push -u origin main
```

Quando pedir:
- **Username**: `jfanis`
- **Password**: Use o Personal Access Token

---

## Método Mais Simples: Git Credential Manager

```bash
# Configurar para o repositório específico
git config credential.helper store
git push -u origin main
```

Isso vai pedir usuário/senha uma vez e salvar.

**Username**: jfanis  
**Password**: Seu Personal Access Token (não a senha da conta)

---

## Recomendação

Use SSH! É mais seguro e não precisa ficar digitando senha:

```bash
git remote set-url origin git@github.com:jfanis/Siilts.git
git push -u origin main
```

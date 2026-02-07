# Deploy para Vercel

## Passo a Passo

### 1. Preparação Local
O projeto já está configurado para deploy na Vercel. Certifique-se de que:
- ✅ O build funciona: `npm run build`
- ✅ O `vercel.json` está configurado para SPA routing

### 2. Deploy via CLI (Recomendado)

```bash
# Instalar Vercel CLI globalmente
npm install -g vercel

# Fazer login
vercel login

# Deploy de produção
vercel --prod
```

### 3. Deploy via Dashboard da Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com GitHub/GitLab/Bitbucket
3. Clique em "Add New Project"
4. Importe o repositório
5. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Clique em "Deploy"

### 4. Configurações Importantes

O arquivo `vercel.json` já está configurado para:
- Redirecionar todas as rotas para `/index.html` (SPA routing)
- Build automático via Vite

### 5. Domínio Customizado (Opcional)

Após o deploy:
1. Vá em Settings > Domains
2. Adicione seu domínio personalizado
3. Configure os DNS conforme instruções da Vercel

## Troubleshooting

**Página em branco após deploy:**
- Verifique se o `build` está gerando corretamente o arquivo `dist/index.html`
- Confirme que o `vercel.json` tem o rewrite configurado

**Erros de roteamento:**
- O HashRouter do React Router está configurado, então todas as rotas devem funcionar
- Se mudar para BrowserRouter, o `vercel.json` já está preparado

## Variáveis de Ambiente (se necessário)

Se você tiver variáveis de ambiente (como `VITE_API_URL`):
1. Vá em Settings > Environment Variables
2. Adicione as variáveis necessárias
3. Faça um novo deploy

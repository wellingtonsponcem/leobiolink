# Histórico de Desenvolvimento - Leonardo Barcelos Investor Hub

Este arquivo registra o andamento das tarefas e decisões tomadas para manter a sincronização com outras IDEs.

## Padrões de Desenvolvimento
- **Framework/Build:** Vite (Vanilla JS) + Tailwind CSS v4.
- **Testes:** Property-Based Testing com `fast-check` e runner `vitest`.
- **Hospedagem:** Preparado para Vercel (arquivos estáticos gerados em `dist`).
- **Aesthetics:** Dark mode, glassmorphism, micro-interações táteis e paralaxe de mesh no desktop.

## Progresso e Registro de Atividades
- **2026-07-09:**
  - Recuperado o código HTML gerado no Stitch (`524477b8efa04249b547bc351e5335fe`).
  - Inicializado o projeto Vite (Vanilla JS) usando a diretiva `--overwrite` e `--no-interactive`.
  - Instalado o Vite e dependências de desenvolvimento (`tailwindcss`, `@tailwindcss/vite`, `vitest`, `fast-check`).
  - Configurado o compilador Tailwind v4 no arquivo `vite.config.js`.
  - Criado o arquivo `index.html` adaptando a estrutura sem CDN.
  - Criado o arquivo `src/style.css` mapeando os tokens de design (cores, fontes, espaçamentos) e estilos de paralaxe/cards.
  - Implementada a lógica de micro-interações e cálculo puro de paralaxe do mouse em `src/main.js`.
  - Criados testes baseados em propriedades (Property-Based Testing) com `fast-check` no arquivo `src/main.test.js` para garantir integridade matemática do paralaxe.
  - Validados testes (`npm run test`) e build de produção (`npm run build`) com sucesso.
  - **Correção Visual:** Adicionada a classe `.profile-mask` (`mask-image` com gradiente de opacidade vertical) no container da imagem do cabeçalho.
  - **Atualização de Imagem:** Substituída a URL remota da foto do cabeçalho pela imagem local `photo_2026-07-09_18-40-45.jpg` no diretório de recursos da aplicação (`/src/assets/`).
  - **Novo Link e Subsite:** Movida a pasta local `/site/` para `/public/site/` (pasta estática do Vite) e atualizado o link de "Meu Modelo de Negócios" para apontar para `/site/`.
  - **Integração WhatsApp:** Configurado o link "Seja um Investidor" e "Falar com a Assessoria" para apontar para o WhatsApp `+55 27 99578-9223` com copies personalizadas.
  - **Atualização do Logotipo:** Copiado o arquivo `logo_fidelity-P-M.svg` para a pasta estática `/public/site/asset/` e atualizado o subsite.
  - **Favicon Global:** Copiado o arquivo `favicon.png` para a raiz de `/public/` e linkado no cabeçalho.
  - **Versão Desktop Ajustada:** Mesclado o layout desktop do Stitch (`36c9a97a77534fea9db13ea2245a3ef6`) com o layout mobile.
  - **Alteração Imagem Desktop:** Substituída a imagem do hero desktop por `/src/assets/hero_desktop.png` e removidos os efeitos de máscara CSS (`.profile-mask-desktop`), renderizando a imagem estática de forma direta e limpa no Hero de desktop.
  - **Melhorias de Script:** Atualizado `src/main.js` para gerenciar a classe dinâmica no scroll da TopNavBar de desktop e a animação de revelação suave (`IntersectionObserver`) de cards.

---
*Instrução para outra IDE:* Mantenha este arquivo atualizado em português, respeitando o limite de 70 linhas, documentando todas as principais alterações, arquitetura de testes (fast-check) e decisões sobre o design.

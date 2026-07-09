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
  - **Correção Visual:** Adicionada a classe `.profile-mask` (`mask-image` com gradiente de opacidade vertical) no container da imagem do cabeçalho. Isso suaviza a transição da foto na base para transparente em vez de cor sólida `#101415`, eliminando a linha divisória horizontal reta visível durante a rolagem (scroll) sobre o fundo dinâmico `.bg-mesh`.
  - **Atualização de Imagem:** Substituída a URL remota da foto do cabeçalho pela imagem local `photo_2026-07-09_18-40-45.jpg` no diretório de recursos da aplicação (`/src/assets/`), garantindo otimização de build, cacheamento de produção e controle direto do ativo de imagem estática.
  - **Novo Link e Subsite:** Movida a pasta local `/site/` para `/public/site/` (pasta estática do Vite) e atualizado o link de "Meu Modelo de Negócios" para apontar para `/site/`, permitindo o build unificado e hospedagem sem erros 404 na Vercel.
  - **Integração WhatsApp:** Configurado o link "Seja um Investidor" e "Falar com a Assessoria" para apontar para o WhatsApp `+55 27 99578-9223`, integrando mensagens personalizadas focadas nas métricas de investimento da Fidelity (3% de dividendos mensais, tese em postos de combustíveis e aquisição de equity).
  - **Atualização do Logotipo:** Copiado o arquivo `logo_fidelity-P-M.svg` para a pasta estática `/public/site/asset/` e atualizado o link de referência no HTML do subsite (`/public/site/index.html`) para substituir o arquivo anterior de logotipo.

---
*Instrução para outra IDE:* Mantenha este arquivo atualizado em português, respeitando o limite de 70 linhas, documentando todas as principais alterações, arquitetura de testes (fast-check) e decisões sobre o design.

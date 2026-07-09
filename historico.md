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

---
*Instrução para outra IDE:* Mantenha este arquivo atualizado em português, respeitando o limite de 70 linhas, documentando todas as principais alterações, arquitetura de testes (fast-check) e decisões sobre o design.

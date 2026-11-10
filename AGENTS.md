# AGENTS.md — DevLinks

## Papel
Você é um desenvolvedor front-end React responsável pelo projeto **DevLinks**: uma página
de links pessoais (estilo "link na bio") com avatar, @usuário, seletor de tema,
quatro botões de link, ícones de redes sociais e rodapé.

O usuário é **iniciante em React**. Responda sempre em **português**, de forma didática.

## Objetivo
Reproduzir **fielmente** o design do Figma "DevLinks • OpenCode MiniProject"
(telas desktop e mobile, nos modos claro e escuro), como uma aplicação React responsiva.

## Tecnologias
- React + Vite (template `react`, JavaScript — sem TypeScript).
- CSS comum (um arquivo `.css` por componente ou um `index.css` global com variáveis).
- Fonte **Inter** via Google Fonts.
- Ícones: **Phosphor Icons** (sol/lua do tema) e **Ionicons** (redes sociais),
  conforme indicado no Style Guide do Figma.

## Design de referência (extraído do Figma)

### Cores (tokens)
| Token | Dark mode | Light mode |
| --- | --- | --- |
| `--text-color` | `#FFFFFF` | `#000000` |
| `--stroke-color` | `#FFFFFF` 50% (`rgba(255,255,255,.5)`) | `#000000` 50% (`rgba(0,0,0,.5)`) |
| `--surface-color` | `#FFFFFF` 10% | `#000000` 5% |
| `--surface-color-hover` | `#FFFFFF` 5% | `#000000` 2% |
| `--highlight-color` | `#FFFFFF` 20% | `#000000` 10% |

O fundo da página é uma **imagem de fundo** (gradiente roxo/rosa), com uma versão
desktop e uma mobile para cada tema. Os arquivos ficam em `src/assets/` (fornecidos pelo aluno).

### Tipografia
- Família: **Inter**
- `text-md`: 16px / line-height 24px / peso 500 (Medium) — botões e @usuário
- `text-sm`: 14px / line-height 24px / peso 400 (Regular) — rodapé

### Layout (medidas aproximadas, conferir no Figma)
- Frames: desktop ~1440px de largura, mobile ~360px.
- Conteúdo centralizado em uma coluna; no desktop os botões têm ~540px de largura,
  no mobile ocupam a largura com ~24px de margem lateral.
- Avatar circular ~112px, com borda em gradiente (roxo → azul).
- Botões com ~56px de altura, ~16px de espaço entre eles, cantos arredondados (~8px).
- Ordem vertical: Avatar → @usuário → Switch de tema → 4 botões → ícones sociais → rodapé.

### Componentes e estados
- **Avatar:** imagem circular com borda em gradiente.
- **Switch (ThemeToggle):** trilho com bolinha. No modo escuro a bolinha fica à esquerda
  com ícone de lua; no modo claro, à direita com ícone de sol. Hover/pressed: halo
  ao redor da bolinha.
- **Button (LinkButton):** default = fundo `--surface-color` + borda `--stroke-color`;
  hover/pressed = fundo `--surface-color-hover` + borda na cor do texto.
- **Social links:** ícone simples; hover/pressed = círculo de fundo `--highlight-color`.

### Conteúdo da tela
- @usuário: `@seu.perfil`
- Botões: "Inscreva-se no Curso", "Baixe meu e-book", "Veja meu portfólio", "Conheça meu curso"
- Redes sociais: GitHub, Instagram, YouTube, LinkedIn
- Rodapé: "Feito com ❤ por ..."

## Estrutura esperada
```
src/
  assets/            # avatar e imagens de fundo (fornecidos pelo aluno)
  components/
    Profile.jsx      # avatar + @usuário
    ThemeToggle.jsx  # switch de tema
    LinkButton.jsx   # um botão de link
    LinkList.jsx     # lista de LinkButton gerada com map()
    SocialLinks.jsx  # ícones sociais gerados com map()
    Footer.jsx
  data/
    profile.js       # TODOS os dados pessoais ficam aqui
  App.jsx            # guarda o estado do tema
```

## Regras
- Componentes **pequenos e reutilizáveis**, um por arquivo.
- Passe dados por **Props**; nada de textos ou URLs fixos dentro dos componentes.
- Botões e redes sociais são renderizados a partir de **arrays** com `map()` e `key` única.
- Tema controlado com **`useState`** no `App.jsx`, alternado por um **evento** `onClick`.
- Salve o tema em **`localStorage`** e leia o valor salvo ao carregar a página.
- Aplique o tema trocando uma classe ou atributo (ex.: `data-theme="light"`) e
  **variáveis CSS** — não duplique estilos.
- HTML **semântico**: `<main>`, `<header>`, `<nav>`, `<footer>`, `<ul>/<li>`, `<a>`, `<button>`.
- Links externos com `target="_blank"` e `rel="noopener noreferrer"`.
- Acessibilidade: `alt` no avatar, `aria-label` nos ícones e no switch.
- Responsivo com abordagem **mobile-first** e media query para desktop.
- Código legível para iniciantes: nomes claros e comentários curtos onde ajudar.

## Dados a preencher pelo aluno
Use valores de exemplo e marque cada um com `// TODO: preencher` em `src/data/profile.js`:
- `username` (@usuário) e `name` (usado no `alt` e no rodapé)
- `avatar` (arquivo em `src/assets/`)
- Os 4 links: texto e `url` de cada botão
- As 4 redes sociais: `url` de GitHub, Instagram, YouTube e LinkedIn
Nunca invente dados pessoais reais.

## Fluxo de trabalho
Siga sempre: **analisar → planejar → implementar UMA tarefa → testar → corrigir**.
1. Antes de escrever código, explique a próxima tarefa e quais arquivos serão alterados.
2. Implemente apenas essa tarefa. Não faça tudo de uma vez.
3. Ao final, explique o que mudou (citando Props, estado e eventos quando houver)
   e como o aluno pode testar.
4. Sugira a mensagem de commit e espere o aluno confirmar antes de avançar.

Ordem das tarefas (Board de Desenvolvimento):
01 Explorar o Figma · 02 Criar o React com Vite · 03 AGENTS.md · 04 Context7 ·
05 Perfil e componentes · 06 Links com Props e map() · 07 Tema claro/escuro ·
08 Mobile e desktop · 09 Validar com Playwright · 10 Publicar no GitHub.
Construa primeiro a interface estática; interações depois.

## Ferramentas
- **Context7 MCP:** consulte a documentação antes de usar `useState`, Props, `useEffect`,
  `localStorage` ou qualquer biblioteca. Diga ao aluno o que consultou.
- **Playwright MCP:** depois de cada tarefa visual, abra `http://localhost:5173` e:
  - confirme que a página carrega sem erros no console;
  - clique no switch e verifique a troca de tema;
  - recarregue e confirme que o tema foi mantido;
  - confira o `href` de cada link;
  - tire screenshots em 1440px (desktop) e 360px (mobile) e compare com o Figma.

## Cuidados
- Explique toda mudança; o aluno precisa entender o código.
- **Não adicione bibliotecas** sem necessidade; se precisar, explique o motivo e peça aprovação.
- **Não invente elementos** que não estão no Figma (sem nome completo, bio, cards extras etc.).
- Não apague nem reescreva arquivos que não fazem parte da tarefa atual.
- Se algo do Figma estiver ambíguo, pergunte em vez de supor.

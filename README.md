# Portifolio Depilmoni

Site institucional e catalogo visual da Depilmoni, desenvolvido com React, Vite e Tailwind CSS. A pagina apresenta a marca, produtos, cursos, canais de contato e localizacao.

## Tecnologias

- React 19
- Vite
- Tailwind CSS
- Lucide React
- React Icons

## Como rodar localmente

Instale as dependencias:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Gere a build de producao:

```bash
npm run build
```

Visualize a build localmente:

```bash
npm run preview
```

## Estrutura principal

- `src/components/Header.jsx`: navegacao fixa, identidade visual e chamada para contato.
- `src/components/Hero.jsx`: primeira dobra, secao sobre, catalogo de produtos e cursos.
- `src/components/Footer.jsx`: contatos, redes sociais, endereco e mapa.
- `src/index.css`: fontes, comportamento de scroll e estilos globais.
- `public/imagens/`: imagens usadas na pagina.
- `public/imagens/catalogo-produtos/`: imagens tratadas para o catalogo.

## Atualizacoes visuais recentes

- Header redesenhado com contraste marrom/cobre e logo tipografica.
- Hero reorganizado com imagem principal responsiva, selo de curso presencial e indicadores de confianca.
- Secao "Sobre nos" refinada com hierarquia tipografica e melhor leitura.
- Catalogo de produtos atualizado com cards horizontais, imagens tratadas e textos preservados.
- Footer redesenhado com logo, descricao, contatos, redes sociais, mapa e copyright.
- Paleta, botoes e fontes padronizados para uma experiencia mais consistente em desktop e mobile.

## Fontes e paleta

- Titulos: `Cormorant Garamond`.
- Textos: `DM Sans`.
- Logo textual: `Poiret One`.
- Cores principais:
  - Marrom escuro: `#431f13`
  - Cobre: `#C2752F`
  - Dourado suave: `#d7b48a`
  - Fundo claro: `#fff8f0` / `#fff5eb`

## Cuidados de seguranca

- Nao versionar senhas, tokens, chaves de API ou dados sensiveis.
- Nao inserir credenciais em componentes React, arquivos CSS, imagens ou comentarios.
- Links externos devem usar `target="_blank"` com `rel="noopener noreferrer"` quando abrirem nova aba.
- O mapa usa embed publico do Google Maps; nao ha chave de API exposta no codigo.
- Links de WhatsApp e Instagram sao publicos e devem ser revisados antes de publicar alteracoes de contato.
- Imagens do catalogo devem ser revisadas antes de entrar no repositorio para remover elementos de origem, metadados sensiveis ou informacoes privadas.
- Arquivos temporarios, logs locais e builds geradas nao devem ser enviados se nao fizerem parte da entrega.

## Validacao antes de publicar

Execute:

```bash
npm run build
```

Opcionalmente execute:

```bash
npm run lint
```

Depois confira a pagina localmente nos principais pontos:

- `#home`
- `#sobre`
- `#produtos`
- `#cursos`
- `#contato`

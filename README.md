[![Read in English](https://img.shields.io/badge/Language-Read_in_English-blue)](README.en.md)

# Portfólio Corporativo e Showcase de Projetos

Este projeto é um portfólio voltado para o ambiente de negócios, projetado para apresentar soluções técnicas, arquiteturas de sistemas e lógicas de desenvolvimento de forma limpa e objetiva. A estrutura foi pensada para facilitar a manutenção e a escalabilidade, permitindo a adição de novos projetos e conteúdos sem a necessidade de criar novas páginas ou alterar o fluxo de roteamento.

## Funcionalidades Principais

A aplicação possui um sistema de showcase dinâmico. Todos os projetos exibidos, desde sistemas de gestão e APIs RESTful até mecânicas complexas de jogos por turnos, são renderizados a partir de uma fonte de dados centralizada. Esse modelo simula o comportamento de um banco de dados e agiliza a atualização do site de forma constante.

Para facilitar a navegação de recrutadores e profissionais da área, a página principal conta com uma barra de pesquisa textual e filtros por tecnologias. Esses parâmetros de filtro refletem automaticamente na URL do navegador. Dessa forma, é possível copiar o link de uma busca específica e compartilhar diretamente com terceiros, mantendo o contexto exato da pesquisa.

O site também é integralmente bilíngue. Utilizando a Context API, a troca entre português e inglês ocorre de forma instantânea em toda a interface e na base de dados dos projetos, sem recarregamento de página. O design construído é totalmente responsivo, adaptando a estrutura de navegação em cascata e a exibição dos cartões de projeto perfeitamente para a tela de dispositivos móveis.

## Arquitetura e Tecnologias

O projeto foi construído sobre o ecossistema do Next.js, utilizando o padrão App Router para o gerenciamento eficiente e nativo das rotas. O TypeScript foi adotado em toda a base de código para garantir tipagem estática, reduzindo falhas de execução e documentando as estruturas de dados e contratos de interfaces de forma clara.

A interface de usuário foi desenhada com Tailwind CSS. Essa escolha permitiu a criação de um visual sério e de alto contraste, adequado para o contexto corporativo, mantendo o código limpo e livre de arquivos de estilização externos complexos. A separação de responsabilidades foi rigorosamente mantida, isolando os componentes visuais, as regras de contexto de idioma e as fontes de dados estáticas.

## Estrutura de Diretórios

A organização do código segue as melhores práticas para aplicações Next.js modernas. Toda a lógica de desenvolvimento está concentrada dentro do diretório src. As rotas e layouts globais residem na pasta app. Os blocos visuais interativos ficam em components, a lógica de gerenciamento de estado global em contexts, as definições de tipagem em types, e a base de dados simulada em data.

## Como Executar o Projeto

Para rodar esta aplicação em um ambiente local, é necessário ter o Node.js instalado. Após clonar o repositório, navegue até a pasta raiz e instale as dependências executando o comando `npm install`. Em seguida, inicie o servidor de desenvolvimento com o comando `npm run dev`. O portfólio estará acessível no navegador através do endereço `http://localhost:3000`.

## Autor

Desenvolvido por Thiago Caputi. Profissional com foco em desenvolvimento back-end, criação de APIs e estruturação de sistemas para internet, aliando conhecimento técnico em tecnologias como JavaScript e integração de banco de dados com metodologias ágeis para a resolução de problemas reais de negócios.

- ##### < !DOCTYPE html >:

  indica ao navegador que ele está lidando com um arquivo no formato HTML;

- ##### < html >:

  é a raiz do documento, então todos os elementos devem estar contidos dentro desta tag;

- ##### < head >:

  A tag head contém elementos que serão lidos pelo navegador, como os metadados - um exemplo é o charset, que é a codificação de caracteres e a mais comum é a UTF-8, o JavaScript com a tag script, o CSS através das tags style e link - veremos a diferença quando falarmos sobre CSS - e o título da página com a tag title.

- ##### < body >:

  dentro desta tag é onde colocamos todo o conteúdo visível ao usuário, como textos, imagens, vídeos etc;	

- ##### < section >:

  representa uma seção genérica de conteúdo quando não há nenhum outro elemento específico para isso;

- ##### < header >:

  é o cabeçalho da página, onde normalmente se encontra o logotipo, menu, campo de busca etc;

- ##### < article >:

  representa um conteúdo de maior importância na página, como um post, uma notícia na barra lateral ou um bloco de comentários. Pode conter outros elementos, como header, footer, parágrafos e imagens;

- ##### < aside >:

  seção que engloba conteúdos relacionados ao conteúdo principal, como artigos relacionados, biografia do autor e publicidade. Normalmente são representados por barras laterais;

- ##### < footer >:

  representa o rodapé do conteúdo ou de parte dele, pois é aceito dentro de vários elementos, como por exemplo as informações de autor e links relacionados a um article;
  
- ##### < h >:

  indica a importância do título, sendo h1 o mais importante e o h6 o menos importante. Boas práticas: utilizar apenas um h1 por página, pois ele identifica o objetivo da mesma;

- ##### < p >:

  é utilizado para inserção de textos, que ao contrário dos títulos, são mais densos. O elemento < p > representa um parágrafo, mas além de textos podemos adicionar imagens, código, vídeos etc.

  Sintaxe: < p >Conteudo do artigo </ p >

- ##### < a >:

  este elemento representa um hiperlink e é ele que interliga vários conteúdos e página na web.

  Ele possui vários atributos, mas os mais importantes são:

  - href: que é o hiperlink para onde a âncora deve apontar, podendo ser uma página do seu ou de outro site, um email e até mesmo um telefone;

    ex:

    <a href="linkedin.com/in/mariane-carvalho-6690931b3/">LinkedIn</a>

    <a href="mailto:mscarvall@gmail.com">Email</a>

    

  - target: ajuda a abrir os links em outra página do navegador, utilizando o prefixo '_blank'.
  
- ##### < img >:

  é utilizada para inserir imagens na pagina e contem 2 atributos próprios:

  - src: é de uso obrigatório e indica onde a imagem que será inserida está;

  - alt: não é obrigatório, mas é de boa prática que se utilize, pois ele dá uma descrição da imagem, caso a mesma não carregue.

    sintaxe: < img src = "caminho_imagem" alt = "descrição da imagem" >

- ##### Listas:

  Servem para agrupar uma coleção de itens e os tipos são:

  - < ul >: cria uma lista não ordenada, ou seja, cria uma lista em que a ordem dos itens não é importante e é representada com pontos, círculos ou quadrados;
  - < ol >: cria listas ordenadas, onde a ordem dos itens importa, portanto são representadas com números, letras ou algarismos romanos.
  - < li >: representa um item dentro dessas listas e pode conter vários tipos de conteúdo, como por exemplo parágrafos, imagens e até outras listas.

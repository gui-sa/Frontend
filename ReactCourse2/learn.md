# REACT DOCUMENTATION
 - https://pt-br.react.dev/


 # VITE
 - https://vite.dev/guide/


 # Hooks:

 ## useState:

 Quando se deseja algo dinâmico, ou seja, MUTÁVEL.
 Quando a variável se altera: ele gera um update das variáveis dentro da página.
 A ação de setar algo é ASSINCRONA! mais que isso ela não é uma promise ou tratada como uma função assincrona!... Para capturar esses casos: use o USEEFECT JUNTO!
 
## useEfect:

 Ele é um side efect, ou seja, opera logo após a montagem não impactando diretamente na montagem inicial da pagina.

 Curiosidade: ao testar em ambiente de desenvolvimento: os plots de montagem virão duplicados e isso se deve ao RESTRICT MODE que monta para testar e remonta para voce.

 useEffect (()=>{//executa somente uma vez ao carregar a pagina},[])
 useEffect (()=>{//executa somente uma vez ao carregar a pagina e sempre que a variavel YEAH for alterada},[YEAH])

 Não existe uma ordem de qual useEfect rodar primeiro...

## useRef:

 The useRef Hook Permite criar PERSISTÊNCIAS em variáveis entre as renderizações. Diferente do useState alterá-las não gera outra renderização.
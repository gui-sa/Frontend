const Challenge = ()=> {

    const a = 100;
    const b = 256;

    const soma = () =>{
        console.log(a + b);
    };


    return (
        <div>
            <h2>Agora é a hora do desafio, moçada!!</h2>
            <p>No Primeiro componente temos <b>a</b> valendo: {a} !!</p>
            <p>No Segundo componente temos <b>b</b> valendo: {b} !!</p>
            <button onClick={soma}>Clique Para Somá-los!</button>
        </div>

    );
};

export default Challenge;
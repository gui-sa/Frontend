function UserDetails({pessoas}) {
    const ChecarIdade = (age) => {
        if (age >= 18){
            return true;
        }else{
            return false;
        }
    }

    return (
    <div>
        {pessoas.map( (item) => <p key={item.id}><b>Nome:</b> {item.nome} - <b>Idade:</b> {item.idade} - <b>Profissão:</b> {item.profissao}</p> )}
        <h2>Idade para CNH?</h2>
        {pessoas.map( (item) => <p key={item.id}><b>{item.nome}:</b>   {ChecarIdade(item.idade)?("Pode tirar"):("Não pode tirar")}</p> )}
    </div>
  );
};

export default UserDetails;
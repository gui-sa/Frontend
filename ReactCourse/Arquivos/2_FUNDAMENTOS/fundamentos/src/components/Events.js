const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e);
    };
    const renderSomething= (x)=>{
        if(x) {
            return <h2>Renderizando x verdadeiro</h2>;
        }else{
            return <h2>Renderizando x falso</h2>;
        }
    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou!")}>Clique Aqui!!</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
};

export default Events;
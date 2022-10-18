const TemplateExpressions = () =>{
    
    const name = "Guilherme";
    const data = {
        age: 31,
        job: "Programmer",
    };
    
    return (
        <div>
            <p>Olá {name}!</p>
            <p>Voce atua como: {data.job}!</p>
            <p>{4 + 4}</p>
        </div>

    );
};

export default TemplateExpressions;
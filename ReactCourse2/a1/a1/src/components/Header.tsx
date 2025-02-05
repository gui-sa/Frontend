
interface headerProps  {
    title?: string;
}

export function Header({title="Hello World"}:headerProps){
    
    return(
        <h1>{title}</h1>
    );

}
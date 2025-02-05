import style from "./NumberInput.module.css"

interface numberInputProps{
    placeholder?:string,
    value:number,
    setValue:React.Dispatch<React.SetStateAction<number>>,
    name:string,
    id?:string,
    label:string,
}


export function NumberInput({placeholder,value, name, id, label,setValue}:numberInputProps){
    
    function checkValue(value:number):void{
        if(value<0){
            return ;
        }else{
            setValue(value);
        }
    }

    return(
        <label className={style.container}>
            {label}
            <input 
                type="number" 
                placeholder={placeholder} 
                value={value} 
                name={name} 
                id={id} 
                onChange={(e)=>{checkValue(Number(e.target.value))}}
                className={style.input}/>
        </label>

    );
}
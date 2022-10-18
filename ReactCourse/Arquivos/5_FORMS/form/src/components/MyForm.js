import './MyForm.css'

const MyForm = () => {
    return (
        <div>
            {/* 1- Criacao de form */}
            <form>
                <div>
                    <label htmlFor="name">Nome:
                        <input type="text" name="name" placeholder="Digite seu nome" />
                    </label>

                </div>
                <div>
                    <input type="submit" value="Enviar" />
                </div>
            </form>
        </div>
    )
}

export default MyForm
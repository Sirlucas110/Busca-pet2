import Input from '../../form/input'


function Register(){

    function handleChange(e){}
    return(
        <section>
            <h1>Registrar</h1>
            <form>
                <Input 
                text='Nome' 
                type='text' 
                name='name' 
                placeholder='Digite seu nome' 
                handleOnChanges={handleChange}
                />
                <Input 
                text='Telefone' 
                type='text' 
                name='phone' 
                placeholder='Digite seu nome' 
                handleOnChanges={handleChange}
                />
                <Input 
                text='
                E-mail' 
                type='email' 
                name='email' 
                placeholder='Digite seu e-mail' 
                handleOnChanges={handleChange}
                />
                <Input 
                text='
                E-mail' 
                type='email' 
                name='email' 
                placeholder='Digite seu e-mail' 
                handleOnChanges={handleChange}
                />
                <Input 
                text='
                Senha' 
                type='password' 
                name='password' 
                placeholder='Digite sua senha' 
                handleOnChanges={handleChange}
                />
                <Input 
                text='
                Confirmação de Senha' 
                type='password' 
                name='confirmpassword' 
                placeholder='Confirme sua senha' 
                handleOnChanges={handleChange}
                />
                <input type='submit' value='Cadatrar'/>
                    
                
                
                


            </form>
        </section>
    )


}

export default Register
import '../../stylesheets/contact.css'


const Form = (props) => {
    return (
        <div className="container">
            <div className="conatiner-header">
                <h1>Contacto 🤝</h1>
            </div>
            <form className="conatiner-form" action="https://formspree.io/f/xgegwdgj" method="POST">
                <label>
                    Correo electrónico:                    
                    <input type="email" name="email"/>
                </label>
                <label>
                    Mensaje:
                    <textarea name="message"></textarea>
                </label>
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default Form
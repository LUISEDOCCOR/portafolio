import Grid from '../../components/grid'

const certifications = [
    {
        'name': 'Crea páginas web con HTML y CSS',
        'text': 'Curso sobre cómo crear y maquetar páginas usando HTML y CSS',
        'link': 'https://www.mastermind.ac/certificates/67103e6b5b66470480a38a5f773caed1'
    },
    {
        'name': '¡Linux: de Noob a Pro en 9 horas!',
        'text': 'Sistemas operativos basados en Debian Linux.',
        'link': 'https://www.mastermind.ac/certificates/33290ab05fc14ed99e72c73613469b96'
    },
    {
        'name': 'Todo sobre la web con PHP',
        'text': 'Curso sobre cómo crear páginas usando PHP y MySQL',
        'link': 'https://www.mastermind.ac/certificates/5448a06270fa4afdb8da70dabe1f2ce8'
    },
    {
        'name': 'Frontend con HTML, CSS y JS',
        'text': 'Curso sobre cómo crear páginas usando HTML, CSS y JS',
        'link': 'https://www.mastermind.ac/certificates/551bc00405864777873a31006c8b55b5'
    },
    {
        'name': 'Desarrollo Desarrollo web Python Master en Python: Aprender Python 3, Django, Flask y Tkinter',
        'text': 'Curso sobre backend con django',
        'link': '/certificado-udemy-python.pdf'
    }
]


const  Certifications = () =>{
    return (
        <Grid title='Certificaciones 👨‍💻' cards={certifications} />
    )
}

export default Certifications
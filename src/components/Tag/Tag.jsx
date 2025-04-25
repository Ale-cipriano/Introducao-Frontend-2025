import './Tag.css'

export default function Tag(props) {
    /*
    Conteúdo do componente
    */

    const text = props.text;

    /*
    Return -> Encerra a função
    no ReactJS o terturn precisa devolver um componente JSX para ser exibido na tela.
    */

    return <div className="tag">{text}</div>
}
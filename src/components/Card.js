import { StyledCard } from "./styles/Card.styled"

export default function Card({ item: { id, title, body, image } }) {
    return(
        <StyledCard layout={id % 2 === 0 && 'row-reverse'}> 
            {/* Pega o ID e faz o resto da divisão por 2 pra ver se é par ou ímpar. Caso seja par, usa row-reverse no flex. Caso seja ímpar, mantém o que está no Card.styled.js */}
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>

            <div>
                <img src={`./images/${image}`} alt="" />
            </div>
        </StyledCard>
    )
}
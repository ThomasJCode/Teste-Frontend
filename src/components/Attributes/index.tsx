import S from './styled'

import QualityImg from '../../assets/Vector.png'
import ConfidenceImg from '../../assets/Vector2.png'
import ExperienceImg from '../../assets/Vector1.png'

const Attributes = () => {
    return (
        <S.Container>
            <S.BoxAttribute>
                <S.ImageAttribute src={QualityImg} alt="qualidade" />
                <S.TextTitle>Qualidade</S.TextTitle>
                <S.TextDescription>
                    Camisaria e Alfaiataria 100% artesanal.
                </S.TextDescription>
            </S.BoxAttribute>
            <S.ContainerLine />
            <S.BoxAttribute>
                <S.ImageAttribute src={ConfidenceImg} alt="confiança" />
                <S.TextTitle>Confiança</S.TextTitle>
                <S.TextDescription>
                    Atendimento personalizado no escritório ou residência..
                </S.TextDescription>
            </S.BoxAttribute>
            <S.ContainerLine />
            <S.BoxAttribute>
                <S.ImageAttribute src={ExperienceImg} alt="experiência" />
                <S.TextTitle>Experiência</S.TextTitle>
                <S.TextDescription>
                    Tradição e modernidade proporcionando elegância.
                </S.TextDescription>
            </S.BoxAttribute>
        </S.Container>
    );
}

export { Attributes };
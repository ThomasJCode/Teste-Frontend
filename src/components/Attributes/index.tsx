import S from './styled'

const Attributes = () => {
    return (
        <S.Container>
            <S.BoxAttribute>
                <S.ImageAttribute src="../../assets/Vector.png" alt="qualidade" />
                <S.TextTitle>Qualidade</S.TextTitle>
                <S.TextDescription>
                    Camisaria e Alfaiataria 100% artesanal.
                </S.TextDescription>
            </S.BoxAttribute>
            <S.ContainerLine />
            <S.BoxAttribute>
                <S.ImageAttribute src="../../assets/Vector2.png" alt="confiança" />
                <S.TextTitle>Confiança</S.TextTitle>
                <S.TextDescription>
                    Atendimento personalizado no escritório ou residência..
                </S.TextDescription>
            </S.BoxAttribute>
            <S.ContainerLine />
            <S.BoxAttribute>
                <S.ImageAttribute src="../../assets/Vector1.png" alt="experiência" />
                <S.TextTitle>Experiência</S.TextTitle>
                <S.TextDescription>
                    Tradição e modernidade proporcionando elegância.
                </S.TextDescription>
            </S.BoxAttribute>
        </S.Container>
    );
}

export { Attributes };
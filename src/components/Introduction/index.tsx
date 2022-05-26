import { Button } from '../Forms/button'
import S from './styled'

const Introduction = () => {
    return (
        <S.Container>
            <S.BoxImage>
                <S.ImageRenee src="../../assets/Renee.png" />
            </S.BoxImage>

            <S.BoxDescriptionRenee>
                <S.BoxAdjust>
                    <S.BoxTitle>
                        <S.TextTitle>Renee Trajar</S.TextTitle>
                        <S.LineSeparator />
                    </S.BoxTitle>

                    <S.BoxImageMobile>
                        <S.ImageReneeMobile src="assets/mobile/reneeM.png" />
                    </S.BoxImageMobile>

                    <S.BoxImageBackground>
                        <S.ImageBackground src="../../assets/aspas.png" />
                    </S.BoxImageBackground>
                    <S.TextDescriptionOne>
                        Com mais de 35 anos de experiência em camisas, calças e ternos sob medida,
                        possuímos profissionais experientes e altamente qualificados.
                        <br />
                        <br />
                        Cada cliente tem seu molde exclusivamente desenvolvido para seu biotipo
                        através das medidas tiradas pelo próprio Sr. Renee, no escritório
                        ou residência do cliente.
                    </S.TextDescriptionOne>
                    <S.TextObjetive>
                        “Nosso objetivo é superar a expectativa do cliente proporcionando-lhe
                        satisfação ao usar nossos produtos, aliado a um relacionamento franco
                        e honesto, valorizando o ser humano.”
                    </S.TextObjetive>
                    <S.TextAuthor>Renee Trajar</S.TextAuthor>
                </S.BoxAdjust>

                <S.BoxButton>
                    <Button>
                        Agende uma visita!
                    </Button>
                </S.BoxButton>
            </S.BoxDescriptionRenee>
        </S.Container>
    );
}

export { Introduction };
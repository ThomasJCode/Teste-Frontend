import { Button } from '../Forms/button'
import S from './styled'

import ReneeImg from '../../assets/Renee.png'
import AspasImg from '../../assets/aspas.png'

import ReneeMbImg from '../../assets/mobile/reneeM.png'

const Introduction = () => {
    return (
        <S.Container>
            <S.BoxImage>
                <S.ImageRenee src={ReneeImg} />
            </S.BoxImage>

            <S.BoxDescriptionRenee>
                <S.BoxAdjust>
                    <S.BoxTitle>
                        <S.TextTitle>Renee Trajar</S.TextTitle>
                        <S.LineSeparator />
                    </S.BoxTitle>

                    <S.BoxImageMobile>
                        <S.ImageReneeMobile src={ReneeMbImg} />
                    </S.BoxImageMobile>

                    <S.BoxImageBackground>
                        <S.ImageBackground src={AspasImg} />
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
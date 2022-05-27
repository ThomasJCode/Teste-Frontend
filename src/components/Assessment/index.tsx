import S from './styled'

import GareyImg1 from '../../assets/nelson1.png'
import GareyImg from '../../assets/nelson.png'

import GareyMbImg from '../../assets/mobile/nelsonM.png'
import GareyMbImg1 from '../../assets/mobile/nelsonM1.png'

const AssessmentNelson = () => {
    return (
        <S.Container>
            <S.BoxDescription>
                <S.BoxDescriptionLeft>
                    <S.TextDescription>
                        “Faço roupas com o Renee Trajar há mais de duas décadas, o serviço é impecável
                        em todos os detalhes, desde a costura ao caimento. O Renee tem uma equipe de
                        mestre!”
                    </S.TextDescription>
                    <S.TextInfo>
                        Nelson Garey
                    </S.TextInfo>
                    <S.TextInfoDescription>
                        Advogado | Nelson Garey Advogados Associados
                    </S.TextInfoDescription>


                    <S.BoxPhotoNelson>
                        <S.ImageStyle src={GareyImg1} alt="Nelson Garey" />
                    </S.BoxPhotoNelson>
                </S.BoxDescriptionLeft>
            </S.BoxDescription>


            <S.BoxImageMobile>
                <S.ImagePerfilMobile src={GareyMbImg} />
                <S.BoxShadowMobile />
                <S.BoxPhotoMobileFloat>
                    <S.ImagePhotoMobile src={GareyMbImg1} />
                </S.BoxPhotoMobileFloat>
            </S.BoxImageMobile>

            <S.BoxDescriptionRight>
                <S.ImagePerfil src={GareyImg} alt="Nelson Garey" />
                <S.BoxShadow />
            </S.BoxDescriptionRight>

        </S.Container>
    )
}

export { AssessmentNelson };
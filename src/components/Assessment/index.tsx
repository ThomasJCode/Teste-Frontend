import S from './styled'

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
                        <S.ImageStyle src="../../assets/nelson1.png" alt="Nelson Garey" />
                    </S.BoxPhotoNelson>
                </S.BoxDescriptionLeft>
            </S.BoxDescription>


            <S.BoxImageMobile>
                <S.ImagePerfilMobile src="../../assets/mobile/nelsonM.png" />
                <S.BoxShadowMobile />
                <S.BoxPhotoMobileFloat>
                    <S.ImagePhotoMobile src="../../assets/mobile/nelsonM1.png" />
                </S.BoxPhotoMobileFloat>
            </S.BoxImageMobile>

            <S.BoxDescriptionRight>
                <S.ImagePerfil src="../../assets/nelson.png" alt="Nelson Garey" />
                <S.BoxShadow />
            </S.BoxDescriptionRight>

        </S.Container>
    )
}

export { AssessmentNelson };
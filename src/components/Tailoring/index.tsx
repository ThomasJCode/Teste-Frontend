import S from './styled'
import { Button } from '../Forms/button'
import { FiMinus } from 'react-icons/fi'

import ShirtShopImg from '../../assets/camisaria.png'
import TailoringImg from '../../assets/alfaiataria.png'


const Tailoring = () => {
    return (
        <S.Container>
            <S.BoxContent orientation={false}>
                <S.BoxImage orientation={false}>
                    <S.ImageTailoring src={ShirtShopImg} />
                    <S.BoxBorder />
                </S.BoxImage>

                <S.BoxDescription orientation={false}>
                    <S.BoxContainerLine orientation={false}>
                        <S.BoxSpacerContent>
                            <S.BoxSeparatorButton>
                                <S.TextTitle>Camisaria</S.TextTitle>
                                <S.BoxTitleLine>
                                    <S.BoxLine>
                                        <FiMinus size={20} />
                                    </S.BoxLine>
                                    CONFECCIONADAS ARTESANALMENTE
                                </S.BoxTitleLine>

                                <S.BoxDescriptionInfo>
                                    <S.ListDescriptions>
                                        <S.TextDescription>100% Algodão</S.TextDescription>
                                        <S.TextDescription>Nacionais e Importadas</S.TextDescription>
                                        <S.TextDescription>Monograma</S.TextDescription>
                                        <S.TextDescription>Tradicionais e Esportivas</S.TextDescription>
                                        <S.TextDescription>Slim</S.TextDescription>
                                        <S.TextDescription>Casamentos</S.TextDescription>
                                    </S.ListDescriptions>
                                </S.BoxDescriptionInfo>
                            </S.BoxSeparatorButton>

                            <S.BoxButton verifyButton={false}>
                                <Button type='button' >
                                    Quero um orçamento
                                </Button>
                            </S.BoxButton>
                        </S.BoxSpacerContent>
                    </S.BoxContainerLine>
                </S.BoxDescription>
            </S.BoxContent>

            <S.BoxContainerMobile>
                <S.LineContainer />
            </S.BoxContainerMobile>

            <S.BoxContent orientation={true} >
                <S.BoxImage orientation={true}>
                    <S.ImageTailoring src={TailoringImg} />
                    <S.BoxBorder />
                </S.BoxImage>

                <S.BoxDescription orientation={true}>
                    <S.BoxContainerLine orientation={true}>
                        <S.BoxSpacerContent>
                            <S.BoxSeparatorButton>
                                <S.TextTitle>alfaiataria</S.TextTitle>
                                <S.BoxTitleLine>
                                    <S.BoxLine>
                                        <FiMinus size={20} />
                                    </S.BoxLine>
                                    Totalmente feito a mão sob medida.
                                </S.BoxTitleLine>

                                <S.BoxDescriptionInfo>
                                    <S.ListDescriptions>
                                        <S.TextDescription>Fio Super 120 e 130</S.TextDescription>
                                        <S.TextDescription>Ternos e Calças</S.TextDescription>
                                        <S.TextDescription>Lã fria Australiana</S.TextDescription>
                                        <S.TextDescription>Paletós e Smokings</S.TextDescription>
                                        <S.TextDescription>Botões Importados</S.TextDescription>
                                        <S.TextDescription>Sociais e Esportivos</S.TextDescription>
                                    </S.ListDescriptions>
                                </S.BoxDescriptionInfo>
                            </S.BoxSeparatorButton>

                            <S.BoxButton verifyButton={true}>
                                <Button type='button' >
                                    Quero um orçamento
                                </Button>
                            </S.BoxButton>
                        </S.BoxSpacerContent>
                    </S.BoxContainerLine>
                </S.BoxDescription>
            </S.BoxContent>
        </S.Container>
    );
}

export { Tailoring };
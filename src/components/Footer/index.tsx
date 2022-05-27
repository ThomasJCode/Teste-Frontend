import S from './styled'
import { AiOutlineUp } from 'react-icons/ai'

import LogoImg from '../../assets/logofooter.png'


const Footer = () => {
    return (
        <S.Container>
            <S.BoxImage>
                <S.Image src={LogoImg} />
                <S.TextCnpj>CNPJ:04.487.685/0001-01</S.TextCnpj>
            </S.BoxImage>

            <S.BoxAuthorized>
                <S.TextAuthorized>
                    Copyright: 2021 © Renee Trajar - Todos os direitos reservados.
                </S.TextAuthorized>
            </S.BoxAuthorized>

            <S.ButtonTop href="#home">
                <AiOutlineUp size={24} />
            </S.ButtonTop>
        </S.Container>
    )
}

export { Footer }
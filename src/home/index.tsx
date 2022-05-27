import { useState } from 'react'
import { VscMenu } from 'react-icons/vsc'
import S from './styled'
import { Menu } from '../components/Menu'
import { Button } from '../components/Forms/button'
import { Introduction } from '../components/Introduction'
import { AssessmentNelson } from '../components/Assessment'
import { Attributes } from '../components/Attributes'
import { Condition } from '../components/Condition'
import { Tailoring } from '../components/Tailoring'
import { Depoiment } from '../components/Depoiments'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { MenuStatic } from '../components/MenuStatic'
import { MenuMobile } from '../components/MenuMobile'
import Wpp from '../components/Wpp'

import LogoImg from "../assets/logoheader.png";



const Home = () => {

    const [buttonOpenMenuMobile, setButtonOpenMenuMobile] = useState(false);

    const handleOpenMenuMobile = () => {
        setButtonOpenMenuMobile(!buttonOpenMenuMobile);
    }

    return (
        <S.Container>
            <S.BoxBanner id="home">
                <Menu />
                <MenuMobile
                    openButtonMenu={buttonOpenMenuMobile}
                    closeButtonMenu={setButtonOpenMenuMobile}
                />

                <S.BoxButtonMobile
                    onClick={handleOpenMenuMobile}
                >
                    <VscMenu size={35} />
                </S.BoxButtonMobile>

                <S.BoxLogo>
                    <S.ImageLogo src={LogoImg} alt="logo" />
                </S.BoxLogo>

                <S.BoxGroup>

                    <S.BoxTitle>
                        <S.TextInitial>Elegante é ter um</S.TextInitial>
                        <S.TextMiddle>ALFAIATE</S.TextMiddle>
                        <S.TextFinal>para chamar de seu.</S.TextFinal>
                    </S.BoxTitle>
                    <S.TextDescription>
                        COMPRE HOJE,<strong> PAGUE EM ATÉ 3X
                            COM 12% DE DESCONTO </strong> E TENHA  10 MESES PARA CONFECCIONAR!
                    </S.TextDescription>
                    <S.BoxButton>
                        <Button >
                            FAÇA JÁ UM ORÇAMENTO
                        </Button>
                    </S.BoxButton>
                </S.BoxGroup>
            </S.BoxBanner>

            <S.BoxIntroduction id="company">
                <Introduction />
            </S.BoxIntroduction>

            <S.BoxAssessmentNelson>
                <AssessmentNelson />
            </S.BoxAssessmentNelson>

            <S.BoxAttributes id="tailoring">
                <Attributes />
            </S.BoxAttributes>

            <S.BoxCondition>
                <Condition />
            </S.BoxCondition>

            <S.BoxTailoring id="shirtshop" >
                <Tailoring />
            </S.BoxTailoring>

            <S.BoxDepoiment id="depoiment">
                <Depoiment />
            </S.BoxDepoiment>

            <S.Contact id="contact">
                <Contact />
            </S.Contact>

            <S.Footer>
                <Footer />
            </S.Footer>

            <S.MenuStatic>
                <MenuStatic />
            </S.MenuStatic>

            <Wpp />

        </S.Container>
    );
}

export { Home }
import { useEffect, useState } from 'react'
import S from './styled'
import menu from '../../services/menu'

import LogoImg from "../../assets/logofooter.png";

const MenuStatic = () => {

  const [data, setData] = useState(false);

  useEffect(() => {
    const scrollPage = () => {
      if (window.scrollY > 60) {
        setData(true);
      } else {
        setData(false);
      }
    }

    window.addEventListener('scroll', scrollPage);
  }, []);

  return (
    <S.Container visible={data}>
      <S.BoxLogo>
        <S.Link href="#home">
          <S.ImageLogo src={LogoImg} />
        </S.Link>
      </S.BoxLogo>

      <S.BoxMenus>
        {menu.map(e => (
          <S.BoxTextMenus key={e.id}>
            <S.TextMenu>
              <S.Link href={`#${e.link}`} > {e.name} </S.Link>
            </S.TextMenu>
          </S.BoxTextMenus>
        ))}
      </S.BoxMenus>
    </S.Container>
  )
}

export { MenuStatic };
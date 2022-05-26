import S from './styled'
import menuList from '../../services/menu'

const Menu = () => {
    return (
        <S.Container>
            <S.BoxLogo>
                <S.ImageLogo src="../../assets/logoheader.png" />
            </S.BoxLogo>

            <S.BoxMenu>
                {menuList.map(item => (
                    <S.TextMenu key={item.id} href={`#${item.link}`} >{item.name}</S.TextMenu>
                ))}
            </S.BoxMenu>
        </S.Container>
    )
}

export { Menu };
import S from './styled'
import menu from '../../services/menu'
import { MdOutlineClose } from 'react-icons/md'


interface IMobileProps {
    openButtonMenu: boolean;
    closeButtonMenu: (visible: boolean) => void;
}

const MenuMobile = ({ openButtonMenu, closeButtonMenu }: IMobileProps) => {

    const handleApparentMenu = () => {
        closeButtonMenu(!openButtonMenu);
    }

    return (
        <S.Container visible={openButtonMenu}>
            <S.ButtonClose onClick={handleApparentMenu}>
                <MdOutlineClose size={40} />
            </S.ButtonClose>

            <S.BoxTextMenu>
                {menu.map((item) => (
                    <S.TextMenu
                        key={item.id}
                        href={`#${item.link}`}
                        onClick={handleApparentMenu}
                    >
                        {item.name}
                    </S.TextMenu>
                ))}
            </S.BoxTextMenu>

            <S.BoxDescription>
                <S.TextMain>Telefones</S.TextMain>
                <S.TextSecondary>+55 (11) 3088-0757</S.TextSecondary>
                <S.TextMain>E-mail</S.TextMain>
                <S.TextSecondary>renee@reneetrajar.com.br</S.TextSecondary>
            </S.BoxDescription>
        </S.Container>
    )
}

export { MenuMobile };
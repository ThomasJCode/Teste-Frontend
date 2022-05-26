import S from './styled'
import { useEffect, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { IDepoiment } from '../../dtos/depoimentsDto'
import depoiments from '../../services/depoiments'

const Depoiment = () => {

    const [clientsDepoiments, setClientsDepoiments] = useState<IDepoiment[]>([] as IDepoiment[]);

    useEffect(() => {
        const uploadClientsDepoiments = () => {
            setClientsDepoiments(depoiments);
        }
        uploadClientsDepoiments();
    }, []);

    const handleVerifyClick = (option: string) => {
        let depoimentTemp = [...clientsDepoiments];

        if (option === 'next') {
            let newDepoiment = depoimentTemp.filter(item => item.active === true);
            if (newDepoiment[0].id < depoimentTemp.length - 1) {
                let verifyId = newDepoiment[0].id + 1;
                newDepoiment[0].active = false;
                depoimentTemp[verifyId].active = true;
                setClientsDepoiments(depoimentTemp);
            }
            return;
        }

        if (option === 'previous') {
            let newDepoiment = depoimentTemp.filter(item => item.active === true);
            if (newDepoiment[0] !== undefined && newDepoiment[0].id > 0) {
                newDepoiment[0].active = false;
                setClientsDepoiments(depoimentTemp);
                let verifyId = newDepoiment[0].id - 1;
                depoimentTemp[verifyId].active = true;
                setClientsDepoiments(depoimentTemp);
            }
            return;
        }
    }

    const handleDepoimentsButton = (id: number) => {
        let depoimentTemp = [...clientsDepoiments];
        let newDepoiment = depoimentTemp.filter(item => item.active === true);
        newDepoiment[0].active = false;
        setClientsDepoiments(depoimentTemp);
        depoimentTemp[id].active = true;
        return;
    }

    return (
        <S.Container>
            <S.Content>
                <S.BoxButtonLeft direction={false}>
                    <S.ButtonSlider onClick={() => handleVerifyClick('previous')}>
                        <FiChevronLeft size={60} />
                    </S.ButtonSlider>
                </S.BoxButtonLeft>

                <S.BoxBodyDepoiment>
                    <S.BoxTitleDepoiment>
                        <S.TextTitleDepoiment>Depoimentos</S.TextTitleDepoiment>
                        <S.BoxLineText />
                    </S.BoxTitleDepoiment>


                    {clientsDepoiments.map((item) => (
                        <S.BoxDepoimentsVisible key={item.id} active={item.active}>
                            <S.BoxImage>
                                <S.ImageAvatar src={item.photo} alt="Avatar" />
                            </S.BoxImage>
                            <S.TextDepoimentDescription>
                                {item.depoiment}
                            </S.TextDepoimentDescription>
                            <S.TextName> {item.name} </S.TextName>
                            <S.TextDescription> {item.description} </S.TextDescription>
                        </S.BoxDepoimentsVisible>
                    ))}

                    <S.BoxButtons>
                        {clientsDepoiments.map((item) => (
                            <S.Buttons
                                key={item.id}
                                active={item.active}
                                onClick={() => handleDepoimentsButton(item.id)}
                            />
                        ))}
                    </S.BoxButtons>

                </S.BoxBodyDepoiment>

                <S.BoxButtonRight direction={true}>
                    <S.ButtonSlider onClick={() => handleVerifyClick('next')}>
                        <FiChevronRight size={60} />
                    </S.ButtonSlider>
                </S.BoxButtonRight>
            </S.Content>
        </S.Container>
    );
}

export { Depoiment };
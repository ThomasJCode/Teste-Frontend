import { useState } from 'react'
import S from './styled'
import Input from '../Forms/input'
import TextArea from '../Forms/text'
import { Button } from '../Forms/button'
import { CleanButton } from '../Forms/cleanButton'


const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    return (
        <S.Container>
            <S.Content>
                <S.BoxTitleContact>
                    Contato
                    <S.LineContact />
                </S.BoxTitleContact>

                <S.BoxContainerContact>
                    <S.BoxLeftContact>
                        <S.BoxGroupContactLeft>
                            <S.TextPhone>Telefones</S.TextPhone>
                            <S.TextNumberPhone>+55 (11) 3088-0757</S.TextNumberPhone>

                            <S.TextEmail>E-mail</S.TextEmail>
                            <S.TextAddressEmail>renee@reneetrajar.com.br</S.TextAddressEmail>

                            <S.TextInfo>Atendimento Personalizado</S.TextInfo>
                        </S.BoxGroupContactLeft>

                        <S.BoxButton>
                            <CleanButton>
                                Clique aqui!
                            </CleanButton>
                        </S.BoxButton>
                    </S.BoxLeftContact>

                    <S.BoxContact>
                        <S.BoxContent>
                            <Input
                                type="text"
                                placeholder="Nome"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <Input
                                type="text"
                                placeholder="E-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <TextArea
                                placeholder="Mensagem"
                                value={msg}
                                onChange={(e) => setMsg(e.target.value)}
                            >
                            </TextArea>
                        </S.BoxContent>

                        <S.BoxButtonRight>
                            <Button>
                                Enviar Mensagem
                            </Button>
                        </S.BoxButtonRight>
                    </S.BoxContact>
                </S.BoxContainerContact>
            </S.Content>
        </S.Container>
    )
}

export { Contact };
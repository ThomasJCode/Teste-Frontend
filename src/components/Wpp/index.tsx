import React from 'react'
import FloatingWhatsApp from 'react-floating-whatsapp'
import ReneeImg from '../../assets/Renee.png'

export default function Wpp() {

    return (
        <FloatingWhatsApp
            phoneNumber='+55 11 30880757'
            accountName='Renee Trajar'
            avatar={ReneeImg}
            chatMessage={'Olá! 🤝 \nComo posso ajudar?'}

        />
    )
}
import React from 'react'
import QrCodeImage from './QrCodeImage'
import HeadlineText from './HeadlineText'
import ParagraphText from './ParagraphText'

const Card = () => {
    return (
        <div className='main-card'>
            <QrCodeImage path="./image-qr-code.png" />
            <div className='text-content'>
                <HeadlineText headingText="Improve your front-end skills by building projects" />
                <ParagraphText contentText="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level" />
            </div>
        </div>
    )
}

export default Card;

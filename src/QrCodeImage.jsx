import React from 'react'

const QrCodeImage = ({path}) => {
    return (
        <div className='qr-code-image-wrapper'>
            <img src={path} alt="QR Code" />
        </div>
    )
}

export default QrCodeImage;

import React from 'react'

const ParagraphText = ({contentText}) => {
    return (
        <div className='paragraph-text-wrapper'>
            <p className='paragraph-text'>{contentText}</p>
        </div>
    )
}

export default ParagraphText;

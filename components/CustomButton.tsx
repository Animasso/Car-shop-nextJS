"use client"
import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types'
const CustomButton = ({ title, containerStyles, type, handleClick, textStyle, rightIcon, isDisable }: CustomButtonProps) => {
    return (
        <button disabled={false} type={type} className={`custom-btn ${containerStyles}`} onClick={() => { handleClick }}>
            <span className={`flex-1 ${textStyle}`}>
                {title}
            </span>
            {rightIcon && (<div className=' relative w-6 h-6'>
                <Image src={rightIcon} alt='rightIcon' fill className=' object-contain' />
            </div>)}
        </button>
    )
}

export default CustomButton

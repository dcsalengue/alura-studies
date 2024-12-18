import React from 'react';
import style from './Botao.module.scss'

interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children?: React.ReactNode   
}

export default function Botao({onClick, type, children }:Props) {
    return (
        <button 
            onClick={onClick} 
            type={type} 
            className={style.botao}>
            {children}
        </button>
    )
}

class Botao1 extends React.Component<{
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children: string

}> {
    render() {
        const { type = "button", onClick, children } = this.props;
        return (
            <button onClick={onClick} type={type} className={style.botao}>
                {children}
            </button>
        )
    }
}


import React from 'react';
import style from './Botao.module.scss'

class Botao extends React.Component<{
    type?: "button" | "submit" | "reset" | undefined;
    children: string;

}> {
    render() {
        const {type, children} = this.props;
        return (
            <button type={type} className={style.botao}>
                {children}
            </button>
        )
    }
}

export default Botao;
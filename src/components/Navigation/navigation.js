import React from 'react';
import Style from './style.module.css';
const Navigation = () => {
    return (
        <div>
            <div className={Style.container}>
                <div className={Style.logo}>
                    Newton <span className={Style.insideLogo}>School</span>
                </div>
                <div className={Style.info}>
                    Dashboard
                </div>
            </div>

        </div>
    );
}

export default Navigation;
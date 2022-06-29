import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const toggleModal = () => {
        document.body.classList.add("modal-opened")
    }

    const { t } = useTranslation()

    return (
        <header>
            <Link to="/" className="logo" onClick={() => props.menu && props.setMenu(false)}>
                <span>Social</span> <span>Isolation</span>
            </Link>
            {
                props.menu ? <nav>
                    <button onClick={() => props.setMenu(!props.menu)}>{t("close")}</button>
                </nav> : <nav>
                    <button onClick={toggleModal}>{t("gethelp")}</button>
                    <button onClick={() => props.setMenu(!props.menu)}>{t("menu")}</button>
                </nav>
            }
        </header>
    )
}

export default Header;
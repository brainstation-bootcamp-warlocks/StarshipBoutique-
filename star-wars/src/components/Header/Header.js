import Cart from "../Cart/Cart"
import "./Header.css"

function Header(props) {
    return (
        <>
        <header className="header">
            <Cart quantity={props.quantity} />
            {/* <h1>Starship Boutique</h1> */}
        </header>
        </>
    );
}

export default Header;

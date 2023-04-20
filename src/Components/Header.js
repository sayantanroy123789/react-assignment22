import { BsFillCartCheckFill } from 'react-icons/bs';

function Header(){
    return (
        <div>
            <div style={{backgroundColor:"black", display:"flex", justifyContent:"space-between", color:"white"}}>
                <h1>SHOP</h1>
                <h1>
                    <BsFillCartCheckFill />
                    CART
                </h1>
            </div>
        </div>
    )
    
}
export default Header;
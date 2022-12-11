import {Link} from 'react-router-dom';

function Button({cate}) {
    return(
        <div>
            <Link to={"/"+cate} style={{marginRight:"2rem"}}>
                <button>{cate}</button>
            </Link>
        </div>
    )
}

export default Button;
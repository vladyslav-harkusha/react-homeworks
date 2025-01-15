import {FC} from "react";
import {Link} from "react-router-dom";

export const NavMenu: FC = () => {
    return (
        <ul className='p-4 pl-10 flex gap-20 bg-teal-600 text-lime-200 font-bold'>
            <li>
                <Link to=''>Home</Link>
            </li>
            <li>
                <Link to='/cars'>Cars</Link>
            </li>
        </ul>
    );
};
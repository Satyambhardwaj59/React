import React, {useState} from 'react';

const Nav = () => {
    let Links= [
        {name: "Home", path: "/"},
        {name: "About", path: "/about"},
        {name: "Contact", path: "/contact"},
        {name: "Grocary", path: "/grocary"},
        {name: "Cart", path: "/cart"},
    ];

    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className="shadow-md fixed top-0 w-11/12">
            <div className="md:flex justify-between bg-gray-200 py-4">
                <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-black">
                        <h1>Hello</h1>
                </div>
                <div onClick={ () => setShowMenu(!showMenu)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
                    {showMenu ? '✖' : '☰'}
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-blue-800 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-10 transition-all duration-500 ease-in ${showMenu ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
                    {Links.map((link, index) => {
                        return (
                            <li key={index} className="md:ml-8 text-xl px-4 py-2 md:my-0 my-7">
                                <a href={link.path} className="text-black font-[Poppins] font-bold hover:text-blue-500">{link.name}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>

        </div>
    );
}

export default Nav;
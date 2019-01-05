import React from 'react';

function Nav() {
    return (
        <div >
            <ul className="nav">
                <li className="nav-item mx-auto">
                    <h3 className="page-title">The Bookshelf</h3>
                </li>
                <li className="nav-item mx-auto">
                    <a className="nav-link" href="/search">Search for a Book</a>
                </li>
                <li className="nav-item mx-auto">
                    <a className="nav-link" href="/saved">View the Shelf</a>
                </li>
            </ul>
        </div>
    )
}

export default Nav
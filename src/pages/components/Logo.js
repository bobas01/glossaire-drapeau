import React from 'react';

const Logo = () => {
    return (
        <div className="logo" >
            {/* les image ac balise img tjs importé depuis public */}
            <img src="./logo192.png" alt="logo react" />
            <h3>React World</h3>
        </div>
)};

export default Logo;
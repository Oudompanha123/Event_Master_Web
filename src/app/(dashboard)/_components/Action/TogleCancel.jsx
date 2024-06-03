// components/Toggle.js
import { useState } from 'react';

const Toggle = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div>
            <button onClick={handleToggle}>
                {isToggled ? '' : ''}
            </button>
            {isToggled && <div className="content">Cancel</div>}
        </div>
    );
};

export default Toggle;

import './OtpValidator.css';
import { useState } from 'react';

function OtpValidator() {

    const [pointer, setPointer] = useState([true, false, false, false]);

    return <div className='container'>
        <div class="box">
            <input />
            {pointer[0] && <br />}
        </div>
        <div class="box">
            <input />
            {pointer[1] && <br />}
        </div>
        <div class="box">
            <input />
            {pointer[2] && <br />}
        </div>
        <div class="box">
            <input />
            {pointer[3] && <br />}
        </div>
    </div>
}


export default OtpValidator;
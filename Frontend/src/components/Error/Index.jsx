import { React } from 'react';
import { Link } from 'react-router-dom';

import '../../Styles/layout.css'
import '../../Styles/components/error.css'

function Error() {

    return (
        <div className='container'>
            <div className='content'>
                <main className='error'>

                    <h2>Página não encontrada</h2>
                    <p>A página que você está procurando não foi encontrada</p>
                    <p>Volte para a página inicial</p>
                    
                    <Link className='error-btn' to="/">
                        <svg class="svgIcon" viewBox="0 0 384 512">
                            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" ></path>
                        </svg>
                    </Link>

                </main>
            </div>
        </div>
    );
}

export default Error;
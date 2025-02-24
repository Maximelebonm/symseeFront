import { Carp } from '../../SvgComponent/carp/carp';
import './titleH1.css';

export const TitleH1 = ({title,idTitle,idFish})=>{
    return (
        <div>
            <div className='titleH1'>
                <h1 id={idTitle}>{title}</h1>
                <Carp className='carp' id={idFish} />
            </div>
        </div>
    )
}
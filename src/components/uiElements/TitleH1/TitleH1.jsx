import { Carp } from '../../SvgComponent/carp/carp';
import './titleH1.css';

export const TitleH1 = ({title})=>{
    return (
        <div className='titleH1'>
            <h1>{title}</h1>
            <Carp className='carp'/>
            <span id="decorationLeft"></span>
            <span id="decorationRight"></span>
        </div>
    )
}
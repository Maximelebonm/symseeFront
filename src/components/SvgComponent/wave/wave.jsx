import * as React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef} from "react";

function Wave(props) {
  
  const container = useRef();
    useGSAP(()=>{
      const tl = gsap.timeline({repeat : -1})
      tl.to(container.current,{ attr : {d : `M0 14c134-0 146 10 ${props.width} 0v21.5H0V14z`}, duration : 2, ease : "power1.inOut"})
      .to(container.current,{  attr : {d :`M0 14c134-50 146 59.5 ${props.width} 0v21.5H0V14z`}, duration : 2 , ease : "power1.inOut"})
    },{});

  return (
    <>
    {props.width > 0 ? <svg  width={props.width + 10} height={36} fill="" {...props}>
      <path ref={container} d={`M0 14c134-50 146 59.5 ${props.width + 10} 0v21.5H0V14z`}/>
    </svg> : null}
    </>
  );
}

const MemoWave = React.memo(Wave);
export default MemoWave;

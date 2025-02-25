import './SliderPartenaires.css'
import feder from '../../assets/partenaires/HdF_FEDER.jpg';
import aeap from '../../assets/partenaires/logo_aeap_v8_rvb.jpg';
import ca2c from '../../assets/partenaires/Logo_CA2C.jpg';
import caph from '../../assets/partenaires/Logo_CAPH.png';
import cavm from '../../assets/partenaires/Logo_CAVM.webp';
import ccpm from '../../assets/partenaires/Logo_CCPM.png';
import ccps from '../../assets/partenaires/Logo_CCPS.png';
import cctso from '../../assets/partenaires/Logo_CCTSO.png';
import dnord from '../../assets/partenaires/logo_nord_ledepartement.jpg';
import rnpc from '../../assets/partenaires/Région_Nord_Pas_de_Calais.jpg';
import fdag from '../../assets/partenaires/subventions-feder-agglo-maubeuge-header.jpg';
import cen from '../../assets/partenaires/website-logo_CEN.png';
import { useEffect,useState } from 'react';


const images = [
    { src: feder, alt: "FEDER" },
    { src: aeap, alt: "AEAP" },
    { src: ca2c, alt: "CA2C" },
    { src: caph, alt: "CAPH" },
    { src: cavm, alt: "CAVM" },
    { src: ccpm, alt: "CCPM" },
    { src: ccps, alt: "CCPS" },
    { src: cctso, alt: "CCTSO" },
    { src: dnord, alt: "DNORD" },
    { src: rnpc, alt: "RNPC" },
    { src: fdag, alt: "FDAG" },
    { src: cen, alt: "CEN" },
  ];
  export const SliderPartenaires = ()=> {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [mobile, setMobile] = useState(window.innerWidth < 1024);

  // Auto-slide effect
  useEffect(() => {
    if(mobile == true){
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [mobile]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 1024;
      if (isMobile !== mobile) {
        console.log(isMobile ? "resize - mobile" : "resize - Desktop");
        setMobile(isMobile);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobile]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
    return (
        <div id="partenaires">
            <div>
                { mobile ?
                <div className="carousel-containerMobile">
                <button className="prev" onClick={goToPrevious}>
                    &lt;
                </button>
                <div className="carousel">
                    <div
                    className="carousel-track"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                    {images.map((image, index) => {
                        return (
                        <div className="carousel-item" key={index}>
                            <img src={image.src} alt={image.alt} />
                        </div>
                        )
                    })}
                    </div>
                </div>
                <button className="next" onClick={goToNext}>
                    &gt;
                </button>
                </div>
              
                :
                <div className="carousel-containerDesktop">
                  <div className="carouselDesktop">
                      <div className="carousel-Desktoptrack">
                        {images.map((image, index) => (
                            <div className="carouselDesktopitem" key={index}>
                                <img src={image.src} alt={image.alt} />
                            </div>
                        ))}
                      </div>
                    </div>
                </div>
              }
          
            </div>
        </div>
    )
}
import { useState, useEffect, useRef, useCallback } from 'react';
import './homeSlider.css';

import rivier1 from '../../assets/photo/terrain/riviere1.jpg';
import rivier2 from '../../assets/photo/terrain/riviere2.jpg';
import rivier3 from '../../assets/photo/terrain/riviere3.webp';

const slides = [
    { src: rivier1, alt: "Rivière et berges végétalisées" },
    { src: rivier2, alt: "Cours d'eau du territoire du SYMSEE" },
    { src: rivier3, alt: "Milieu aquatique préservé" },
];

const AUTOPLAY_DELAY = 5000;

export const HomeSlider = () => {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [dragOffset, setDragOffset] = useState(0);
    const [isDraggingState, setIsDraggingState] = useState(false);
    const timeoutRef = useRef(null);

    const startX = useRef(0);
    const deltaX = useRef(0);
    const isDragging = useRef(false);
    const viewportRef = useRef(null);

    const goTo = useCallback((index) => {
        const total = slides.length;
        setCurrent(((index % total) + total) % total);
    }, []);

    const next = useCallback(() => goTo(current + 1), [current, goTo]);
    const prev = useCallback(() => goTo(current - 1), [current, goTo]);

    // Autoplay
    useEffect(() => {
        if (isPaused) return;
        timeoutRef.current = setTimeout(() => {
            next();
        }, AUTOPLAY_DELAY);
        return () => clearTimeout(timeoutRef.current);
    }, [current, isPaused, next]);

    // --- Gestion drag / swipe (souris + tactile) ---
    const handleStart = (clientX) => {
        isDragging.current = true;
        startX.current = clientX;
        deltaX.current = 0;
        setIsDraggingState(true);
        setIsPaused(true);
    };

    const handleMove = (clientX) => {
        if (!isDragging.current) return;
        deltaX.current = clientX - startX.current;
        setDragOffset(deltaX.current);
    };

    const handleEnd = () => {
        if (!isDragging.current) return;
        isDragging.current = false;
        setIsDraggingState(false);

        const threshold = 60;
        if (deltaX.current > threshold) {
            prev();
        } else if (deltaX.current < -threshold) {
            next();
        }
        deltaX.current = 0;
        setDragOffset(0);
        setIsPaused(false);
    };

    // Mouse events
    const onMouseDown = (e) => handleStart(e.clientX);
    const onMouseMove = (e) => handleMove(e.clientX);
    const onMouseUp = () => handleEnd();
    const onMouseLeave = () => { if (isDragging.current) handleEnd(); };

    // Touch events
    const onTouchStart = (e) => handleStart(e.touches[0].clientX);
    const onTouchMove = (e) => handleMove(e.touches[0].clientX);
    const onTouchEnd = () => handleEnd();

    const viewportWidth = viewportRef.current?.offsetWidth || 1;
    const dragPercent = (dragOffset / viewportWidth) * 100;

    return (
        <div id="homSliderContainer">
            <div id="homeSliderText">SYNDICAT MIXTE DU SUD EST DE L'ESCAUT</div>
            <div
                className="sliderViewport"
                ref={viewportRef}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={(e) => { onMouseLeave(e); setIsPaused(false); }}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                <div
                    className="sliderTrack"
                    style={{
                        transform: `translateX(calc(-${current * 100}% + ${dragPercent}%))`,
                        transition: isDraggingState ? 'none' : 'transform 500ms ease',
                    }}
                >
                    {slides.map((slide, index) => (
                        <div className="sliderSlide" key={index}>
                            <img
                                src={slide.src}
                                alt={slide.alt}
                                draggable={false}
                            />
                        </div>
                    ))}
                </div>

                {/* Flèches */}
                <button
                    className="sliderArrow sliderArrowPrev"
                    onClick={prev}
                    aria-label="Image précédente"
                >
                    ‹
                </button>
                <button
                    className="sliderArrow sliderArrowNext"
                    onClick={next}
                    aria-label="Image suivante"
                >
                    ›
                </button>

                {/* Pagination */}
                <div className="sliderPagination">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`sliderDot ${index === current ? 'active' : ''}`}
                            onClick={() => goTo(index)}
                            aria-label={`Aller à l'image ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
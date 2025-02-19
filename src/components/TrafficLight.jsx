import { useState } from 'react';
import '/src/styles/TrafficLight.css';

const trafficLightColors = ['red', 'yellow', 'green'];

const TrafficLight = () => {
    const [lightColor, setLightColor] = useState(trafficLightColors[0]);
    const [showPurple, setShowPurple] = useState(false);

    const changeColor = () => {
        setLightColor(prevColor => {
            const currentColors = showPurple ? [...trafficLightColors, 'purple'] : trafficLightColors;
            const currentIndex = currentColors.indexOf(prevColor);
            const nextIndex = (currentIndex + 1) % currentColors.length;
            return currentColors[nextIndex];
        });
    }

    const changeToPurple = () => {
        setShowPurple(prev => {
            if (!prev === false && lightColor === 'purple') {
                setLightColor(trafficLightColors[0]);
            }
            return !prev;
        });
    }

    return (
        <div className="container">
            <div className="trafficLight">
                {trafficLightColors.map(color => (
                    <div
                        key={color}
                        className={`colorOfTrafficLight ${color} ${lightColor === color ? 'active' : ''}`}
                    />
                ))}
                {showPurple && (
                    <div
                        className={`colorOfTrafficLight purple ${lightColor === 'purple' ? 'active' : ''}`}
                    />
                )}
            </div>
            <button className="btn" onClick={changeColor}>Change Color</button>
            <br/>
            <button className="btnPurple" onClick={changeToPurple}>
                {showPurple ? 'Hide Purple' : 'Show Purple'}
            </button>
        </div>
    );
}

export default TrafficLight;
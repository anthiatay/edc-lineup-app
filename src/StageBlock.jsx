import { useState } from 'react';
import ArtistCard from './ArtistCard';
import './StageBlock.css';

import kineticImg from './assets/kinetic.jpg';
import cosmicImg from './assets/cosmic.jpg';
import circuitImg from './assets/circuit.jpg';
import neonImg from './assets/neon.jpg';
import basspodImg from './assets/basspod.jpg';
import wasteImg from './assets/waste.jpg';
import quantumImg from './assets/quantum.jpg';
import stereoImg from './assets/stereo.jpg';
import bionicImg from './assets/bionic.jpg';


function StageBlock({ stage, artists }) {
    const [isOpen, setIsOpen] = useState(false);

    const [searchQuery, setSearchQuery] = useState('');

    const stageImages = {
        "Kinetic Field": kineticImg,
        "Cosmic Meadow": cosmicImg,
        "Circuit Grounds": circuitImg,
        "Neon Garden": neonImg,
        "Basspod": basspodImg,
        "Wasteland": wasteImg,
        "Quantum Valley": quantumImg,
        "Stereo Bloom": stereoImg,
        "Bionic Jungle": bionicImg
    };

    return (
        <div className="stage-block">
            <div
                className="stage-title"
                onClick={() => setIsOpen(!isOpen)}
                style={{ cursor: 'pointer' }}
            >
                {stage} {isOpen ? '▲' : '▼'}
            </div>

            {isOpen && (
                <>
                    <img
                        src={stageImages[stage]}
                        alt={`${stage} image`}
                        className="stage-header-img"
                    />
                    <input
                        type="text"
                        placeholder="Search artists..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-bar"
                    />
                    {artists
                        .filter((artist) =>
                            artist.name.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .map((artist, index) => (
                            <ArtistCard
                                key={index}
                                name={artist.name}
                                time={artist.time}
                                spotify={artist.spotify}
                            />
                        ))}
                    <div className="artist-list">
                        {artists.map((artist, index) => (
                            <ArtistCard
                                key={index}
                                name={artist.name}
                                time={artist.time}
                                spotify={artist.spotify}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default StageBlock;
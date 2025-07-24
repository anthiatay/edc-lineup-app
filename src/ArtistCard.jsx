import "./ArtistCard.css";
function ArtistCard({ name, time, spotify }) {
    return (
        <div className="artist-card">
            <div className="artist-name">{name}</div>
            <div className="artist-time">{time}</div>
            {spotify && (
                <a className="spotify-button" href={spotify} target="_blank" rel="noreferrer">
                    Open on Spotify
                </a>
            )}
        </div>
    );
}
export default ArtistCard;
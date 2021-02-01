const [mediaType, setMediaType] = useState(false);    
const toggleScreenShare = (displayStream ) => {
    const { reInitializeStream, toggleVideoTrack } = socketInstance.current;
    displayStream === 'displayMedia' && toggleVideoTrack({
        video: false, audio: true
    });
    reInitializeStream(false, true, displayStream).then(() => {
        setMediaType(!mediaType)
    });
}
return (
    <React.Fragment>
        <div id="room-container"></div>
        <button onClick={handleDisconnect}>Disconnect</button>
        <button 
            onClick={() => reInitializeStream(mediaType ? 
            'userMedia' : 'displayMedia')}
        >
        {mediaType ? 'screen sharing' : 'stop sharing'}</button>
    </React.Fragment>
)
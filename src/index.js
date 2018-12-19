const isRTCSupported = () => {
    let isWebRTCSupported = false;
    [
        'RTCPeerConnection',
        'webkitRTCPeerConnection',
        'mozRTCPeerConnection',
        'RTCIceGatherer',
    ].forEach(function(item) {
        if (isWebRTCSupported) {
            return;
        }

        if (item in window) {
            isWebRTCSupported = true;
        }
    });

    return isWebRTCSupported;
};

export default isRTCSupported;
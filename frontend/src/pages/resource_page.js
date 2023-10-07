import "./resource_page.css";
import YouTube from 'react-youtube';

function Resources() {
    const opts = {
        height: '260',
        width: '450',
        playerVars: {
          autoplay: 0, // Set to 1 if you want the video to autoplay
        },
      };

  return (
    <div className="resource-page">
      <div className="resource-page-header">
        <h2 className="resource-page-title">Resources</h2>
        <p>
          Check out all of these videoes to either learn a new skill set or get
          you prepared for volunteer days.
        </p>
      </div>
      <hr></hr>

      <div className="resource-page-content">
        <div className="resource-section">
          <h3 className="resource-section-title">How to Paint</h3>
          <div className="video-list">
            <YouTube className="video-item" videoId="UdeZkJEv5xU" opts={opts} />
            <YouTube className="video-item" videoId="syMnmDrp2qY" opts={opts} />
            <YouTube className="video-item" videoId="39Cw42fWTmc" opts={opts} />
          </div>
        </div>

        <hr></hr>

        <div className="resource-section">
          <h3 className="resource-section-title">How to Plumber</h3>
          <div className="video-list">
            <YouTube className="video-item" videoId="hlJUezuNFuI" opts={opts} />
            <YouTube className="video-item" videoId="eVRVCtXCYu0" opts={opts} />
            <YouTube className="video-item" videoId="Jt0VfS6xw2U" opts={opts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;

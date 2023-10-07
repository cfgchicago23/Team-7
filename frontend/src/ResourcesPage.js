import './ResourcesPage.css';

function ResourcesPage() {

    const handleClick = () => {
        

    }


  return (
    <div className="resource-page">
      <h2 className="resource-page-title">Resources</h2>

      <div className="resource-page-filter">
        <button onClick={handleClick}>Plumbing</button>
        <button onClick={handleClick}>Painting</button>
        <button onClick={handleClick}>Climbing</button>
      </div>

      <hr></hr>

      <div className="resource-section">
        <h3 className="resource-section-title">How to Paint the Wall</h3>
        <div className="video-list">
          <iframe
            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
            className="video-item"
          />

          <iframe
            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
            className="video-item"
          />

          <iframe
            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
            className="video-item"
          />
        </div>
      </div>
      <hr></hr>

      <div className="resource-section">
        <h3 className="resource-section-title">How to Paint the Wall</h3>
        <div className="video-list">
          <iframe
            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
            className="video-item"
          />

          <iframe
            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
            className="video-item"
          />

          <iframe
            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
            className="video-item"
          />
        </div>
      </div>

    </div>
  );
}

export default ResourcesPage;

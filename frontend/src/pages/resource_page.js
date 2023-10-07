import "./resource_page.css";
import YouTube from "react-youtube";
import { useState, useEffect } from "react";

function Resources() {
  const videoLinks = [
    {
      "module-title": "Painting",
      videos: [
        {
          title: "a",
          video_id: "UdeZkJEv5xU",
        },
        {
          title: "b",
          video_id: "syMnmDrp2qY",
        },
        {
          title: "c",
          video_id: "39Cw42fWTmc",
        },
      ],
    },
    {
      "module-title": "Woodcutting",
      videos: [
        {
          title: "",
          video_id: "UdeZkJEv5xU",
        },
        {
          title: "e",
          video_id: "syMnmDrp2qY",
        },
        {
          title: "f",
          video_id: "39Cw42fWTmc",
        },
      ],
    },
    {
      "module-title": "Plumbering",
      videos: [
        {
          title: "g",
          video_id: "UdeZkJEv5xU",
        },
        {
          title: "h",
          video_id: "syMnmDrp2qY",
        },
        {
          title: "e",
          video_id: "39Cw42fWTmc",
        },
      ],
    },
  ];

  const opts = {
    height: "380",
    width: "650",
    playerVars: {
      autoplay: 0, // Set to 1 if you want the video to autoplay
    },
  };

  const [selectedModule, setSelectedModule] = useState("Painting");
  const [moduleButtonColors, setModuleButtonColors] = useState([
    "#668A3D",
    "#FFFFFF",
    "#FFFFFF",
  ]);
  const [videoList, setVideoList] = useState(videoLinks[0].videos);
  const [videoID, setVideoID] = useState("hlJUezuNFuI");

  const handleSelectedModule = (e) => {
    // store the value
    setSelectedModule(e.target.value);
    console.log(selectedModule);
  };

  const changeVideo = (youtubeID) => {
    setVideoID(youtubeID);
  };

  useEffect(() => {
    // restart the colors
    let updatedModuleButtonColors = ["#FFFFFF", "#FFFFFF", "#FFFFFF"];

    if (selectedModule === "Painting") {
      updatedModuleButtonColors[0] = "#668A3D";
      setVideoList(videoLinks[0].videos);
    } else if (selectedModule === "Woodcutting") {
      updatedModuleButtonColors[1] = "#668A3D";
      setVideoList(videoLinks[1].videos);
    } else if (selectedModule === "Plumbering") {
      updatedModuleButtonColors[2] = "#668A3D";
      setVideoList(videoLinks[2].videos);
    }

    setModuleButtonColors(updatedModuleButtonColors);
  }, [selectedModule]);

  return (
    <div className="resource-page">
      <div className="resource-page-header">
        <h2 className="resource-page-title">Resources</h2>
        <p>
          Check out all of these videoes to either learn a new skill set or get
          you prepared for volunteer days.
        </p>
      </div>

      <div className="resource-select-module-container">
        <div className="resource-select-module-container-contents">
          <h3>Choose a module you want to learn!</h3>

          <div className="resource-select-module-buttons">
            <form>
              <input
                className="module-button"
                type="button"
                value="Painting"
                onClick={handleSelectedModule}
                style={{ backgroundColor: moduleButtonColors[0] }}
              ></input>
              <input
                className="module-button"
                type="button"
                value="Woodcutting"
                onClick={handleSelectedModule}
                style={{ backgroundColor: moduleButtonColors[1] }}
              ></input>
              <input
                className="module-button"
                type="button"
                value="Plumbering"
                onClick={handleSelectedModule}
                style={{ backgroundColor: moduleButtonColors[2] }}
              ></input>
            </form>
          </div>
        </div>
      </div>

      <div className="resource-module-container">
        {/* Need to make this flex */}
        <div className="resource-module-container-contents">
          <div className="resource-module-video-list">
            {videoList.map((video, index) => {
              console.log(videoLinks);
              return (
                <button
                  className="video-button"
                  key={index}
                  onClick={() => changeVideo(video.video_id)}
                >
                  {video.title}
                </button>
              );
            })}
          </div>

          <YouTube className="video-item" videoId={videoID} opts={opts} />
        </div>
      </div>
    </div>
  );
}

export default Resources;

import "./resource_page.css";
import YouTube from "react-youtube";
import { useState, useEffect } from "react";

function Resources() {
  const opts = {
    height: "260",
    width: "450",
    playerVars: {
      autoplay: 0, // Set to 1 if you want the video to autoplay
    },
  };

  const [selectedModule, setSelectedModule] = useState("Painting");
  const [moduleButtonColors, setModuleButtonColors] = useState(["#668A3D", "#FFFFFF", "#FFFFFF"]);

  const handleSelectedModule = (e) => {
    // store the value
    setSelectedModule(e.target.value);
    console.log(selectedModule);
  }

  useEffect(() => {
    let updatedModuleButtonColors = ["#FFFFFF", "#FFFFFF", "#FFFFFF"];

    if (selectedModule === "Painting") {
      updatedModuleButtonColors[0] = "#668A3D";
    } else if (selectedModule === "Woodcutting") {
      updatedModuleButtonColors[1] = "#668A3D";
    } else if (selectedModule === "Plumbering") {
      updatedModuleButtonColors[2] = "#668A3D";
    }

    setModuleButtonColors(updatedModuleButtonColors);

  }, [selectedModule])

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
        <h3>Choose a module you want to learn!</h3>
        
        <div className="resource-select-module-buttons">
          <form>
            <input className="module-button" type="button" value="Painting" onClick={handleSelectedModule} style={{backgroundColor : moduleButtonColors[0]}}></input>
            <input className="module-button" type="button" value="Woodcutting" onClick={handleSelectedModule} style={{backgroundColor : moduleButtonColors[1]}}></input>
            <input className="module-button" type="button" value="Plumbering" onClick={handleSelectedModule} style={{backgroundColor : moduleButtonColors[2]}}></input>
          </form>
        </div>
      </div>

      <div className="resource-module-container">
        {/* Need to make this flex */}
        <div className="resource-module-container-contents">
          <div className="resource-module-video-list">



          </div>

          <YouTube className="video-item" videoId="hlJUezuNFuI" opts={opts} />
        </div>
      </div>
    </div>
  );
}

export default Resources;

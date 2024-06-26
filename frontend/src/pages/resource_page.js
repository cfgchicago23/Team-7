// resourcespages.js

import "./resource_page.css";
import YouTube from "react-youtube";
import { useState, useEffect } from "react";
import Navbar from "../navbar";
import {user} from './SignUp';
import {user2} from './LoginForm';
var user3 = ''
    if (user.length > user2.length) {
        user3 = user;
    } else {
        user3 = user2;
    }
const retrievedUser = JSON.parse(localStorage.getItem('rohan'));

function Resources() {
  // JSON objects of videos for each module
  const videoLinks = [
    {
      "module-title": "Painting",
      videos: [
        {
          title: "Basic Painting Tips",
          video_id: "CRXCB_3gLok",
        },
        {
          title: "How to Paint the Doorstep",
          video_id: "syMnmDrp2qY",
        },
        {
          title: "Doorstep Painting Tips",
          video_id: "39Cw42fWTmc",
        },
      ],
    },
    {
      "module-title": "Woodcutting",
      videos: [
        {
          title: "How to Make a Sawbuck in 3 Minutes",
          video_id: "waxfOrAjWvE",
        },
        {
          title: "How to Split Wood",
          video_id: "aEZCgZV7Ecw",
        },
        {
          title: "Cutting Board for Beginners",
          video_id: "Qj3cu9PlHHU",
        },
      ],
    },
    {
      "module-title": "Plumbing",
      videos: [
        {
          title: "How to Connect a Broken PVC Pipe",
          video_id: "UdeZkJEv5xU",
        },
        {
          title: "How To Plumb A Bathroom In 20 Minutes",
          video_id: "Jt0VfS6xw2U",
        },
        {
          title: "How To Vent Plumbing Pipe - Toilet, Bathroom Sink, and more!",
          video_id: "XlHFdxSXR2s",
        },
      ],
    },
  ];

  const [selectedModule, setSelectedModule] = useState("Painting");
  const [moduleButtonColors, setModuleButtonColors] = useState([
    "#668A3D",
    "#FFFFFF",
    "#FFFFFF",
  ]);

  const [videoList, setVideoList] = useState(videoLinks[0].videos);
  const [videoID, setVideoID] = useState(videoList[0].video_id); // Set the initial video ID

  // Let the user know how many stars they earn from finishing watching the video
  const handleVideoEnd = (event) => {
    alert('You have earned 2 stars!')
    //add to score
    console.log(retrievedUser);
    retrievedUser.score = retrievedUser.score+ 2;
    localStorage.setItem('rohan', JSON.stringify(retrievedUser));

  };

  const opts = {
    height: "380",
    width: "650",
    playerVars: {
      autoplay: 0, // Set to 1 if you want the video to autoplay
    }
  };

  // Save the state of the selected module
  const handleSelectedModule = (e) => {
    setSelectedModule(e.target.value);
    console.log(selectedModule);
  };

  // Switch the video via its id
  const changeVideo = (youtubeID) => {
    setVideoID(youtubeID);
  };


  useEffect(() => {
    // restart the module colors
    let updatedModuleButtonColors = ["#FFFFFF", "#FFFFFF", "#FFFFFF"];

    // update the module button's color and get the video list based on the user selection's module
    if (selectedModule === "Painting") {
      updatedModuleButtonColors[0] = "#668A3D";
      setVideoList(videoLinks[0].videos);
      setVideoID(videoLinks[0].videos[0].video_id); // Set the video ID here
    } else if (selectedModule === "Woodcutting") {
      updatedModuleButtonColors[1] = "#668A3D";
      setVideoList(videoLinks[1].videos);
      setVideoID(videoLinks[1].videos[0].video_id); // Set the video ID here
    } else if (selectedModule === "Plumbing") {
      updatedModuleButtonColors[2] = "#668A3D";
      setVideoList(videoLinks[2].videos);
      setVideoID(videoLinks[2].videos[0].video_id); // Set the video ID here
    }

    // save the state of the new module buttons
    setModuleButtonColors(updatedModuleButtonColors);
  }, [selectedModule]);

  return (
    <div className="resource-page">
      <Navbar /> 
      <div className="resource-page-header">
        <h2 className="resource-page-title">Resources</h2>
        <p>
          Check out all of these videos to either learn a new skill set or get
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
                value="Plumbing"
                onClick={handleSelectedModule}
                style={{ backgroundColor: moduleButtonColors[2] }}
              ></input>
            </form>
          </div>
        </div>
      </div>

      <div className="resource-module-container">
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

          <YouTube className="video-item" videoId={videoID} opts={opts} onEnd={handleVideoEnd} />
        </div>
      </div>
    </div>
  );
}

export default Resources;






// import "./resource_page.css";
// import YouTube from "react-youtube";
// import { useState, useEffect } from "react";
// import Navbar from "../navbar";

// function Resources() {
//   // JSON objects of videos for each module
//   const videoLinks = [
//     {
//       "module-title": "Painting",
//       videos: [
//         {
//           title: "Basic Painting Tips",
//           video_id: "CRXCB_3gLok",
//         },
//         {
//           title: "How to Paint the Doorstep",
//           video_id: "syMnmDrp2qY",
//         },
//         {
//           title: "Doorstep Painting Tips",
//           video_id: "39Cw42fWTmc",
//         },
//       ],
//     },
//     {
//       "module-title": "Woodcutting",
//       videos: [
//         {
//           title: "How to Make a Sawbuck in 3 Minutes",
//           video_id: "waxfOrAjWvE",
//         },
//         {
//           title: "How to Split Wood",
//           video_id: "aEZCgZV7Ecw",
//         },
//         {
//           title: "Cutting Board for Beginners",
//           video_id: "Qj3cu9PlHHU",
//         },
//       ],
//     },
//     {
//       "module-title": "Plumbing",
//       videos: [
//         {
//           title: "How to Connect a Broken PVC Pipe",
//           video_id: "UdeZkJEv5xU",
//         },
//         {
//           title: "How To Plumb A Bathroom In 20 Minutes",
//           video_id: "Jt0VfS6xw2U",
//         },
//         {
//           title: "How To Vent Plumbing Pipe - Toilet, Bathroom Sink, and more!",
//           video_id: "XlHFdxSXR2s",
//         },
//       ],
//     },
//   ];

//   const [selectedModule, setSelectedModule] = useState("Painting");
//   const [moduleButtonColors, setModuleButtonColors] = useState([
//     "#668A3D",
//     "#FFFFFF",
//     "#FFFFFF",
//   ]);

//   const [videoList, setVideoList] = useState(videoLinks[0].videos);
//   const [videoID, setVideoID] = useState("hlJUezuNFuI");

//   // Let the user know how many stars they earn from finishing watching the video
//   const handleVideoEnd = (event) => {
//     alert('You have earned 2 stars!')
//   };

//   const opts = {
//     height: "380",
//     width: "650",
//     playerVars: {
//       autoplay: 0, // Set to 1 if you want the video to autoplay
//     }
//   };

//   // Save the state of the selected module
//   const handleSelectedModule = (e) => {
//     setSelectedModule(e.target.value);
//     console.log(selectedModule);
//   };

//   // Switch the video via its id
//   const changeVideo = (youtubeID) => {
//     setVideoID(youtubeID);
//   };


//   useEffect(() => {
//     // restart the module colors
//     let updatedModuleButtonColors = ["#FFFFFF", "#FFFFFF", "#FFFFFF"];

//     // update the module button's color and get the video list based on the user selection's module
//     if (selectedModule === "Painting") {
//       updatedModuleButtonColors[0] = "#668A3D";
//       setVideoList(videoLinks[0].videos);
//     } else if (selectedModule === "Woodcutting") {
//       updatedModuleButtonColors[1] = "#668A3D";
//       setVideoList(videoLinks[1].videos);
//     } else if (selectedModule === "Plumbing") {
//       updatedModuleButtonColors[2] = "#668A3D";
//       setVideoList(videoLinks[2].videos);
//     }

//     // save the state of the new module buttons
//     setModuleButtonColors(updatedModuleButtonColors);
//   }, [selectedModule]);

//   return (
//     <div className="resource-page">
//       <Navbar /> 
//       <div className="resource-page-header">
//         <h2 className="resource-page-title">Resources</h2>
//         <p>
//           Check out all of these videoes to either learn a new skill set or get
//           you prepared for volunteer days.
//         </p>
//       </div>

//       <div className="resource-select-module-container">
//         <div className="resource-select-module-container-contents">
//           <h3>Choose a module you want to learn!</h3>

//           <div className="resource-select-module-buttons">
//             <form>
//               <input
//                 className="module-button"
//                 type="button"
//                 value="Painting"
//                 onClick={handleSelectedModule}
//                 style={{ backgroundColor: moduleButtonColors[0] }}
//               ></input>
//               <input
//                 className="module-button"
//                 type="button"
//                 value="Woodcutting"
//                 onClick={handleSelectedModule}
//                 style={{ backgroundColor: moduleButtonColors[1] }}
//               ></input>
//               <input
//                 className="module-button"
//                 type="button"
//                 value="Plumbing"
//                 onClick={handleSelectedModule}
//                 style={{ backgroundColor: moduleButtonColors[2] }}
//               ></input>
//             </form>
//           </div>
//         </div>
//       </div>

//       <div className="resource-module-container">
//         <div className="resource-module-container-contents">
//           <div className="resource-module-video-list">
//             {videoList.map((video, index) => {
//               console.log(videoLinks);
//               return (
//                 <button
//                   className="video-button"
//                   key={index}
//                   onClick={() => changeVideo(video.video_id)}
//                 >
//                   {video.title}
//                 </button>
//               );
//             })}
//           </div>

//           <YouTube className="video-item" videoId={videoID} opts={opts} onEnd={handleVideoEnd} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Resources;
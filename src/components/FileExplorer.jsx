import React, { useState } from "react";
import { FaFolder, FaFolderOpen, FaFile } from "react-icons/fa";
import { Link } from "react-router-dom";
import DevShow from "../../UI-Components/DevShow/DevShow";

const FileExplorer = () => {
  const [openFolders, setOpenFolders] = useState({});

  const handleToggleFolder = (folderName) => {
    setOpenFolders((prev) => ({
      ...prev,
      [folderName]: !prev[folderName],
    }));
  };

  const fileStructure = {
    "src": {
      type: "folder",
      content: {
        "Home.jsx": { type: "file",link:"#" },
      },
    },
    "UI-Animation": {
      type: "folder",
      content: {
        "FramerMotion": {
          type: "folder",
          content: {
            "DevShow.jsx": { type: "file",link:"devshow" },
            "Footer": { type: "file" },
          },
        },
      },
    },
    "UI-Components": {
      type: "folder",
      content: {
        "Cards": {
          type: "folder",
          content: {
            "InfoCard": { type: "folder", content: {
              "InfoCard.jsx": { type: "file",link:"infocard" },
            } },
            
          },
        },
        "ProjectCard.tsx": {
          type: "folder",
          content: {
            "DevShow.jsx": { type: "file",link:"projectcard" },
            
          },
        },
        "Sing-Up / Login": {
          type: "folder",
          content: {
            "Signin.jsx": { type: "file",link:"singin" }, 
            "Signup.jsx": { type: "file",link:"singup" }, 
          },
        },
      },
    },
    "public": {
      type: "folder",
      content: {
        "index.html": { type: "file" },
        "favicon.ico": { type: "file" },
      },
    },
    "README.md": { type: "file" },
  };

  const renderFileStructure = (structure, path = "") => {
    return Object.keys(structure).map((key) => {
      const item = structure[key];
      const itemPath = path ? `${path}/${key}` : key; 
      const link = item.link ? item.link : ''
      if (item.type === "folder") {
        return (
          <div key={itemPath}>
            <div
              className="flex items-center cursor-pointer p-2 hover:bg-gray-700"
              onClick={() => handleToggleFolder(itemPath)}
            >
              {openFolders[itemPath] ? (
                <FaFolderOpen className="mr-2" />
              ) : (
                <FaFolder className="mr-2" />
              )}
              {key}
            </div>
            {openFolders[itemPath] && (
              <div className="ml-4">
                {renderFileStructure(item.content, itemPath , link)}
              </div>
            )}
          </div>
        );
      }

      return (
        <Link to={`/${link}`} key={itemPath} className="flex  items-center p-2 pl-8 hover:bg-gray-700">
          <FaFile className="mr-2" />
          {key}
        </Link>
      );
    });
  };

  return (
    <>
    <div className="h-screen  bg-gray-800 text-white md:w-3/5  p-4">
   <div className="p-3 border border-gray-400 items-center flex flex-col justify-center">
    <div className="text-center">
        <h1 className="text-lg">File Explorer React & Nextjs Component</h1>
        <p className="text-sm">Click on the file to view the content</p>
    </div>
   </div>
   <div className="md:mx-6 mx-4 mt-2 bg-gray-600">

      {renderFileStructure(fileStructure)}
   </div>
   <div className="mt-4">

   <DevShow />
   </div>
    </div>
    </>
  );
};

export default FileExplorer;

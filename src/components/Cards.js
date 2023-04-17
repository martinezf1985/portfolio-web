// import React, { useState, useEffect } from "react";

// import { motion } from "framer-motion";

// const cardTransition = {
//   type: "spring",
//   stiffness: 500,
//   damping: 30
// };

// const cardVariants = {
//   hover: {
//     y: -5,
//     boxShadow: "0 5px 20px rgba(148, 0, 211)",
//     scale: 1.02
//   },
//   tap: {
//     y: 0,
//     boxShadow: "0 3px 10px rgba(148, 0, 211)",
//     scale: 1
//   },
//   link: {
//     cursor: "pointer"
//   }
// };


// function Cards(props) {
//   const { projects } = props;
//   const [currentPage, setCurrentPage] = useState(1);
//   const [projectList, setProjectList] = useState(projects.slice(0, 6));

//   useEffect(() => {
//     const nextPage = currentPage + 1;
//     const projectsToAdd = projects.slice(currentPage * 6, nextPage * 6);
//     if (projectsToAdd.length > 0) {
//       setCurrentPage(nextPage);
//       setProjectList([...projectList, ...projectsToAdd]);
//     }
//   }, [currentPage, projectList]);

//   const handleClick = (event, link) => {
//     event.preventDefault();
//     window.open(link, "_blank");
//   };

//   const handleScroll = (event) => {
//     const bottom =
//       event.target.scrollHeight - event.target.scrollTop ===
//       event.target.clientHeight;
//     if (bottom) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   return (
//     <div onScroll={handleScroll}>
//       <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
//         {projectList.map((project) => (
//           <motion.a
//             href={project.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="card bg-black rounded-lg overflow-hidden shadow-md text-white"
//             key={project.id}
//             whileHover="hover"
//             whileTap="tap"
//             variants={cardVariants}
//             transition={cardTransition}
//             onClick={(event) => handleClick(event, project.link)}
//           >
//             <img src={project.image} alt={project.title} className="mb-4"/>
//             <div className="p-4">
//               <h3 className="text-xl font-medium mb-2">{project.title}</h3>
//               <p className="text-white mb-4">{project.description}</p>
//               <ul className="mb-4">
//                 {project.technologies.map((technology) => (
//                   <li className="inline-block bg-white  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={technology}>
//                     {technology}
//                   </li>
//                 ))}
//               </ul>
//               <p className="text-white mb-2">
//                 <strong>Start Date:</strong> {project.startDate}
//               </p>
//               {project.endDate && (
//                 <p className="text-white mb-2">
//                   <strong>End Date:</strong> {project.endDate}
//                 </p>
//               )}
//               {project.location && (
//                 <p className="text-white mb-2">
//                   <strong>Location:</strong> {project.location}
//                 </p>
//               )}
//               {project.company && (
//                 <p className="text-white mb-2">
//                   <strong>Company:</strong> {project.company}
//                 </p>
//               )}
//               {project.type && (
//                 <p className="text-white mb-2">
//                   <strong>Type:</strong> {project.type}
//                 </p>
//               )}
//             </div>
//           </motion.a>
//         ))}
//       </div>
//     </div>
//   );
// }


// export default Cards;





import { motion } from "framer-motion";
import React from "react";

function Cards({ projects }) {
  const [projectFilter, setProjectFilter] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [showLoadMoreButton, setShowLoadMoreButton] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);

  const cardTransition = {
    type: "spring",
    stiffness: 500,
    damping: 30
  };

  const cardVariants = {
    hover: {
      y: -5,
      boxShadow: "0 5px 20px rgba(148, 0, 211)",
      scale: 1.02
    },
    tap: {
      y: 0,
      boxShadow: "0 3px 10px rgba(148, 0, 211)",
      scale: 1
    },
    link: {
      cursor: "pointer"
    }
  };

  React.useEffect(() => {
    setProjectFilter(projects.slice(0, 6));
    if (projects.length <= 6) {
      setShowLoadMoreButton(false);
    }
  }, [projects]);

  const handleLoadMore = async () => {
    setIsLoading(true);
    const nextPage = page + 1;
    const response = await fetch(`/api/projects?page=${nextPage}`);
    const newProjects = await response.json();
    setProjectFilter([...projectFilter, ...newProjects]);
    setPage(nextPage);
    setIsLoading(false);
    if (newProjects.length === 0) {
      setShowLoadMoreButton(false);
    }
  };

  const handleClick = (event, link) => {
    event.preventDefault();
    window.open(link, "_blank");
  };

  return (
    <div>
      <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {projectFilter.map((project) => (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card bg-black rounded-lg overflow-hidden shadow-md text-white"
            key={project.id}
            whileHover="hover"
            whileTap="tap"
            variants={cardVariants}
            transition={cardTransition}
            onClick={(event) => handleClick(event, project.link)}
            aria-label={project.title}
            title={project.title}
          >
            <img src={project.image} alt={project.title} className="mb-4" />
            <div className="p-4">
              <h3 className="text-xl font-medium mb-2">{project.title}</h3>
              <p className="text-white mb-4">{project.description}</p>
              <ul className="mb-4">
                {project.technologies.map((technology) => (
                  <li
                    className="inline-block bg-white  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    key={technology}
                  >
                    {technology}
                  </li>
                ))}
              </ul>
              <p className="text-white mb-2">
                <strong>Start Date:</strong> {project.startDate}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
      {showLoadMoreButton && (
        <motion.button
          className="bg-purple-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-purple-700"
          onClick={handleLoadMore}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isLoading}
          >
          {isLoading ? "Loading..." : "Load More"}
          </motion.button>
          )}
          </div>
          );
          }
          
          export default Cards;
          
          
          
          
          
          
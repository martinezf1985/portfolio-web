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
  
  <div className="card-container   ">
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 xl:gap-16 ">
    {projectFilter.map((project) => (
      <motion.a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        key={project.id}
        className="card bg-black rounded-lg overflow-hidden shadow-md text-white w-[380px] h-[580px]  "
        whileHover="hover"
        whileTap="tap"
        variants={cardVariants}
        transition={cardTransition}
        onClick={(event) => handleClick(event, project.link)}
        aria-label={project.title}
        title={project.title}
      >
        <img src={project.image} alt={project.title} className="mb-4 w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-medium mb-2">{project.title}</h3>
          <p className="text-white mb-4">{project.description}</p>
          <ul className="flex flex-wrap mb-4">
            {project.technologies.map((technology) => (
              <li                className="inline-block bg-purple-600 rounded-full px-3 py-1 text-sm font-semibold text-white ç
              >r-2 mb-2"
                key={technology}
              >
                {technology}
              </li>
            ))}
          </ul>
          <p className="text-white">
            <strong>Start Date:</strong> {project.startDate}
          </p>
        </div>
      </motion.a>
    ))}
  </div>
  {showLoadMoreButton && (
    <motion.button
      className="bg-purple-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200 mt-8 mx-auto block"
      onClick={handleLoadMore}
      disabled={isLoading}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isLoading ? "Loading..." : "Load More"}
    </motion.button>
  )}
</div>
  );
  
      }  
          
          export default Cards;


          


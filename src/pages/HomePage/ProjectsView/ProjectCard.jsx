export default function ProjectCard({ project, handleClick }) {
  return (
    <div className="shadow-md hover:shadow-xl rounded-xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-2 max-w-sm flex flex-col h-full">
      <div className="img-container relative overflow-hidden group flex-shrink-0">
        <img
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
          src={project.images[0]}
          alt={project.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="text-container p-5 flex flex-col flex-1">
        <h3 className="text-2xl font-bold mb-3 text-gray-800 line-clamp-2">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
          {project.body}
        </p>
        <button
          onClick={() => handleClick(project)}
          className="rounded-lg cursor-pointer uppercase font-semibold bg-[#20b486] hover:bg-[#1a9670] text-white w-full px-4 py-3 transition-colors duration-300 shadow-sm hover:shadow-md mt-auto"
        >
          Read More
        </button>
      </div>
    </div>
  );
}

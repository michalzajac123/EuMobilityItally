export default function PastProjectCard(props) {
  return (
    <div className="shadow-md hover:shadow-xl rounded-xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-2 max-w-sm">
      <div className="img-container relative overflow-hidden group">
        <img
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
          src={props.imgSrc}
          alt={props.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="text-container p-5">
        <p className="text-[#20b486] text-sm font-semibold uppercase tracking-wide mb-2">
            Country
        </p>
        <h3 className="text-2xl font-bold mb-3 text-gray-800">{props.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {props.description}          
        </p>
        <button className="rounded-lg cursor-pointer uppercase font-semibold bg-[#20b486] hover:bg-[#1a9670] text-white w-full px-4 py-3 transition-colors duration-300 shadow-sm hover:shadow-md">
            Read More
        </button>
      </div>
    </div>
  );
}

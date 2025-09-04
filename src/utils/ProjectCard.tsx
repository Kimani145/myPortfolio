export default function ProjectCard({ title, tags, status }) {
  return (
    <div className="project-card group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 p-6 shadow-lg transition-transform duration-300 backdrop-blur-sm boderder-gray-200 hover: border-gray-300 transition-all ease-in-out duration-300 h-64">

    {/*placeholder for image*/}
    <div className="placeholder-image absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500 group-hover:bg-">

    <span className="text-xs uppercase tracking-widest text-gray-400">{status}</span>

    </div>
   {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-10 group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <div className="flex gap-2 mt-2">
          {tags.map((tag, i) => (
            <span key={i} className="text-xs px-2 py-1 rounded-full bg-gray-800/80 text-gray-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* Hover Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  )
}

import { ProjectObj } from "../vite-env";

export default function ProjectComponent({ proyecto }: ProjectObj ) {
  return (
    <div
      key={proyecto.name}
      className="group relative m-4 border-2 border-slate/50 max-w-2xl rounded-md overflow-hidden"
    >
      <div className="group-hover:bg-black/70 w-full h-full z-40 absolute transition-all duration-300 flex items-center justify-center">
        <a
          href={proyecto.link}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-slate-300 uppercase font-extrabold"
        >
          ver detalles
        </a>
      </div>
      <img
        src={proyecto.image}
        alt={`imagen del proyecto ${proyecto.name}`}
        className="group-hover:scale-125 transition-all duration-300"
      />
      <h3 className="uppercase">{proyecto.name}</h3>
      <p>{proyecto.description}</p>
    </div>
  );
}

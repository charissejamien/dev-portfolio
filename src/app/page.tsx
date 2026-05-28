import ProjectsCard from "@/components/ProjectsCard";

export default function Home() {

  const nav = [
    {nav: "Home"},
    {nav: "About"},
    {nav: "Projects"},
    {nav: "Contact"},
  ]

  return (
    <div>
        <header className="flex py-10 px-12 justify-between">
          <p>Charisse Jamien</p>
          <div className="flex gap-10">
            {nav.map((n) => (
              <p key={n.nav}>{n.nav}</p>
            ))}
          </div>
        </header>

        <div className="w-[80%] mx-auto">
          <div className="flex">
            <p>Hello</p>
            <div className="w-2 h-2 rounded-[50%] bg-white"/>
          </div>
          <p>I`m Charisse</p>
          <p>Software Developer</p>

          <div>
            <button>Download Resume</button>
          </div>

          <div className="w-[80%] mx-auto">
            <ProjectsCard/>
          </div>
          
        </div>
    </div>
  );
}

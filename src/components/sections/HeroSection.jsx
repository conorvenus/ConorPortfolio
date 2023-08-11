import squiggle from "../../squiggle.svg"

export default function HeroSection() {
    return (
        <section className="py-16 hero flex items-center gap-8">
            <h1 className="font-bold text-5xl flex-1">A <span>Software Developer</span> From The United Kingdom.</h1>
            <div className="flex-1">
                <img className="max-h-80 ml-auto" src={squiggle}></img>
            </div>
         </section>
    )
}
import Card from "../Card";

export default function EducationSection() {
    return (
        <section className="py-16 cards grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card date="09/2022 - Present" title="Queen Mary University of London" subtitle="BSc (Hons) Computer Science" bullets={[
                "Achieved a 1st (97% overall) in first-year, with 100% in Fundamentals of Web Technology, Information Systems Analysis, and Automata & Formal Languages.",
            ]}></Card>
            <Card date="09/2020 - 06/2022" title="The Sweyne Park Sixth Form" subtitle="A-Levels" bullets={[
                "Achieved an A* in both Computer Science and Mathematics, and a Dist*Dist* in Digital Publishing, equivalent to 4 A*s overall."
            ]}></Card>
        </section>
    )
}
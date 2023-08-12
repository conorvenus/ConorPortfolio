import Card from "../Card";

export default function ExperienceSection() {
    return (
        <section className="py-16 cards flex flex-wrap gap-8">
            <Card date="09/2023 - Present" title="Teaching Assistant & Demonstrator" subtitle="Queen Mary University of London" bullets={[
                "Played a key role in shaping students’ expertise in Procedural Programming (Java) and Fundamentals of Web Technology (HTML/CSS/JavaScript), resulting in noteworthy academic progress.",
                "Effectively evaluated and graded students’ coursework, examination papers, and final projects, contributing to the accurate assessment of module performance."
            ]}></Card>
            <Card date="09/2019 - 04/2020" title="Freelance Developer" subtitle="Self-Employed" bullets={[
                "Professionally developed a robust competitive matchmaking system in C#, for a prominent Esports organisation, who have since been acquired by G2 Esports.",
                "Employed an SQLite database to systematically organise and manage extensive information pertaining to a user-base surpassing 5,000 individuals, utilising EF Core to streamline database communication.",
                "Managed hundreds of simultaneous matches through concurrency methodologies, ensuring the system was scalable and performant.",
            ]}></Card>
            <Card date="09/2019 - 04/2020" title="Counter Assistant" subtitle="Safedale Pharmacy" bullets={[
                "Orchestrated cohesive and effective communication between patients and colleagues, resulting in an increase in team productivity and a decrease in patient waiting time.",
                "Efficiently handled high customer volumes and time-sensitive prescriptions, fostering the ability to thrive under pressure."
            ]}></Card>
        </section>
    )
}
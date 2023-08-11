import Card from "../Card";

export default function EducationSection() {
    return (
        <section className="py-16 cards grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card date="09/2022 - Present" title="Queen Mary University of London" subtitle="BSc (Hons) Computer Science" bullets={[
                "Example bullet point 1.",
                "Testing the second bullet point, number 2."
            ]}></Card>
            <Card date="09/2020 - 06/2022" title="The Sweyne Park Sixth Form" subtitle="A-Levels" bullets={[
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam doloribus nisi ducimus illum accusantium, quidem molestias officia dolor reiciendis corporis assumenda facilis veniam incidunt fugit."
            ]}></Card>
        </section>
    )
}
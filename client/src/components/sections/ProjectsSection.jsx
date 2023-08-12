import Card from "../Card";

export default function ProjectsSection() {
    return (
        <section className="py-16 cards flex flex-wrap gap-8">
            <Card date="07/2023 - Present" title="TwitchIRC" subtitle="C#, xUnit, FluentAssertions, NSubstitute" bullets={[
                "Produced a declarative and modular framework for developing Twitch chat bots based on RFC 1459 and the official Twitch documentation, ensuring stable releases through unit testing with xUnit and FluentAssertions.",
                "Created a user-friendly and easy-to-use commands framework through reflection.",
                "Utilised an event-driven approach and object-oriented design patterns, such as the builder and facade pattern to increase the declarativeness of the codebase."
            ]}></Card>
            <Card date="03/2022 - 03/2022" title="Wordle Clone" subtitle="C#, Blazor, ASP.NET, EF Core" bullets={[
                "Implemented a secure and robust server-side clone of Wordle, ensuring the integrity of the game by retaining the solution on the server; conveying proximity updates to the client.",
                "Incorporated a replay feature for the player to rewatch moves and enhance performance",
                "Handled rolling daily words by seeding a random number generator on the current date relative to the Unix epoch."
            ]}></Card>
            <Card date="12/2020 - 12/2020" title="Stock Checker" subtitle="Python, BeautifulSoup, Selenium" bullets={[
                "Developed a stock checker to automatically open the website of a given supplier when a GPU comes in stock, this was to help during the silicon shortages.",
                "Utilised as a library in an application that was actively used to get people low-stock GPUs."
            ]}></Card>
        </section>
    )
}
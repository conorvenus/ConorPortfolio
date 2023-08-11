export default function Card({ date, title, subtitle, bullets }) {
    return (
        <article className="card relative grid grid-cols-2 gap-4 w-fit border p-4 rounded-md border-text-secondary">
            <span className="col-span-2 text-[#5BFF9D]">{date}</span>
            <span className="font-bold text-lg">{title}</span>
            <span className="text-right text-text-secondary font-light">{subtitle}</span>
            <ul className="col-span-2 list-disc list-inside text-text-secondary">
                {bullets.map((bullet, index) => <li className="list-item" key={index}>{bullet}</li>)}
            </ul>
        </article>
    )
}
import BackgroundCircle from "./BackgroundCircle"

export default function BackgroundCircles() {
    return (
        <>
            <BackgroundCircle radius="30vw" colour="#00FFA0" top="-15vw" left="-10vw" />
            <BackgroundCircle radius="30vw" colour="#00F0FF" top="25vw" right="-10vw" />
            <BackgroundCircle radius="50vw" colour="#23FFD7" top="50vw" left="-20vw" />
        </>
    )
}
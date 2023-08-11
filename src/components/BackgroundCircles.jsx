import BackgroundCircle from "./BackgroundCircle"

export default function BackgroundCircles() {
    return (
        <>
            <BackgroundCircle radius="30vw" colour="#00FFE0" top="-15vw" left="-10vw" />
            <BackgroundCircle radius="30vw" colour="#00F0FF" top="25vw" right="-10vw" />
            <BackgroundCircle radius="30vw" colour="#8423FF" top="65vw" left="-10vw" />
        </>
    )
}
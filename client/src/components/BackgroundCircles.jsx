import BackgroundCircle from "./BackgroundCircle"

export default function BackgroundCircles() {
    return (
        <>
            <BackgroundCircle radius="30vh" top="-10vh" left="-5vh" />
            <BackgroundCircle radius="40vh" top="15vh" right="-5vh" />
            <BackgroundCircle radius="50vh" top="50vh" left="-5vh" />
        </>
    )
}
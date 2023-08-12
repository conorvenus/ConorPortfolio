export default function BackgroundCircle({ radius, colour, top, left, right, bottom }) {
    return (
        <div 
        className="-z-10 rounded-full blur-[150px] opacity-20 absolute" 
        style={{
            width: radius,
            height: radius,
            background: colour,
            top: top,
            left: left,
            right: right,
            bottom: bottom,
        }}></div>
    )
}
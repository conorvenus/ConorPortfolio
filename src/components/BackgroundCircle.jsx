export default function BackgroundCircle({ radius, colour, top, left, right, bottom }) {
    return (
        <div 
        className={`w-[${radius}] h-[${radius}] bg-[${colour}] rounded-full blur-[150px] opacity-20 absolute`} 
        style={{
            top: top,
            left: left,
            right: right,
            bottom: bottom
        }}></div>
    )
}
import Logo from "../../assets/full-logo.png";

export default function Topbar() {
    return (
        <div className="h-16 px-7 flex items-center justify-between border-b border-black">
            <img src={Logo} alt="Logo" className="h-10"/>
            <div>Profile Account</div>
        </div>
    )
}
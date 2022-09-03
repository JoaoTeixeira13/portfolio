import "./footer.css";

export default function Footer() {
    const getYear: Function = (): number => {
        return new Date().getFullYear();
    };
    return <div id="footer"> &copy; João Teixeira {getYear()}</div>;
}

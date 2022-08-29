import SocialMedia from "../socialMedia";
import NavigationDots from "../navigationDots";

export default function AppWrap(
    Component: Function,
    idName: string,
    classNames: string
) {
    return function HOC() {
        return (
            <div id={idName} className={`appContainer ${classNames}`}>
                <SocialMedia />
                <div className="appWrapper appFlex">
                    <Component />
                </div>
                <NavigationDots active={idName} />
            </div>
        );
    };
}

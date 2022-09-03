
import NavigationOption from "./NavigationOption";

export default function Navigation() {

    const Icons = [
        { icon: "fas fa-chart-line" },
        { icon: "fas fa-chevron-circle-right" },
        { icon: "fas fa-cart-arrow-down" },
        { icon: "far fa-envelope-open" },
        { icon: "fas fa-clipboard" },
        { icon: "fas fa-tools" }
    ]
    return (
        <div>
            {Icons.map((el) => (
                <NavigationOption icon={el.icon} />
            ))}
        </div>
    )
};

export const MenuIcon = ({ isMobileMenuOpen }: { isMobileMenuOpen: boolean }) => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g
            style={{
                transformOrigin: "center",
                transition: "transform 0.5s ease",
            }}
        >
            {/* Top line transforms to one half of X */}
            <line
                x1="4"
                y1="8"
                x2="20"
                y2="8"
                stroke="currentColor"
                strokeWidth="2"
                style={{
                    transformOrigin: "center",
                    transform: isMobileMenuOpen ? "translate(0, 4px) rotate(45deg)" : "none",
                    transition: "transform 0.5s ease",
                }}
            />
            {/* Bottom line transforms to other half of X */}
            <line
                x1="4"
                y1="16"
                x2="20"
                y2="16"
                stroke="currentColor"
                strokeWidth="2"
                style={{
                    transformOrigin: "center",
                    transform: isMobileMenuOpen ? "translate(0, -4px) rotate(-45deg)" : "none",
                    transition: "transform 0.5s ease",
                }}
            />
        </g>
    </svg>
);

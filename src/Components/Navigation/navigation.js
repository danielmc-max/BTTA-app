import React, { useState } from "react";

const Navigation = () => {
    const [selectedNavItem, setSelectedNavItem] = useState("welcome");
    const navItems = [
        { id: 1, title: "Welcome", name: "Welcome" },
        { id: 2, title: "Photo Gallery", name: "PhotoGallery" },
        { id: 3, title: "Tournaments", name: "Tournaments" },
        { id: 4, title: "Calendar", name: "Calendar" },
        { id: 5, title: "Community Blog", name: "CommunityBlog"},
        { id: 6, title: "Contact", name: "Contact"}
    ];

return (
    <div className="Navigation">
        <ul className="NavigationMenus">
            {navItems.map((item) => {
                return (
                    <li
                    key={item.id}
                    onClick={() => setSelectedNavItem(item.name)}
                    className={selectedNavItem === item.name ? `activeNavItem` : ""}
                    >
                        <a href={`#${item.name}`}>{item.title}</a>
                    </li>
                );
            })}
        </ul>
    </div>
    );
};

export default Navigation;
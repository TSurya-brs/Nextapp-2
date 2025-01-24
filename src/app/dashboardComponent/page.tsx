// Card.tsx
import { FaCircle } from "react-icons/fa";  // Importing any icons you might need

interface CardProps {
  title: string;
  value: string | number;
  icon: JSX.Element;        // This allows you to pass any React icon
  iconColor: string;        // This will decide the color of the icon
  isLarge?: boolean;        // Optional prop to make some cards larger (like the Dashboard card)
}

const Card = ({ title, value, icon, iconColor, isLarge }: CardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-4 ${isLarge ? "row-span-1 sm:row-span-2" : ""}`}>
      <div className="p-4 rounded-t-lg">
        <h1>{title}</h1>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold">{value}</p>
          <div className={`text-${iconColor}-500`}>{icon}</div> {/* Dynamic icon color */}
        </div>
      </div>
    </div>
  );
};

export default Card;























// Content.tsx
import React from "react";
import Card from "./Card";  // Import the reusable Card component
import { FaSync, FaFileAlt, FaCircle } from "react-icons/fa";  // Import icons
import Settings from "../settingsComponent/page";  // Import the settings component

const Content = () => {
  const cardData = [
    {
      title: "Dashboard",
      value: 100,
      icon: <FaCircle />,
      iconColor: "green",
      isLarge: true  // The Dashboard card should be larger
    },
    {
      title: "Pending Approvals",
      value: 100,
      icon: <FaCircle />,
      iconColor: "green",
    },
    {
      title: "Rejected Tasks",
      value: 100,
      icon: <FaCircle />,
      iconColor: "gray",
    },
    {
      title: "Repair Tasks",
      value: 100,
      icon: <FaCircle />,
      iconColor: "blue",
    },
    {
      title: "Tasks in Progress",
      value: "In Progress",
      icon: <FaSync />,
      iconColor: "blue",
    },
    {
      title: "Notes",
      value: "Notes",
      icon: <FaFileAlt />,
      iconColor: "gray",
    },
    {
      title: "Initiate Repossession",
      value: 100,
      icon: <FaCircle />,
      iconColor: "yellow",
    }
  ];

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
        {/* Map over the cardData array and render Card components */}
        {cardData.map((card, index) => (
          <Card
            key={index}   // Make sure to add a unique key for each element when mapping
            title={card.title}
            value={card.value}
            icon={card.icon}
            iconColor={card.iconColor}
            isLarge={card.isLarge}   // Pass the isLarge prop to make the Dashboard card bigger
          />
        ))}

        {/* Settings Card */}
        <Settings />
      </div>
    </div>
  );
};

export default Content;

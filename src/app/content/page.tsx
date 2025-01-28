import { FaCircle, FaSync, FaFileAlt ,FaCog,FaTachometerAlt } from 'react-icons/fa';
import { Card,CardProps } from '../dashboardComponent/page'; // Import the Card component

const Content = () => {
  const cardsData :CardProps[]= [
    { title: 'Dashboard',           titleSize:'lg', cardSize: 'lg', cardColor: '',            image: FaTachometerAlt, iconSize: 'lg' },
    { title: 'Pending Approvals',   titleSize:'sm', cardSize: 'md', cardColor: 'red-500',     image: FaCircle, iconSize: 'sm', value: 100, iconColor: 'green-500' },
    { title: 'Rejected Tasks',      titleSize:'lg', cardSize: 'md', cardColor: 'green-500',   image: FaCircle, iconSize: 'sm', value: 100, iconColor: 'gray-500' },
    { title: 'Repair Tasks',        titleSize:'lg', cardSize: 'md', cardColor: 'blue-500',    image: FaCircle, iconSize: 'sm', value: 100, iconColor: 'blue-500' },
    { title: 'Settings',             titleSize:'lg', cardSize: 'sm', cardColor: 'red-500',   image: FaCog,     iconSize: 'lg'},
    { title: 'Tasks in Progress',   titleSize:'lg', cardSize: 'md', cardColor: 'slate-500 ',  image: FaSync,    iconSize: 'lg', iconColor: 'blue-500' },
    { title: 'Notes',               titleSize:'lg', cardSize: 'md', cardColor: 'green-500',   image: FaFileAlt, iconSize: 'lg', value: '', iconColor: 'black' },
    { title: 'Initiate Repossession',titleSize:'sm', cardSize: 'md', cardColor: 'yellow-400', image: FaCircle,  iconSize: 'sm', value: 100, iconColor: 'yellow-500' },
    
  ];

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            cardSize={card.cardSize}
            cardColor={card.cardColor}
            image={card.image}
            iconSize={card.iconSize}
            title={card.title}
            titleSize={card.titleSize}
            value={card.value}
            iconColor={card.iconColor}
            // className={`
            //   ${index === 0 ? 'col-span-2' : ''}
            //   ${index === 3 ? 'row-span-2' : ''}
            // `}
            
          />
        ))}
      </div>
      
    </div>
  );
};

export default Content;

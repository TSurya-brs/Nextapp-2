import { IconType } from 'react-icons';

export interface CardProps {
  cardSize: 'sm' | 'md' | 'lg';
  cardColor: string;
  image: IconType;
  iconSize: 'sm' | 'lg';
  title: string;
  titleSize: 'sm' | 'lg';
  value?: string | number;
  iconColor?: string;
  className?: string; 
}

export const Card = ({ cardSize, cardColor, image: Image, iconSize, title, titleSize, value, iconColor,className }: CardProps ) => {
  return (
    <div className={`bg-${cardColor} rounded-lg shadow-lg   sm:w-48 md:w-80 lg:${cardSize === 'sm' ? 'w-48' : cardSize === 'md' ? 'w-80' : 'w-96'} ${className}`}> 
      <div className={`p-4 rounded-t-lg text-${titleSize}`}>
        <h1>{title}</h1>
      </div>
      <div className="p-6 text-center">
        {value && <h3 className="text-3xl font-bold">{value}</h3>}
        {Image && (
          <div className="flex justify-center mb-4">
            <Image className={`text-${iconColor || 'black'}`} size={iconSize === 'sm' ? 20 : 80} />
          </div>
        )}
      </div>
    </div>
  );
};

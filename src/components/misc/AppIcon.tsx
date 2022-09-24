// assets
import lemonImage from '@/assets/lemon.png';

interface AppIconProps {
  /**
   * String to control css height property
   * eg. 50px / inherit
   */
  height?: string;
}

export const AppIcon = ({ height = 'inherit' }: AppIconProps) => {
  return (
    <img
      src={lemonImage}
      alt="App Icon"
      style={{
        display: 'block',
        height: height,
        objectFit: 'cover',
      }}
    />
  );
};

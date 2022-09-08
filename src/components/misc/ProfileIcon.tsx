import { Avatar, AvatarProps } from '@mui/material';
import { identicon } from 'minidenticons';

interface ProfileIconProps extends AvatarProps {
  // string to be pass to generate random icon
  iconString?: string;
}

/**
 *
 * Todo: Add dompurify
 */
export const ProfileIcon = ({
  iconString = 'lemon.potter.tech',
  ...rest
}: ProfileIconProps) => {
  return (
    <Avatar
      alt="Profile"
      sx={{ backgroundColor: '#eef', width: '30px', height: '30px' }}
      {...rest}
    >
      <img
        alt="Profile"
        src={`data:image/svg+xml;utf8,${identicon(iconString)}`}
      />
    </Avatar>
  );
};

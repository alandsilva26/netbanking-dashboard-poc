import { Box } from '@mui/material';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';

// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ExpandStateIconProps {
  // default false
  isOpen?: boolean;
}

const ExpandLessIcon = MdExpandLess;
const ExpandMoreIcon = MdExpandMore;
/**
 *
 * Returns icon corresponding to expand state.
 * Use this in collapse menus to indicate current state i.e. open or closed
 */
export const ExpandStateIcon = ({ isOpen = false }: ExpandStateIconProps) => {
  const color = isOpen ? 'blue' : 'black';

  return (
    <Box sx={{ color: color }}>
      {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
    </Box>
  );
};

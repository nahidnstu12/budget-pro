import {Button, Grid, Typography} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {FC} from 'react';

interface Props {
  title: string;
  amount: string;
  icons?: any;
  subTitle?: string;
  icons2: any;
}
const CustomCardMyWallet2: FC<Props> = ({title, amount, icons}) => {
  return (
    <Grid
      container
      spacing={0}
      sx={{
        display: 'flex',
        background: '#fff',
        borderRadius: '20px',
        border: '1px solid #F0EEEF',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Grid
        item
        xs={1.5}
        sx={{
          height: '50px',
          width: '50px',
          m: '6px',
          backgroundColor: '#EBE9ED',
          borderRadius: '14px',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {icons}
      </Grid>
      <Grid item xs={5} sx={{pl: '10px'}}>
        <Typography sx={{fontSize: '17px', fontWeight: '700'}}>
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: '700',
            opacity: '0.6',
          }}>
          {amount}
        </Typography>
      </Grid>
      <Grid
        item
        xs={5}
        sx={{
          borderRadius: '10px',
          color: '#fff',
          display: 'flex',
          alignItems: 'end',
          justifyContent: 'right',
          pr: '10px',
        }}>
        <Button
          sx={{color: '#000', p: '0px 0px'}}
          endIcon={<PlayArrowIcon sx={{color: '#000', pr: '0px'}} />}></Button>
      </Grid>
    </Grid>
  );
};
export default CustomCardMyWallet2;

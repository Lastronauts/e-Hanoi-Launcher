import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Introduce() {
  return (
    <Grid container spacing={2} p={5}>
      <Grid item>
        <Image
          src="/icon-transparency.png"
          width={651}
          height={646}
          alt="icon"
        />
      </Grid>
      <Grid item xs container direction="column" spacing={2}>
        <Typography variant="h1" gutterBottom>
          Welcome to
          <br />
          e-Hanoi
        </Typography>
        <Typography variant="body1" gutterBottom>
          e-Hanoiの世界へようこそ、司祭様！
          <br />
          ここでは、世界中にいる司祭様と共に「ハノイの塔」を楽しむことができます！
          <br />
          心ゆくまでお楽しみください！
        </Typography>
      </Grid>
    </Grid>
  );
}

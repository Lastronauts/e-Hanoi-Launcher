import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function AlreadySignedIn() {
  return (
    <Grid container style={{ justifyContent: 'center' }}>
      <Grid>
        <Typography variant="h3">
          既にe-Hanoiに認識されているようですね？
        </Typography>
      </Grid>
      <Grid item sm={5} margin={5}>
        <Typography variant="body1">
          あなたがもしこの世界を去りたいならば、あなたのアイコンをクリックした先でそれを行うことができます。
          私たちは、あなたとまた会えるときを楽しみにしていますよ。
        </Typography>
      </Grid>
    </Grid>
  );
}

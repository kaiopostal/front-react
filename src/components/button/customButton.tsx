import Button from '@mui/material/Button';

export default function CustomButton({label}){

    return (
      <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
     { label }
    </Button>
)
}
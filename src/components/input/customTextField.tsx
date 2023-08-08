import TextField from '@mui/material/TextField';

export default function CustomTextField({label, model, value}){

    return (
        <TextField
        margin="normal"
        required
        fullWidth
        id={model}
        label={label}
        name={model}
        autoComplete={model}
        value={value}
        autoFocus
      />
)
}

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CustomCheckbox({label, model}){

    return (

      <FormControlLabel
              control={<Checkbox value={model} color="primary" />}
              label={label}
      />
)
}
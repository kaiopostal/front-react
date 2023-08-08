import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Copyright from '../../components/copyright'; 

export default function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://www.crmsolucoes.com.br/">
          CRM Soluções
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
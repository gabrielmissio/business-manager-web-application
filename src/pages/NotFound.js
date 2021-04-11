import React from 'react';
import Typography from '@material-ui/core/Typography';

function NotFound() {

  return(
    <div style={{ padding: 80, margin: 'auto', maxWidth: 500 }}>
        <Typography variant="h5" align="center" component="h2" gutterBottom>
        404 Not Found
        </Typography>
    </div>
  )
}

export default NotFound;
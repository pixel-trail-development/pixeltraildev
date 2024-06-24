import { useNavigate } from 'react-router-dom';
import {
    Button,
    Typography,
  } from '@mui/material';
export const SubConfirm = () => {
    const navigate = useNavigate();
    const returnHome = () => {
        navigate('/')
    }

    return (
        <div className="thank-you-page">
            <Typography variant='h2'>Thank you for your inquiry!</Typography>
            <Typography variant='body1' className='typ-body1'>I will aim to respond as soon as possible!</Typography>
            <Button className="return-home" onClick={returnHome}>Return home</Button>
        </div>
    )
}
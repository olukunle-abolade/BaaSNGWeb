import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CustomButton from '../user/CustomButton';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

interface IModal {
  title: string;
  open: boolean;
  btitle1: string;
  btitle2: string;
  subtitle: string;
  handleClose: () => void;
  handleModal: () => void;
}

export default function TrasactionModal({title, open, subtitle, handleClose, btitle1, btitle2, handleModal}: IModal) {

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 className='text-2xl text-black font-semibold text-center'>
            {title}
          </h2>
          <p className='text-[16px] text-black font-normal text-center my-4'>
            {subtitle}
          </p>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <CustomButton onClick={handleClose} title={btitle1} textStyle={{color: "#4730A3"}} buttonColor='#E9E6F4' />
            <CustomButton onClick={handleModal} title={btitle2} buttonStyle={{width: 147}} />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
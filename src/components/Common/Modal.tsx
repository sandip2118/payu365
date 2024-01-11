import React from "react";
import Modal from '@mui/material/Modal';
import { Box } from "@mui/material";
import { colors } from '@/themes'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: `${colors.BLACK_301}`,
  color: `${colors.white}`,
  boxShadow: 24,
  p: 4,
  padding: "30px",
  borderRadius: "10px"
};

const ModalCommon: React.FC<any> = ({modalOpen, setModalOpen, children}) => {
  
  const handleClose = () => setModalOpen(false);

  return(<>
    <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {children}
        </Box>
      </Modal>
  </>)
}

export default ModalCommon;
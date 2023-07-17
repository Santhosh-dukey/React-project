import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Box, Stack } from '@mui/material';
import { useRouter } from 'next/router';

export default function MiniMx({onClick}) {
    const router = useRouter();

  return (
    <>
        <Stack sx={{display:"flex",flexDirection:'row',width:'100%',padding:'0px 5px'}}>
            <Box>
                <CloseIcon onClick={()=>{(router.push("/homepg"))}} fontSize='medium'/>
            </Box>
            <Box>
                <KeyboardBackspaceIcon onClick={onClick} fontSize='medium'/>
            </Box>
        </Stack>
    </>
  )
}

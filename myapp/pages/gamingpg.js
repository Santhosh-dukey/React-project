import React, { useState } from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, Stack } from "@mui/material";
import Image from 'next/image';
import { useRouter } from 'next/router';
import MiniMx from '@/components/MiniMx';
import Layout from '@/layout/Layout';

export default function gamingpg() {
    const [show, setShow] = useState(false)
    const router = useRouter();
  return (
    <>
     <Layout >
     <Stack onClose={()=>{setShow(false)}} sx={{width:'70%',display:'flex',flexDirection:'column',margin:'auto',gap:1}}>
        <Box sx={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <Box></Box>
            <Box sx={{display:'flex',flexDirection:'row',padding:' 0 0 2px 0',height:'25px'}}>
                {show && <MiniMx onClick={()=>{(router.push("/homepg"))}}/>}
            <MenuIcon  onClick={()=>{setShow((p) => !p)}}  fontSize='medium' />
            </Box>
        </Box>
        <Box sx={{display:'flex',flexDirection:'row',width:"100%",height:"550px",justifyContent:'center'}}>
            <Image src={require("../assests/GamingImage.png")} layout='responsive'/>
        </Box>
        <Box sx={{display:'flex',flexDirection:"row",justifyContent:'space-between'}}>
            <Button  sx={{padding:"5px 10px",bgcolor:"#FEEDFC",color:"#767575",fontWeight:"semibold"}}>Back</Button>
            <Button  onClick={()=>{router.push("/codingslide")}} sx={{padding:"5px 10px",bgcolor:"#FDC5F5",color:"#000",fontWeight:"semibold"}}>Next</Button>
        </Box>
      </Stack>
     </Layout>
    </>
  );
}

   
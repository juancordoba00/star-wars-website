import { IconButton } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Icon = () => {
  return (
    <IconButton edge="start" sx={{ mr: 1 }}>
      <Image src="/favicon.ico" alt="nave_star_wars" width={30} height={30} className='img_navBar' />
    </IconButton>
  );
};

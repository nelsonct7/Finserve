import React from 'react'
import FlexBetween from './FlexBetween'
import { Box, Typography, useTheme } from '@mui/material'

interface Props {
    title:string;
    subtitle?:string;
    icon?:React.ReactNode;
    sideText:string
}

const BoxHeader = ({title,icon,subtitle,sideText}: Props) => {
    const {palette}=useTheme()
    return (
        <FlexBetween  color={palette.grey[400]} margin="1.5rem 1rem 0 1rem">
            <FlexBetween>
                {icon}
                <Box width="100%">
                    <Typography>{title}</Typography>
                    <Typography>{subtitle}</Typography>
                </Box>
            </FlexBetween>
            <Typography variant='h5' fontWeight="700" color={palette.secondary[500]}>{sideText}</Typography>
        </FlexBetween>
    )
}

export default BoxHeader

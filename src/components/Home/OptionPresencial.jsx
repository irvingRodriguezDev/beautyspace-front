import Box from "@mui/material/Box";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";

const OptionPresencial = () => {
  const MotionCard = motion.create(Card);

  return (
    <Grid size={{ xs: 12, md: 6 }}>
      <MotionCard
        whileHover={{ scale: 1.02, translateY: -4 }}
        transition={{ duration: 0.2 }}
        elevation={0}
        sx={{
          borderRadius: "28px",
          background: "rgba(255, 255, 255, 0.75)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255, 255, 255, 0.6)",
          boxShadow: "0 10px 30px -5px rgba(233, 30, 99, 0.08)",
          height: "100%",
        }}
      >
        <CardActionArea
          sx={{
            p: 4,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Box width='100%'>
            <Stack
              direction='row'
              mb={2}
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Box
                sx={{
                  p: 1.5,
                  borderRadius: "16px",
                  bgcolor: "#FFD9E2",
                  color: "#e91e63",
                  display: "flex",
                }}
              >
                <StorefrontIcon fontSize='medium' />
              </Box>
              <Chip
                label='Salones & Estudios'
                size='small'
                sx={{
                  bgcolor: "rgba(233, 30, 99, 0.08)",
                  color: "#e91e63",
                  fontWeight: 600,
                }}
              />
            </Stack>

            <Typography
              variant='h5'
              sx={{
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 700,
                color: "#1e293b",
                mb: 1,
              }}
            >
              Experiencia Presencial
            </Typography>
            <Typography variant='body2' color='text.secondary' sx={{ mb: 3 }}>
              Reserva tu lugar en los estudios más exclusivos. Disfruta de la
              atención e instalaciones profesionales.
            </Typography>
          </Box>

          <Stack
            direction='row'
            spacing={1}
            color='#e91e63'
            fontWeight={700}
            sx={{ alignItems: "center" }}
          >
            <Typography variant='subtitle2' fontWeight={700}>
              Explorar Estudios Cercanos
            </Typography>
            <ArrowForwardIcon fontSize='small' />
          </Stack>
        </CardActionArea>
      </MotionCard>
    </Grid>
  );
};

export default OptionPresencial;

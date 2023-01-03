import React from "react";
import StepCard from "./StepCard.jsx";
// import "./stepByStep.scss";
import { Box, Grid, Typography, useTheme } from "@mui/material";

const StepByStepInfo = ({ blockData }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 4,
        bgcolor: "bg.block",
        boxShadow: theme.shadows.block,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          mb: 4,
          textShadow: theme.lights.accent,
        }}
      >
        {blockData?.data?.stepsBlockTitle}
      </Typography>
      <Grid container spacing={3}>
        {blockData?.data?.steps?.map((item, idx) => (
          <Grid item key={idx} sx={{ width: "100%" }}>
            <StepCard data={item} number={idx + 1} key={idx} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StepByStepInfo;

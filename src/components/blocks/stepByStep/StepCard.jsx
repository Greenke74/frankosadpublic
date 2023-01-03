import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { getImageSrc } from "../../../services/settingApiService";
import useIsOverflow from "../../../hooks/useIsOverlows";

const StepCard = (props) => {
  const descriptionRef = useRef(null);
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const isLarge = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  const overflows = useIsOverflow(descriptionRef);

  return (
    <Grid container spacing={isDesktop ? 3 : 2}>
      <Grid item sm={12} md={6}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            alignItems: "center",
            gap: 2,
            background: theme.palette.gradients.heading,
            py: 1,
            px: 2,
            borderRadius: 2,
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              textShadow: theme.lights.accent,
              color: "text.hint",
            }}
            variant="h2"
            component="span"
          >{`0${props.number}`}</Typography>
          <Typography
            variant="h4"
            sx={{
              color: "primary.main",
              fontWeight: 600,
            }}
          >
            {props.data.title}
          </Typography>
        </Box>
        <Box
          sx={{
            maxWidth: "90%",
          }}
        >
          <Typography
            ref={descriptionRef}
            sx={{
              m: 2,
              display: expanded ? "flex" : "-webkit-box",
              WebkitLineClamp: isLarge ? 12 : isDesktop ? 5 : "none",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
            variant="body2"
          >
            {props.data.description}
          </Typography>
        </Box>
        {(overflows || expanded) && (
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button
              sx={{
                padding: "0 10px",
                ...theme.typography.smallButton,
                color: theme.palette.bg.main,
              }}
              variant="contained"
              onClick={() => setExpanded((prev) => !prev)}
            >
              {expanded ? "Приховати" : "Читати повністю"}
            </Button>
          </Box>
        )}
      </Grid>
      <Grid item sm={12} xs={12} md={6}>
        <Box
          sx={{
            width: "100%",
            maxHeight: "300px",
            aspectRatio: `2`,
            backgroundSize: "cover",
            borderRadius: 2,
            backgroundPosition: "center",
            backgroundImage: `url(${getImageSrc(props.data.image)})`,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default StepCard;

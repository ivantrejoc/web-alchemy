import { Box } from "@mui/material";

const ClientCard = ({ image, alt, background }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        border: "1px solid",
        borderColor: "gray.300",
        borderRadius: "8px",
        boxShadow: 2,
        backgroundColor: background,
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          "& img": {
            transform: "scale(1.1) rotateY(20deg)"
          }
        }
      }}
    >
      <img
        src={image}
        alt={alt}
        style={{
          maxWidth: "100%",
          height: "auto",
          transition: "transform 0.3s ease"
        }}
      />
    </Box>
  );
};
export default ClientCard;

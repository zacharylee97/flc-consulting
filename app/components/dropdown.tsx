import { Box, Button, Divider, Menu, MenuItem } from "@mui/material";
import React from "react";
import { DropdownProps } from "../interfaces/dropdown-props";
import Link from "next/link";

export default function Dropdown({ title, menuItems }: DropdownProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  let menuHover = false;

  const handleButtonHover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuHover = () => {
    menuHover = true;
  };

  const handleMenuClose = () => {
    menuHover = false;
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="m-5 flex">
      <Button
        id={title}
        sx={{
          color: "white",
        }}
        aria-controls={open ? title : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onMouseOver={handleButtonHover}
      >
        {title}
      </Button>
      <Menu
        id={title}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          onMouseEnter: handleMenuHover,
          onMouseLeave: handleMenuClose,
          style: {
            display: "flex",
            flexDirection: "column",
            pointerEvents: "auto",
          },
        }}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      >
        <Divider></Divider>
        {menuItems.map((item) => (
          <Box key={item.title} className="hover:bg-gray-100">
            <Link className="m-5" href={item.link}>
              {item.title}
            </Link>
            <Divider></Divider>
          </Box>
        ))}
      </Menu>
    </Box>
  );
}

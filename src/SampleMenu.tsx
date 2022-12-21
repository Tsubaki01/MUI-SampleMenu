import { FC, useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

const SampleMenu: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleClick}>ボタン</Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}
      >
        <MenuItem onClick={handleClose}>メニュー１</MenuItem>
        <MenuItem onClick={handleClose}>メニュー２</MenuItem>
        <MenuItem onClick={handleClose}>メニュー３</MenuItem>
      </Menu>
    </>
  );
};

export default SampleMenu;

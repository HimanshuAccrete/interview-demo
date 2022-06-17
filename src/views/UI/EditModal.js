import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { dataCtx } from "../../context/DataContext";
import {
  Drawer,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import Close from "@mui/icons-material/Close";
import Datepicker from "react-datepicker";

export default function EditModal(props) {
  const { open, handleClose, row } = props;
  const { handleView, updateUser } = useContext(dataCtx);

  const [userData, setUserData] = useState({});

  useEffect(() => {
    const data = handleView(row);
    setUserData(data);
  }, [row, handleView]);

  if (!userData.id) {
    return "Loading...";
  }

  const onChange = (e) => {
    const { name, value } = e.target;
    setUserData((pre) => ({ ...pre, [name]: value }));
  };

  const handleSubmit = () => {
    updateUser(row, userData);
    handleClose();
  };

  return (
    <div>
      <Drawer
        open={open}
        anchor="right"
        variant="temporary"
        onClose={handleClose}
        ModalProps={{ keepMounted: true }}
        sx={{ "& .MuiDrawer-paper": { width: { xs: 300, sm: 400 } } }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: 2,
            color: "white",
            alignItems: "center",
            backgroundColor: "#1976d2",
          }}
        >
          <Typography variant="h6">Edit User</Typography>
          <Close
            fontSize="small"
            onClick={handleClose}
            sx={{ cursor: "pointer" }}
          />
        </Box>

        <Box sx={{ p: 5 }}>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <TextField
              label="Name"
              name="name"
              value={userData.name}
              onChange={onChange}
              placeholder="John Doe"
              inputProps={{ "aria-label": "controlled" }}
            />
          </FormControl>

          <FormControl fullWidth sx={{ mb: 6 }}>
            <TextField
              label="email"
              name="email"
              type="email"
              value={userData.email}
              onChange={onChange}
              placeholder="John@gmail.com"
              inputProps={{ "aria-label": "controlled" }}
            />
          </FormControl>

          <FormControl fullWidth sx={{ mb: 6, ml: 1 }}>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={userData.gender}
              onChange={onChange}
              name="gender"
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
            </RadioGroup>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 6 }}>
            <TextField
              multiline
              defaultValue={userData.address}
              onChange={onChange}
              rows={2.5}
              fullWidth
              name="address"
              label="Address"
              placeholder="Address"
            />
          </FormControl>

          <FormControl fullWidth sx={{ mb: 6 }}>
            <FormLabel id="dob">Date of Birth</FormLabel>
            <Datepicker
              required
              selected={new Date(userData.dob)}
              onChange={(date) => {
                var dd = date.getDate();
                var MM = date.getMonth() + 1;
                var yyyy = date.getFullYear();
                setUserData((pre) => ({ ...pre, dob: `${MM}/${dd}/${yyyy}` }));
              }}
              dateFormat="MM/dd/yyyy"
              id="dob"
              placeholderText="Select a date"
              customInput={<TextField />}
            />
          </FormControl>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              size="large"
              type="submit"
              variant="contained"
              sx={{ mr: 3 }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button
              size="large"
              variant="outlined"
              color="secondary"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
}

import { Container, Divider, Grid, Paper } from "@mui/material";
import UserList from "./views/Datagrid";
import ResponsiveAppBar from "./views/Navbar";
import Progressbar from "./views/Progressbar";

import Provider from "./context/DataContext";

import 'react-datepicker/dist/react-datepicker.css';

function App() {
  return (
    <Provider>
      <Grid container>
        <ResponsiveAppBar />
        <Container maxWidth="xl" sx={{ mt: 5 }}>
          <Grid container xl={12} sx={{ p: 0, m: 0 }}>
            <Grid
              item
              order={{ lg: 1, sm: 2, xs: 2 }}
              sx={{ backgroundColor: "#ddd", p: 2 }}
              xl={9}
              md={12}
              sm={12}
              xs={12}
            >
              <Paper sx={{ p: 5 }}>
                USER LIST
                <Divider />
                <UserList />
              </Paper>
            </Grid>
            <Grid
              item
              order={{ lg: 2, sm: 1, xs: 1 }}
              sx={{ backgroundColor: "#ddd", p: 2 }}
              xl={3}
              md={12}
              sm={12}
              xs={12}
            >
              <Paper sx={{ p: 5 }}>
                PROGRESS
                <Divider />
                <Progressbar />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Provider>
  );
}

export default App;

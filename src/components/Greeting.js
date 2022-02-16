import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Greeting = (props) => {
  return (
    <>
      <Dialog open={true} aria-labelledby={"greeting"} sx={{ minWidth: 400 }}>
        <DialogContent sx={{ position: "relative" }}>
          <div className="text-center">
            <Typography variant="h4" color="initial">
              Thank You
            </Typography>
            <Typography
              variant="body2"
              color="initial"
              className="text-capitalize my-3"
            >
              your query submited we will be in touch shortly
            </Typography>
          </div>
          <DialogActions>
            <Button
              sx={{ position: "absolute", top: 10, right: 10 }}
              onClick={() => props.setGreetingBox(false)}
              color="error"
              variant="contained"
            >
              X
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Greeting;

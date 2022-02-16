import { init } from "@emailjs/browser";
import emailjs from "@emailjs/browser";

import {
  Button,
  Grid,
  Typography,
  FormControl,
  FormLabel,
  FormHelperText,
  Paper,
  TextField,
} from "@mui/material";
import { grid, typography } from "@mui/system";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Greeting from "./components/Greeting";

function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [greetingBox, setGreetingBox] = useState(false);
  const [contactusBox, setContactusBox] = useState(false);

  emailjs.init("user_9OaYd88mIavGmMApg8Gni");

  const handleformData = (data) => {
    // alert(JSON.stringify(data));
    console.log(data);
    emailjs
      .sendForm("service_p3bxuzf", "template_7vyu22m", "#contact-form")
      .then((responce) => console.log("postive", responce))
      .catch((err) => console.log("negtive", err));
    setGreetingBox(true);
  };
  console.log(contactusBox);
  return (
    <div className="App">
      <div className="p-4">
        <Button
          variant="contained"
          onClick={() => setContactusBox(!contactusBox)}
        >
          Contact Us
        </Button>
        {contactusBox && (
          <Grid
            container
            spacing={2}
            className="bg-light p-3 mt-5 mx-auto"
            sx={{ maxWidth: 700, flexDirection: "column" }}
          >
            <Typography variant="h6" color="initial">
              CONTACT US
            </Typography>
            <Typography variant="body1" color="gray" className="py-2">
              we'd love to here from you,please drop us a line if you've any
              query.
            </Typography>
            <Paper className="p-3">
              <form onSubmit={handleSubmit(handleformData)} id="contact-form">
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      sx={{ width: "100%" }}
                      id="firstName"
                      label="FirstName"
                      {...register("firstName", { required: true })}
                    />
                    {errors.firstName?.type === "required" && (
                      <span className="text-danger">
                        First name is required
                      </span>
                    )}
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{ width: "100%" }}
                      id="lastName"
                      label="LastName"
                      {...register("lastName")}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      sx={{ width: "100%" }}
                      id="email"
                      type={"email"}
                      label="E-Mail Address"
                      {...register("email", { required: true })}
                    />
                    {errors.email?.type === "required" && (
                      <span className="text-danger">E-Mail is required</span>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      sx={{ width: "100%" }}
                      id="message"
                      label="Message"
                      multiline
                      minRows={3}
                      {...register("message")}
                    />
                  </Grid>
                </Grid>
                <Button type="submit" variant="contained" sx={{ marginTop: 3 }}>
                  Submit
                </Button>
              </form>
            </Paper>
          </Grid>
        )}
      </div>
      {greetingBox && <Greeting setGreetingBox={setGreetingBox} />}
    </div>
  );
}

export default App;

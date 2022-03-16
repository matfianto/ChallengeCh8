import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const biodataValidationSchema = yup.object({
  firstName: yup.string().min(3).required(),
  lastName: yup.string().required("lastname wajib diisi"),
  email: yup.string().required("email wajib diisi"),
  dob: yup.date().required(),
  hobby: yup.string().required("hobby wajib diisi"),
});

export default function FormBiodata() {
  // cara manual buat define obj form buat disubmit
  // const [objForm, setObjForm] = useState({
  //   firstName: "",
  //     lastName: "",
  //     email: "",
  //     dob: "",
  //     hobby: "",
  // })

  // karena useFormik adalah hooks, jadi dia harus dipakai didalam komponennya
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      dob: "",
      hobby: "",
    },
    onSubmit: (values) => {
      console.log("ini dari onsubmit");
      console.log(values);
      alert(JSON.stringify(values));
      // misal mau kirim data object ini ke api, panggilnya dari sini
      // fetch('http://localhost:8080/api/v1/biodata', )
    },
    validationSchema: biodataValidationSchema,
  });

  return (
    <Grid container justifyContent="center">
      <Card sx={{ width: 480 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://img.freepik.com/free-vector/competent-resume-writing-professional-cv-constructor-online-job-application-profile-creation-african-american-woman-filling-up-digital-form-concept-illustration_335657-2053.jpg?size=338&ext=jpg"
            alt="green iguana"
          />
        </CardActionArea>
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <Grid spacing={2} container alignItems="center" direction="column">
            <Typography gutterBottom variant="h3" component="div">
              Form Biodata
            </Typography>
              <Grid item>
                <TextField
                  id="firstName"
                  name="firstName"
                  label="first name"
                  variant="standard"
                  size="small"
                  type="text"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                ></TextField>
              </Grid>
              <Grid item>
                <TextField
                  id="lastName"
                  name="lastName"
                  label="last name"
                  variant="standard"
                  size="small"
                  type="text"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                ></TextField>
              </Grid>
              <Grid item>
                <TextField
                  id="email"
                  name="email"
                  label="email"
                  variant="standard"
                  size="small"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                ></TextField>
              </Grid>
              <Grid item>
                <FormLabel>Date of Birth</FormLabel>
              </Grid>
              <Grid item>
                <TextField
                  id="dob"
                  name="dob"
                  variant="standard"
                  size="small"
                  type="date"
                  value={formik.values.dob}
                  onChange={formik.handleChange}
                  error={formik.touched.dob && Boolean(formik.errors.dob)}
                  helperText={formik.touched.dob && formik.errors.dob}
                ></TextField>
              </Grid>
              <Grid item>
                <TextField
                  id="hobby"
                  name="hobby"
                  label="hobby"
                  variant="standard"
                  size="small"
                  type="text"
                  value={formik.values.hobby}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.hobby &&
                    Boolean(formik.errors.hobby)
                  }
                  helperText={
                    formik.touched.hobby && formik.errors.hobby
                  }
                ></TextField>
              </Grid>
              <Grid item>
                <Button
                  type="submit"
                  size="small"
                  variant="outlined"
                  color="primary"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
}
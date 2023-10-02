import { Button, Box } from "@mui/material";

const AboutPopUp = ({ handleClose }) => {
  return (
    <>
      <div className="popup-box">
        <div className="box">
          <div className="card">
            <div className="card-body">
              <span className="">About</span>
              <hr />
              <div>
                <Box m={2} className="custom-btn-group">
                  <div>
                    <h2>What is Banking App?</h2>
                    <p>
                      The MIT Banking App is the highlight project for Module 2
                      in the MIT Fullstack Development with MERN program.
                      <br /> <br />
                      It consists of a React application that allows students to
                      demonstrate their understanding of hooks, context,
                      routing, and form validations. It also provides an initial
                      exposure to deploying a React application using AWS S3
                      Buckets.
                      <br /> <br />
                      <h6>
                        <a href="https://github.com/ksavul/mit-banking-app">
                          GitHub
                        </a>
                      </h6>
                    </p>
                  </div>
                </Box>

                <Box m={2} className="custom-btn-group">
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={handleClose}
                  >
                    Close
                  </Button>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPopUp;

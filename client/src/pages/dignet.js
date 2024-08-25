import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Navbar from "../component/navbar/navbar";
import Footer from "../component/footer/footer";
import { Col, Row, Container, Image } from "react-bootstrap";
import "./dignet.css";
import { Text } from "react-native";
import article from "../component/icons/Article.png";
import Divider from "@mui/material/Divider";
import ava from "../component/icons/avaa.png";
import { Icon } from "@iconify/react";
import { NavLink } from "../elements/navbarElement";

const ariaLabel = { "aria-label": "description" };

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Dignet() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Navbar />
      <Container>
        <p className="textresult">
          Showing 16 results for <Text>“Design and Digital Content”</Text>
        </p>

        <div style={{ height: "180px" }}></div>
        <NavLink to="/prevlink">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image={article}
              alt="Paella dish"
            />
            <CardContent>
              <Row>
                <Col md={3}>
                  <Image
                    src={ava}
                    style={{
                      width: "100%",
                      resizeMode: "contain",
                      display: "flex",
                    }}
                  />
                </Col>
                <Col md={9}>
                  <p className="judulincard">
                    Netflix Earnings Are Out And They Beat All Expectations
                  </p>
                  <p className="userincard">Tester</p>
                </Col>
              </Row>
              <div className="tagcard">Article</div>
            </CardContent>
            <Divider />
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                {/* <FavoriteIcon /> */}
                <Icon icon="ant-design:like-outlined" width="25px" />
              </IconButton>
              <IconButton aria-label="share">
                {/* <ShareIcon /> */}
                <Icon icon="fa-regular:comment-alt" width="20px" />
              </IconButton>
            </CardActions>
          </Card>
        </NavLink>
      </Container>
      <div style={{ height: "100px" }}></div>
      <Footer />
    </>
  );
}

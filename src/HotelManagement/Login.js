import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link
} from "react-router-dom";
//import bck from "../Hotel_Management/background.jpg";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions
} from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    textAlign: "center",

    height: "630px"
  },
  textStyle: {
    fontSize: 18,
    color: "#00bfff",
    fontWeight: "bold",
    marginTop: 55
  },
  view: {
    backgroundColor: "white",
    marginTop: "180px",
    marginLeft: "500px",
    height: "180px",
    width: "350px",
    color: "white"
  },
  button: {
    padding: 15,
    borderRadius: 20,
    backgroundColor: "#23b11b"
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.10)"
    // background: "transparent"
  }
});

class Login extends Component {
  state = {
    Username: "",
    Password: ""
  };
  OnUserNameEnter = (e) => {
    this.setState({
      Username: e.target.value
    });
  };
  OnPasswordEnter = (e) => {
    this.setState({
      Username: e.target.value
    });
  };
  OnSubmit = (e) => {
    //alert(this.state);
    this.props.OnSubmit(this.state.Username);
    e.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.OnSubmit}>
        <div>
          {/* <img src={bck} width="100%" height="100%" /> */}
          <ImageBackground
            source="https://uploads.codesandbox.io/uploads/user/927c06c2-eee9-402d-be30-5df3ec015b1b/8IPo-background.jpg"
            style={[styles.container]}
          >
            <View style={[styles.view, styles.overlay]}>
              <div>
                <table style={{ height: "100px", marginTop: "25px" }}>
                  <tr>
                    <td
                      style={{
                        fontFamily: "calibri",
                        fontSize: "20px",
                        width: "500px"
                      }}
                    >
                      Username{" "}
                    </td>
                    <td
                      style={{
                        fontFamily: "calibri",
                        fontSize: "20px",
                        width: "500px"
                      }}
                    >
                      <input
                        type="text"
                        style={{
                          fontFamily: "calibri",
                          fontSize: "15px",
                          padding: 3,
                          borderRadius: 12,
                          borderColor: "white",
                          backgroundColor: "white"
                        }}
                        onChange={this.OnUserNameEnter}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        fontFamily: "calibri",
                        fontSize: "20px",
                        width: "500px"
                      }}
                    >
                      Password{" "}
                    </td>
                    <td
                      style={{
                        fontFamily: "calibri",
                        fontSize: "20px",
                        width: "500px",
                        height: "60px"
                      }}
                    >
                      <input
                        type="password"
                        style={{
                          fontFamily: "calibri",
                          fontSize: "15px",
                          padding: 3,
                          borderRadius: 12,
                          borderColor: "white",
                          backgroundColor: "white"
                        }}
                        onChange={this.OnPasswordEnter}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td
                      colSpan="2"
                      style={{
                        fontFamily: "calibri",
                        fontSize: "20px",
                        width: "500px",
                        height: "50px"
                      }}
                    >
                      <Router>
                        <Link
                          to="../Hotel_Management/Reception/ReceptionIndex"
                          // type="submit"
                          style={{
                            fontFamily: "calibri",
                            fontSize: "18px",
                            padding: 5,
                            borderRadius: 8,
                            backgroundColor: "#20B2AA",
                            borderColor: "#20B2AA",
                            width: "100px",
                            color: "white",
                            textDecorationLine: "none"
                          }}
                        >
                          Login
                        </Link>
                      </Router>
                    </td>
                  </tr>
                </table>
              </div>
            </View>
          </ImageBackground>
        </div>
      </form>
    );
  }
}

export default Login;

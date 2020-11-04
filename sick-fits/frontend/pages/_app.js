import App, { Container } from "next/app";
import Page from "../components/Page";

class Myapp extends App {
  render() {
    const { Component } = this.props;
    return (
        <Page>
          <Component />
        </Page>
    );
  }
}

export default Myapp;

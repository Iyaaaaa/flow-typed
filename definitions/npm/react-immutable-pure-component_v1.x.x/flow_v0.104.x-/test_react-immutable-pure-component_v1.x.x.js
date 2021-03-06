// @flow
import React from "react";
import ImmutablePureComponent from "react-immutable-pure-component";

type MyProps = {
  id: string,
  ...
};

class Foo extends ImmutablePureComponent<MyProps> {
  render() {
    return (
      <div>
        {this.props.id}
      </div>
    );
  }
}

const a = <Foo id={"1"} />;

// $FlowExpectedError
<Foo />;

// $FlowExpectedError
<Foo id={1} />;

type MyState = {
  visible: boolean,
  ...
};

class Bar extends ImmutablePureComponent<MyProps, MyState> {
  componentWillReceiveProps(nextProps: MyProps) {
    // $FlowExpectedError
    this.setState({ visible: "true" });
  }

  render() {
    return <div />;
  }
}

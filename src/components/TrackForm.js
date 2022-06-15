import React, { useState, useContext } from "react";

import { Button, Input } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as LocationContext } from "../context/LocationContext";
const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  return (
    <Spacer>
      <Spacer>
        <Input
          // value={name}
          // onChange={(value) => {
          //   changeName(value);
          // }}
          placeholder="Enter Name"
        />
      </Spacer>
      {recording ? (
        <Button onPress={stopRecording} title={"Stop recording"} />
      ) : (
        <Button onPress={startRecording} title={"Start"} />
      )}

      {!recording && locations.length ? (
        <Spacer>
          <Button title="Save Recording" />
        </Spacer>
      ) : null}
    </Spacer>
  );
};

export default TrackForm;

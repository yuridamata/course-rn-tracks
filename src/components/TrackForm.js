import React, { useState, useContext } from "react";

import { Button, Input } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";
const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  return (
    <Spacer>
      <Spacer>
        <Input
          value={name}
          onChange={({ nativeEvent: { text } }) => {
            changeName(text);
          }}
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
          <Button title="Save Recording" onPress={saveTrack} />
        </Spacer>
      ) : null}
    </Spacer>
  );
};

export default TrackForm;

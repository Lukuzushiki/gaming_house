import React from "react";

import InputFile from "../elements/Form/inputFile";

export default function imageUpload(props) {
  const { data } = props;
  return (
    <div className="image-upload">
      <h1>Your Avatar</h1>
      <InputFile
        accept="image/#"
        id="imageUpload"
        name="image"
        value={data.image}
        onChange={props.onChange}
      />
      <p>*Recomended image 180x180 for the best</p>
    </div>
  );
}

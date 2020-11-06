import React, { useState, useRef } from "react";
import propTypes from "prop-types";

export default function File(props) {
  const [fileName, setFileName] = useState("");
  const [defImage, setDefImage] = useState(null);
  const defUrl = `https://server-gaming-house.s3-ap-southeast-1.amazonaws.com/Users/bust-2.png`;

  const { name, id, accept } = props;

  const refInputFile = useRef(null);

  const onChange = (e) => {
    setFileName(e.target.value);
    setDefImage(URL.createObjectURL(e.target.files[0]));
    props.onChange({
      target: {
        name: e.target.name,
        value: e.target.files,
      },
    });
  };
  return (
    <div className="avatar-upload">
      <div className="avatar-edit">
        <input
          type="file"
          id={id}
          ref={refInputFile}
          name={name}
          onChange={onChange}
          accept={accept}
          defaultValue={fileName}
        />
        <label htmlFor={id}></label>
      </div>
      <div className="avatar-preview">
        <div
          className="avatar"
          id="imagePreview"
          style={{
            backgroundImage: `url(${defImage == null ? defUrl : defImage})`,
          }}
        ></div>
      </div>
    </div>
  );
}

File.propTypes = {
  name: propTypes.string.isRequired,
  accept: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

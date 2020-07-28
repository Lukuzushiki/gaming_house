import React from "react";

export default function systemRequirements(props) {
  return (
    <section className="container">
      <h1 className="mb-4 text-blue">System Requirements</h1>
      <div className="row requirement">
        <div className="col-6 text-center">
          <h3 className="text-pink">Minimum</h3>
          <table>
            <tbody>
              <tr>
                <th>Operating System</th>
                <td>{props.data.systemRequirements.minimum.operatingSystem}</td>
              </tr>

              <tr>
                <th>Processor</th>
                <td>{props.data.systemRequirements.minimum.processor}</td>
              </tr>

              <tr>
                <th>Memory</th>
                <td>{props.data.systemRequirements.minimum.memory}</td>
              </tr>

              <tr>
                <th>Video Card</th>
                <td>{props.data.systemRequirements.minimum.videoCard}</td>
              </tr>

              <tr>
                <th>Sound Card</th>
                <td>{props.data.systemRequirements.minimum.soundCard}</td>
              </tr>

              <tr>
                <th>Hardisk Space</th>
                <td>{props.data.systemRequirements.minimum.hddSpace}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-6 text-center">
          <h3 className="text-pink">Maximum</h3>
          <table>
            <tbody>
              <tr>
                <th>Operating System</th>
                <td>{props.data.systemRequirements.maximum.operatingSystem}</td>
              </tr>

              <tr>
                <th>Processor</th>
                <td>{props.data.systemRequirements.maximum.processor}</td>
              </tr>

              <tr>
                <th>Memory</th>
                <td>{props.data.systemRequirements.maximum.memory}</td>
              </tr>

              <tr>
                <th>Video Card</th>
                <td>{props.data.systemRequirements.maximum.videoCard}</td>
              </tr>

              <tr>
                <th>Sound Card</th>
                <td>{props.data.systemRequirements.maximum.soundCard}</td>
              </tr>

              <tr>
                <th>Hardisk Space</th>
                <td>{props.data.systemRequirements.maximum.hddSpace}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

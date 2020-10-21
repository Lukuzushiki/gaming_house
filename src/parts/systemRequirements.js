import React from "react";

export default function systemRequirements(props) {
  return (
    <section className="container">
      <h1 className="mb-4 text-blue">System Requirements</h1>
      <div className="row requirement">
        {props.data.map((item) => {
          return (
            <div className="col-6 text-center">
              <h3 className="text-pink">{item.level}</h3>
              <table>
                <tbody>
                  <tr>
                    <th>Operating System</th>
                    <td>{item.operatingSystem}</td>
                  </tr>

                  <tr>
                    <th>Processor</th>
                    <td>{item.processor}</td>
                  </tr>

                  <tr>
                    <th>Memory</th>
                    <td>{item.memory}</td>
                  </tr>

                  <tr>
                    <th>Video Card</th>
                    <td>{item.videoCard}</td>
                  </tr>

                  <tr>
                    <th>Sound Card</th>
                    <td>{item.soundCard}</td>
                  </tr>

                  <tr>
                    <th>Hardisk Space</th>
                    <td>{item.hddSpace}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </section>
  );
}

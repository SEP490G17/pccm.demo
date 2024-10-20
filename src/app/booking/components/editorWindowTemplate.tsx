import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import React from "react";

export default function editorWindowTemplate(props: any) {
  return (
    <table className="custom-event-editor" style={{width:'100%'}}>
      <tbody>
        <tr>
          <td className="e-textlabel">From</td>
          <td>
            <DatePickerComponent
              id="StartTime"
              data-name="StartTime"
              value={new Date(props.startTime || props.StartTime)}
              format='dd/MM/yy h:mm a'
            />
          </td>
        </tr>
        <tr>
          <td className="e-textlabel">To</td>
          <td>
            <DatePickerComponent
              id="StartTime"
              data-name="StartTime"
              value={new Date(props.startTime || props.StartTime)}
              format='dd/MM/yy h:mm a'
            />
          </td>
        </tr>
        <tr>
          <td className="e-textlabel">Repeat</td>
          <td>
            <DropDownListComponent id="Repeat" data-name="Repeat" className="e-field" style={{width:'100%'}}
                value={props.Repeat || props.repeat || 'Never'} dataSource={['Never', 'Daily', 'Weekly', 'Monthly']}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

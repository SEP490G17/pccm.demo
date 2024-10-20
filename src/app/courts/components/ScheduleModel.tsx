"use client";
import { registerLicense } from "@syncfusion/ej2-base";
import {
  EventSettingsModel,
  Inject,
  PopupOpenEventArgs,
  ResourceDirective,
  ResourcesDirective,
  ScheduleComponent,
  TimelineViews,
  ViewDirective,
  ViewsDirective,
  Week,
} from "@syncfusion/ej2-react-schedule";
import { Timeline } from "antd";

import React, { useRef } from "react";
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NDaF5cWWtCf1NpRGpGfV5ycEVAallSTnVeUiweQnxTdEFjUH5XcHNUQGBaUUB+Wg=="
);

export default function ScheduleModel() {
  const eventSettings: EventSettingsModel = {
    dataSource: [],
    fields: {
      id: "id",
      subject: { name: "subject", title: "Has been placed" },
      startTime: { name: "startTime" },
      endTime: { name: "endTime" },
      description: { name: "description" },
      isAllDay: { name: "isAllDay" },
    },
    template: (data: any) => {
      return (
        <div>
          <p>Has been placed </p>
          <span>
            {data.startTime.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
            -{" "}
            {data.endTime.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
      );
    },
  };
  const roomData = [
    { CourtText: "Court 1", Id: 1, CourtColor: "#cb6bb2" },
    { CourtText: "Court 2", Id: 2, CourtColor: "#56ca85" },
  ];
  const group = { resources: ["Courts"] };
  const scheduleRef = useRef(null);

  const onPopupOpen = (args: PopupOpenEventArgs) => {
    if (args.type == "QuickInfo") {
      const titleInput = args.element.querySelector('.e-schedule-form');
      console.log("input", titleInput);
      if (titleInput) {
        titleInput.style.display = "none"; // Ẩn ô input đi
        // Hoặc titleInput.remove(); // Xóa ô input khỏi DOM
      }
    }
    if (args.type === "Editor") {
      const descriptionField = args?.element.querySelector(
        ".e-description-container"
      );
      const locationField = args?.element.querySelector(
        ".e-location-container"
      );
      const titleField = args?.element.querySelector(".e-title-location-row");
      const timeZoneField = args?.element.querySelector(
        ".e-time-zone-container"
      );
      if (args.data) {
        // Nếu có dữ liệu sự kiện, tức là đây là một sự kiện đã tồn tại
        // Ẩn nút "Save"
        const saveButton = args.element.querySelector(".e-event-save");
        if (saveButton) {
          saveButton.style.display = "none"; // Ẩn nút "Save"
        }
      }
      if (descriptionField) {
        descriptionField.style.display = "none"; // Ẩn trường
      }
      if (locationField) {
        locationField.style.display = "none"; // Ẩn trường
      }
      if (titleField) {
        titleField.style.display = "none"; // Ẩn trường
      }
      if (timeZoneField) {
        timeZoneField.style.display = "none"; // Ẩn trường
      }
    }
  };
  const onRenderCell = (args: any) => {
    const currentDate = new Date(); // Lấy thời gian hiện tại
    if (
      args.date < currentDate &&
      args.element.classList.contains("e-work-cells")
    ) {
      args.element.classList.add("e-disable");
      args.element.style.backgroundColor = "#f4f4f4"; // Tùy chỉnh màu để hiển thị các ngày cũ
    }
  };

  return (
    <div className="schedule-details">
      <ScheduleComponent
        width="100%"
        height="550px"
        ref={scheduleRef}
        selectedDate={new Date()}
        eventSettings={eventSettings}
        currentView="TimelineDay"
        group={group}
        popupOpen={onPopupOpen}
        renderCell={onRenderCell}
        timeScale={{ interval: 60, slotCount: 1 }}
      >
        <ViewsDirective>
          <ViewDirective option="TimelineDay" />
        </ViewsDirective>
        <ResourcesDirective>
          <ResourceDirective
            field="CourtId"
            title="Court"
            name="Courts"
            dataSource={roomData}
            textField="CourtText"
            idField="Id"
            colorField="CourtColor"
          ></ResourceDirective>
        </ResourcesDirective>
        <Inject services={[TimelineViews]} />
      </ScheduleComponent>
    </div>
  );
}

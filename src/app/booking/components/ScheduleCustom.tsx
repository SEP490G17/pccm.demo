"use client";
import { createBooking, updateBooking } from "@/libs/actions/bookingActions";
import { IBookingModel } from "@/libs/models/booking.model";
import { registerLicense } from "@syncfusion/ej2-base";
import {
  DragAndDrop,
  Inject,
  PopupOpenEventArgs,
  ResourcesDirective,
  ScheduleComponent,
  TimelineMonth,
  TimelineViews,
  ViewDirective,
  ViewsDirective,
  Week,
} from "@syncfusion/ej2-react-schedule";
import { Timeline } from "antd";
import React, { useRef } from "react";

type Props = {
  bookingsData: IBookingModel[];
};

export default function ScheduleCustomComponent({ bookingsData }: Props) {
  registerLicense(
    "Ngo9BigBOggjHTQxAR8/V1NDaF5cWWtCf1NpRGpGfV5ycEVAallSTnVeUiweQnxTdEFjUH5XcHNUQGBaUUB+Wg=="
  );
  const eventSettings = {
    dataSource: bookingsData,
    fields: {
      id: "id",
      subject: { name: "Subject", title: "Event Title" },
      startTime: { name: "startTime" },
      endTime: { name: "endTime" },
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
  const scheduleRef = useRef(null);
  const group = { byGroupID: false, resources: [] };
  const onPopupOpen = (args: PopupOpenEventArgs) => {
    console.log(args.type);
    if (args.type == 'QuickInfo') {
      const titleInput = args.element.querySelector('input[name="subject"]');
      console.log('input',titleInput);
      if (titleInput) {
        console.log('tim thay')
        titleInput.style.display = 'none !important'; // Ẩn ô input đi
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
  const handleComplete = async (value: any) => {
    console.log(value);
    if (value.requestType !== "toolBarItemRendered") {
      if (value.addedRecords[0]) {
        await handleAdd(value.addedRecords[0]);
      }
    }
  };

  const handleAdd = async (valueAdd: any) => {
    console.log("value add", valueAdd.startTime);
    const startTimeLocal = new Date(valueAdd.startTime);
    const endTimeLocal = new Date(valueAdd.endTime);
    const data: IBookingModel = {
      startTime: new Date(
        startTimeLocal.getTime() - startTimeLocal.getTimezoneOffset() * 60000
      ).toISOString(),
      endTime: new Date(
        endTimeLocal.getTime() - endTimeLocal.getTimezoneOffset() * 60000
      ).toISOString(),
      isAllDay: valueAdd.isAllDay,
      recurrenceRule: valueAdd.recurrenceRule || "",
      subject: valueAdd.subject || "has been booked",
      description: valueAdd.description || "",
    };
    console.log("check data", data);
    await createBooking(data);
  };

  return (
    <div>
      <ScheduleComponent
        ref={scheduleRef}
        width="100%"
        height="550px"
        currentView="Week"
        selectedDate={new Date()}
        eventSettings={eventSettings}
        group={group}
        popupOpen={onPopupOpen}
        showQuickInfo={false}
        actionComplete={handleComplete}
        renderCell={onRenderCell}
      >
        <ViewsDirective>
          <ViewDirective option="Week" />
        </ViewsDirective>
        <Inject services={[Week]} />
      </ScheduleComponent>
    </div>
  );
}

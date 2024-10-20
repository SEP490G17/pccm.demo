import { ICourt } from "@/libs/models/court.model";
import san1 from "../images/san1.png";
import san2 from "../images/san2.png";
import san3 from "../images/san3.png";
import san4 from "../images/san4.png";

export const listCourtMock: ICourt[] = [
  {
    id: 1,
    title: "Sân Pickleball Việt Hà",
    emptyCourt: ["15:00", "17:30", "19:00"],
    location: {
      tinh: "Vĩnh Phúc",
      thanhpho: "Phúc Yên",
      diachi: "43 Đường Phạm Văn Đồng, Phường Xuân Hoà",
    },
    href: "https://maps.app.goo.gl/vRn4XHyqJGSiKvEm6",
    services: [
      { id: 1, name: "Wifi" },
      { id: 2, name: "Bãi đỗ xe oto" },
      { id: 3, name: "Bãi đỗ xe máy" },
      { id: 4, name: "Căng tin" },
      { id: 5, name: "Trà đá" },
      { id: 6, name: "Đồ ăn" },
      { id: 7, name: "Nước uống" },
    ],
    image: san1.src,
  },
  {
    id: 2,
    title: "Sân Pickleball Hueic",
    emptyCourt: ["15:00", "17:30", "19:00"],
    location: {
      tinh: "Thừa Thiên Huế",
      thanhpho: "Thành phố Huế",
      diachi: "70 Nguyễn Huệ, Phường Vĩnh Ninh",
    },
    href: "https://maps.app.goo.gl/XRWuWDee1zsxW2G39",
    services: [
      { id: 1, name: "Wifi" },
      { id: 2, name: "Bãi đỗ xe oto" },
      { id: 3, name: "Bãi đỗ xe máy" },
      { id: 4, name: "Căng tin" },
      { id: 5, name: "Trà đá" },
      { id: 6, name: "Đồ ăn" },
      { id: 7, name: "Nước uống" },
    ],
    image: san2.src,
  },
  {
    id: 3,
    title: "Sân VN Pickleball Khánh Duy",
    emptyCourt: ["15:00", "17:30", "19:00"],
    location: {
      tinh:'Hà Nội',
      thanhpho:'Hoàng Mai',
      diachi:"KĐT Louis City, Phường Thịnh Liệt"
    },
    href: "https://maps.app.goo.gl/yB6tNprRW4TcnKuB8",
    services: [
      { id: 1, name: "Wifi" },
      { id: 2, name: "Bãi đỗ xe oto" },
      { id: 3, name: "Bãi đỗ xe máy" },
      { id: 4, name: "Căng tin" },
      { id: 5, name: "Trà đá" },
      { id: 6, name: "Đồ ăn" },
      { id: 7, name: "Nước uống" },
    ],
    image: san3.src,
  },
  {
    id: 4,
    title: 'Sân "CLB" Pickleball Mỹ Tho - Tiền Giang',
    emptyCourt: ["15:00", "17:30", "19:00"],
    location: {
      tinh:'Tiền Giang',
      thanhpho:'Thành phố Mỹ Tho',
      diachi:"Gần 1 Lý Thường Kiệt, Phường"
    },
    href: "https://maps.app.goo.gl/H4Jeb6gbD17sVd6VA",
    services: [
      { id: 1, name: "Wifi" },
      { id: 2, name: "Bãi đỗ xe oto" },
      { id: 3, name: "Bãi đỗ xe máy" },
      { id: 4, name: "Căng tin" },
      { id: 5, name: "Trà đá" },
      { id: 6, name: "Đồ ăn" },
      { id: 7, name: "Nước uống" },
    ],
    image: san4.src,
  },
];

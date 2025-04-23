import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  SearchIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "../../../../../../components/UI-dashbord/badge";
import { Button } from "../../../../../../components/UI-dashbord/button";
import { Checkbox } from "../../../../../../components/UI-dashbord/checkbox";
import { Input } from "../../../../../../components/UI-dashbord/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../../dashboard-components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../dashboard-components/ui/table";

// Define data structure for table rows
const tableData = Array(10).fill({
  name: "محمد منصور",
  mobile: "96655186620",
  email: "Hasf@gmail.com",
  account: "مشرف",
  region: "الرياض",
  administration: "الزلفي",
  school: "خالد بن الوليد",
  status: "مقبول",
  isChecked: false,
});

// First row is checked
tableData[0] = { ...tableData[0], isChecked: true };

// Define column headers
const columnHeaders = [
  { key: "name", label: "الاسم" },
  { key: "mobile", label: "الجوال" },
  { key: "email", label: "البريد الإلكتروني" },
  { key: "account", label: "الحساب" },
  { key: "region", label: "المنطقة" },
  { key: "administration", label: "الإدارة" },
  { key: "school", label: "المدرسة" },
  { key: "status", label: "حالة التسجيل" },
  { key: "action", label: "الإجراء" },
];

// Define action badges
const actionBadges = [
  { key: "accept", label: "قبول", color: "#1a7f37", borderColor: "#1a7f37" },
  { key: "reject", label: "رفض", color: "#bc4c00", borderColor: "#bc4c00" },
  {
    key: "inactive",
    label: "غير نشط",
    color: "#9a6700",
    borderColor: "#bf8700",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <div className="border-b border-[#e4e7ec]">
        <img
          className="w-full h-px object-cover"
          alt="Vector"
          src="/vector-9.svg"
        />
      </div>

      <div className="w-full">
        {/* Top controls */}
        <div className="flex justify-between items-center mb-6">
          {/* SearchIcon */}
          <div className="w-[544px]">
            <div className="flex flex-col w-full gap-1.5">
              <div className="relative">
                <Input
                  className="pl-10 pr-3.5 py-2.5 rounded-lg border border-solid border-[#cfd4dc] shadow-shadow-xs"
                  placeholder="ثحب"
                  dir="rtl"
                />
                <div className="absolute right-3.5 top-1/2 transform -translate-y-1/2 flex items-center">
                  <SearchIcon className="w-5 h-5 text-gray-500" />
                </div>
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex gap-2">
                  <Badge
                    variant="outline"
                    className="rounded-lg border-[#e5e7ea] bg-white text-[#475467]"
                  >
                    Label
                  </Badge>
                  <Badge
                    variant="outline"
                    className="rounded-lg border-[#e5e7ea] bg-white text-[#475467]"
                  >
                    Label
                  </Badge>
                  <Badge
                    variant="outline"
                    className="rounded-lg border-[#e5e7ea] bg-white text-[#475467]"
                  >
                    Label
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons and selection count */}
          <div className="flex items-center gap-4">
            <div className="text-sm font-bold text-gray-700 [direction:rtl]">
              تم تحديد : 43
            </div>

            <Button
              className="bg-white text-[#12b669] border border-[#cfd4dc] shadow-shadow-xs-focused-4px-gray-100 font-bold rounded-lg"
              variant="outline"
            >
              <img
                className="w-[19.5px] h-[19.5px] mr-2"
                alt="Accept icon"
                src="/group-30535.png"
              />
              قبول
            </Button>

            <Button
              className="bg-white text-[#d1242f] border border-[#cfd4dc] shadow-shadow-xs font-bold rounded-lg"
              variant="outline"
            >
              <img
                className="w-[19.5px] h-[19.5px] mr-2"
                alt="Reject icon"
                src="/group-30535-1.png"
              />
              رفض
            </Button>
          </div>
        </div>

        {/* Table */}
        <Table>
          <TableHeader>
            <TableRow className="border-b border-[#e4e7ec]">
              <TableHead className="w-10 text-center">
                <span className="sr-only">Select</span>
              </TableHead>
              {columnHeaders.map((header) => (
                <TableHead
                  key={header.key}
                  className="text-right font-medium text-gray-700 text-[15px] [direction:rtl]"
                >
                  {header.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index} className="border-b border-[#e4e7ec]">
                <TableCell className="p-2 text-center">
                  <Checkbox
                    checked={row.isChecked}
                    className={
                      row.isChecked
                        ? "bg-[#0969da] border-[#0969da]"
                        : "bg-white border-[#868f99]"
                    }
                  />
                  {row.isChecked && (
                    <CheckIcon className="absolute w-4 h-4 text-white" />
                  )}
                </TableCell>
                <TableCell className="p-2 text-right">
                  <span className="font-medium text-[#027163] text-base [direction:rtl]">
                    {row.name}
                  </span>
                </TableCell>
                <TableCell className="p-2 text-right">
                  <span className="font-medium text-[#027163] text-base">
                    {row.mobile}
                  </span>
                </TableCell>
                <TableCell className="p-2 text-right">
                  <span className="font-medium text-[#027163] text-base">
                    {row.email}
                  </span>
                </TableCell>
                <TableCell className="p-2 text-right">
                  <span className="font-medium text-[#027163] text-base [direction:rtl]">
                    {row.account}
                  </span>
                </TableCell>
                <TableCell className="p-2 text-right">
                  <span className="font-medium text-[#027163] text-base [direction:rtl]">
                    {row.region}
                  </span>
                </TableCell>
                <TableCell className="p-2 text-right">
                  <span className="font-medium text-[#027163] text-base [direction:rtl]">
                    {row.administration}
                  </span>
                </TableCell>
                <TableCell className="p-2 text-right">
                  <span className="font-medium text-[#027163] text-base [direction:rtl]">
                    {row.school}
                  </span>
                </TableCell>
                <TableCell className="p-2 text-right">
                  <Badge className="font-bold text-xs text-[#1a7f37] bg-white border border-[#1a7f37] rounded-full px-2.5 py-[3px]">
                    {row.status}
                  </Badge>
                </TableCell>
                <TableCell className="p-2">
                  <div className="flex items-center gap-3.5">
                    {actionBadges.map((badge) => (
                      <Badge
                        key={badge.key}
                        className={`font-bold text-xs text-[${badge.color}] bg-white border border-[${badge.borderColor}] rounded-full px-2.5 py-[3px]`}
                      >
                        {badge.label}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="flex justify-center items-center border-t border-[#e4e7ec] py-4 mt-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  className="flex flex-row-reverse items-center gap-2 px-4 py-2.5 bg-white rounded-l-lg border border-[#cfd4dc] font-bold text-gray-800 [direction:rtl]"
                >
                  <ArrowLeftIcon className="h-5 w-5" />
                  السابق
                </PaginationPrevious>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-gray-50 border-x border-y border-gray-300 font-medium text-gray-800"
                  isActive
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-white border-x border-y border-gray-300 font-medium text-gray-700"
                >
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-white border-x border-y border-gray-300 font-medium text-gray-700"
                >
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis className="w-10 h-10 flex items-center justify-center bg-white border-x border-y border-gray-300 font-medium text-gray-700" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-white border-x border-y border-gray-300 font-medium text-gray-700"
                >
                  8
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-white border-x border-y border-gray-300 font-medium text-gray-700"
                >
                  9
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-white border-x border-y border-gray-300 font-medium text-gray-700"
                >
                  10
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  href="#"
                  className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-r-lg border border-[#cfd4dc] font-bold text-gray-800 [direction:rtl]"
                >
                  التالي
                  <ArrowRightIcon className="h-5 w-5" />
                </PaginationNext>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

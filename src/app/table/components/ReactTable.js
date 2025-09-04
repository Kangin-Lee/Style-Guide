"use client";

import * as React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
} from "@/components/ui/pagination";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useQuery } from "@tanstack/react-query";
import user from "@/mock/user.json";
import { StyleLoadingSpinner } from "../../skeleton/components/StyleLoadingSpinner";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export function ReactTable() {
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error("데이터 가져오기 실패");
      return res.json();
    },
  });

  const table = useReactTable({
    data,
    // columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 5, //한 페이지에 나올 개수 조절
      },
    },
  });

  if (isLoading)
    return (
      <div>
        <StyleLoadingSpinner />
      </div>
    ); //로딩은 스켈레톤이나 로딩 스피너 사용 권장
  if (isError) return <p>에러 발생</p>;

  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="hidden sm:table-cell w-[100px]">ID</TableHead>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead className="hidden sm:table-cell">Status</TableHead>
            <TableHead className="hidden sm:table-cell">Method</TableHead>
            <TableHead className="hidden sm:table-cell">Date</TableHead>
            <TableHead className="hidden sm:table-cell text-right">
              Amount
            </TableHead>
            <TableHead className="sm:hidden text-right">상세보기</TableHead>
            {/* ✅ 모바일 전용 Head */}
          </TableRow>
        </TableHeader>

        <TableBody>
          {user.map((user, index) => (
            <TableRow
              key={index}
              className="sm:table-row block border-b sm:border-0"
            >
              {/* 데스크탑 전용 ID */}
              <TableCell className="hidden sm:table-cell">{user.id}</TableCell>

              {/* Invoice 항상 표시 */}
              <TableCell>{user.invoice}</TableCell>

              {/* 데스크탑 전용 필드들 */}
              <TableCell className="hidden sm:table-cell">
                {user.status}
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                {user.method}
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                {user.date}
              </TableCell>
              <TableCell className="hidden sm:table-cell text-right">
                {user.amount}
              </TableCell>

              {/* ✅ 모바일 전용 상세보기 버튼: "상세보기" 헤더 아래에 위치 */}
              <TableCell className="sm:hidden text-right">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button size="sm" variant="outline" className="text-xs">
                      상세 보기
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-64 text-sm space-y-1">
                    <div>
                      <span className="font-semibold">상태:</span> {user.status}
                    </div>
                    <div>
                      <span className="font-semibold">방법:</span> {user.method}
                    </div>
                    <div>
                      <span className="font-semibold">날짜:</span> {user.date}
                    </div>
                    <div>
                      <span className="font-semibold">금액:</span> {user.amount}
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* 페이지네이션 UI */}
      {/* 동적인 페이지네이션을 원한다면 React Table 기능을 사용해야 함. */}
      <div className="mt-4 flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              />
            </PaginationItem>

            {table.getPageOptions().map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  isActive={table.getState().pagination.pageIndex === page}
                  onClick={() => table.setPageIndex(page)}
                >
                  {page + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}

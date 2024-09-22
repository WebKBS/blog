"use client";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Paginations = ({
  totalPage,
  searchParams,
  pathname,
}: {
  totalPage: number;
  searchParams: URLSearchParams;
  pathname: string;
}) => {
  if (totalPage === 1) {
    return null;
  }

  const currentPage = Number(searchParams.get("page")) || 1;
  const tagParam = searchParams.get("tag");

  if (currentPage > totalPage) {
    return null;
  }

  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const getUrlWithParams = (page: number) => {
    const pageParam = page === 1 ? "" : `page=${page}`;
    const tagQuery = tagParam ? `tag=${tagParam}` : "";
    const queryString = [pageParam, tagQuery].filter(Boolean).join("&");

    return queryString ? `${pathname}?${queryString}` : pathname;
  };

  const prevPageUrl = getUrlWithParams(prevPage);
  const nextPageUrl = getUrlWithParams(nextPage);

  const numButtonsToShow = 3;
  let startPage = Math.max(1, currentPage - Math.floor(numButtonsToShow / 2));
  let endPage = Math.min(totalPage, startPage + numButtonsToShow - 1);

  if (endPage - startPage + 1 < numButtonsToShow) {
    startPage = Math.max(1, endPage - numButtonsToShow + 1);
  }

  return (
    <Pagination>
      <PaginationContent>
        {prevPage > 0 ? (
          <PaginationItem>
            <PaginationPrevious href={prevPageUrl} />
          </PaginationItem>
        ) : null}
        {startPage > 1 && <PaginationEllipsis />}
        {Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => i + startPage,
        ).map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href={getUrlWithParams(page)}
              isActive={page === currentPage}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        {endPage < totalPage && <PaginationEllipsis />}
        {nextPage <= totalPage ? (
          <PaginationItem>
            <PaginationNext href={nextPageUrl} />
          </PaginationItem>
        ) : null}
      </PaginationContent>
    </Pagination>
  );
};

export default Paginations;

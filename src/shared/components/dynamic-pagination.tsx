import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  PaginationPrevious,
  PaginationNext,
} from '@/shared/components/ui/pagination';

import { useCallback, useMemo } from 'react';

import useURLFilters from '../hooks/use-url-filters.hook';

import PageSize from './page-size';

interface IDynamicPaginationProps {
  totalPages: number;
  onPageChange?: (page: number) => void;
}

export function DynamicPagination({ totalPages, onPageChange }: IDynamicPaginationProps) {
  const { pageSearchParams, setSearchParams } = useURLFilters();

  const currentPage = useMemo(() => +pageSearchParams, [pageSearchParams]);

  // Function to generate page numbers and ellipsis
  const getPageNumbers = useCallback(() => {
    const maxPagesToShow = 5; // Adjust this to control how many page numbers to show
    const pages: (number | 'ellipsis')[] = [];
    const sidePages = 1; // Pages to show on each side of current

    if (totalPages <= maxPagesToShow) {
      // If total pages are less than or equal to max, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show the first page
      pages.push(1);

      // Calculate the range of pages to show around the current page
      let startPage = Math.max(2, currentPage - sidePages);
      let endPage = Math.min(totalPages - 1, currentPage + sidePages);

      // Adjust start and end if we're near the beginning or end
      if (currentPage <= sidePages + 1) {
        endPage = maxPagesToShow - 1;
      }
      if (currentPage >= totalPages - sidePages) {
        startPage = totalPages - maxPagesToShow + 2;
      }

      // Add ellipsis after the first page if needed
      if (startPage > 2) {
        pages.push('ellipsis');
      }

      // Add the range of pages
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      // Add ellipsis before the last page if needed
      if (endPage < totalPages - 1) {
        pages.push('ellipsis');
      }

      // Always show the last page
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }

    return pages;
  }, [currentPage, totalPages]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;

    if (onPageChange) {
      onPageChange(page);
    } else {
      setSearchParams({
        page: page.toString(),
      });
    }
  };

  return (
    <div className='h-3rem px-1rem bg-muted flex items-center justify-center rounded-ee-md rounded-es-md sm:justify-between'>
      <PageSize className='hidden sm:block' />
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href='#'
              onClick={() => handlePageChange(currentPage - 1)}
              className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>

          {getPageNumbers().map((page, index) =>
            page === 'ellipsis' ? (
              <PaginationItem key={`ellipsis-${index}`}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={`page-${page}`}>
                <PaginationLink
                  href='#'
                  isActive={page === currentPage}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            )
          )}

          <PaginationItem>
            <PaginationNext
              href='#'
              onClick={() => handlePageChange(currentPage + 1)}
              className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

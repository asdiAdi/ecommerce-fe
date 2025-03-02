import TableIcon from "@/components/core/TableIcon";
import { MetaType } from "@/schemas/MetaSchema";
import { cx } from "@/utils/common";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ComponentPropsWithoutRef, useCallback } from "react";

type PaginationProps = {
  meta?: MetaType;
  isPending?: boolean;
  className?: string;
};

type PaginationButtonProps = ComponentPropsWithoutRef<"button"> & {
  isActive?: boolean;
};

function PgnBtn(props: PaginationButtonProps) {
  const { onClick, children, isActive, className } = props;

  return (
    <button
      className={cx("daisy-btn daisy-join-item daisy-btn-lg", className, {
        "daisy-btn-active": isActive,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default function Pagination(props: PaginationProps) {
  const { meta, className } = props;
  const { total_pages = 1, offset = 0 } = meta || {};

  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const handlePageChange = useCallback(
    (offset: number) => {
      const searchParams = new URLSearchParams(params.toString());
      searchParams.set("offset", offset.toString());

      if (offset === 0) {
        searchParams.delete("offset");
      }

      router.push(`${pathname}?${searchParams.toString()}`);
    },
    [params, pathname, router],
  );

  return (
    <div className={cx("daisy-join", className)}>
      <PgnBtn onClick={() => handlePageChange(offset === 0 ? 0 : offset - 1)}>
        <TableIcon name="chevrons-left" />
        Previous page
      </PgnBtn>

      <PgnBtn onClick={() => handlePageChange(0)} isActive={offset === 0}>
        {1}
      </PgnBtn>

      {offset < 4 && total_pages >= 2 && (
        <PgnBtn onClick={() => handlePageChange(1)} isActive={offset === 1}>
          {2}
        </PgnBtn>
      )}

      {offset >= 4 && total_pages >= 2 && (
        <button className="daisy-btn-disabled daisy-btn daisy-join-item daisy-btn-lg">
          ...
        </button>
      )}

      {total_pages >= 2 &&
        new Array(total_pages >= 3 ? 3 : total_pages).fill(0).map((_, i) => {
          let foo = 2;

          if (offset >= 4) {
            if (offset <= total_pages - 4) {
              foo = offset - 1;
            } else {
              foo = total_pages - 5;
            }
          }

          return (
            <PgnBtn
              key={`pgn-btn-${i}`}
              onClick={() => handlePageChange(i + foo)}
              isActive={offset === i + foo}
            >
              {i + foo + 1}
            </PgnBtn>
          );
        })}

      {offset <= total_pages - 4 && total_pages >= 2 && (
        <button className="daisy-btn-disabled daisy-btn daisy-join-item daisy-btn-lg">
          ...
        </button>
      )}

      {offset > total_pages - 4 && total_pages >= 2 && (
        <PgnBtn
          onClick={() => handlePageChange(total_pages - 2)}
          isActive={offset === total_pages - 2}
        >
          {total_pages - 1}
        </PgnBtn>
      )}

      {total_pages >= 2 && (
        <PgnBtn
          onClick={() => handlePageChange(total_pages - 1)}
          isActive={offset === total_pages - 1}
        >
          {total_pages}
        </PgnBtn>
      )}

      <PgnBtn
        onClick={() =>
          handlePageChange(
            offset === total_pages - 1 ? total_pages - 1 : offset + 1,
          )
        }
      >
        Next <TableIcon name="chevrons-right" />
      </PgnBtn>
    </div>
  );
}

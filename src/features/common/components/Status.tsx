import classNames from "classnames";

const BookingStatus = ({
  status,
}: {
  status: "pending" | "booked" | "deleted";
}) => {
  const pending = status === "pending";
  const booked = status === "booked";
  const deleted = status === "deleted";
  return (
    <div
      className={classNames(
        "flex w-min items-center rounded px-1 py-0.5 text-[0.6rem] font-bold",
        {
          "bg-yellow-500 text-yellow-700": pending,
          "bg-green-500 text-green-700": booked,
          "bg-red-500 text-red-700": deleted,
        }
      )}
    >
      {status.toUpperCase()}
    </div>
  );
};

export default BookingStatus;

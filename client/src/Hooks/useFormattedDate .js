import { format } from "date-fns";

const useFormattedDate = (dateString) => {
  if (!dateString) return "";

  const formattedDate = format(new Date(dateString), "dd MMM yyyy, hh:mm a");

  return formattedDate;
};

export default useFormattedDate;

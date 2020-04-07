import { formatDistance, formatDistanceStrict } from 'date-fns';

export const formatDistanceDates = ({
  from,
  to = new Date().toUTCString(),
  withSuffix = true,
  strict = false,
}) => {
  const formatter = strict ? formatDistanceStrict : formatDistance;
  return formatter(new Date(from), new Date(to), {
    addSuffix: withSuffix,
  });
};

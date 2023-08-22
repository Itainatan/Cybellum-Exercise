import { useGetNotificationsQuery } from "api/notifications/notifications";

export default function useIntro() {
  const { data } = useGetNotificationsQuery();

  const selectedNotification = data?.find((notification) => notification.id === 1);

  return {
    selectedNotification,
  };
}

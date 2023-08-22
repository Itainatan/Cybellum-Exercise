import { useGetNotificationsQuery } from 'api/notifications/notifications';

export default function useIntro() {
  const { data } = useGetNotificationsQuery();

  // we could do this in the transform data of the get notifications,
  // but decided to do it here because it a logic for the component and not for the generic api calling
  const selectedNotification = data?.find((notification) => notification.id === 1);

  return {
    selectedNotification,
  };
}

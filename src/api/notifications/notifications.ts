import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from 'helpers/baseQuery';

import { NotificationType } from './notifications.interface';

export const notificationsApi = createApi({
  reducerPath: 'notificationsApi',
  baseQuery: baseQuery('/'),
  endpoints: (builder) => ({
    getNotifications: builder.query<NotificationType[], void>({
      query: () => ({
        url: `/notifications`,
      }),
    }),
  }),
});

export const { useGetNotificationsQuery } = notificationsApi;

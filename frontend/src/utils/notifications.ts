import { notifications as notificationsMantine } from '@mantine/notifications'

const DEFAULT_MESSAGE = 'An error occurred'

export default class NotificationsUtils {
  static success(message: string) {
    notificationsMantine.show({
      title: message,
      message: message,
      color: 'green',
    })
  }

  static error(message?: string) {
    notificationsMantine.show({
      title: message || DEFAULT_MESSAGE,
      message: message || DEFAULT_MESSAGE,
      color: 'red',
    })
  }
}

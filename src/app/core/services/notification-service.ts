import { Service } from '@angular/core';

@Service()
export class NotificationService {
  async show(title: string, body: string) {
    if (Notification.permission !== 'granted') {
      const permission = await Notification.requestPermission();

      if (permission !== 'granted') {
        console.log('Notification permission denied');
        return;
      }
    }

    const registration = await navigator.serviceWorker.ready;

    await registration.showNotification(title, {
      body,
      icon: 'icons/icon-192x192.png',
      badge: 'icons/icon-192x192.png',
    });
  }

  async setBadge(): Promise<void> {
    if ('setAppBadge' in navigator) {
      await navigator.setAppBadge();
    }
  }

  async clearBadge(): Promise<void> {
    if ('clearAppBadge' in navigator) {
      await navigator.clearAppBadge();
    }
  }
}

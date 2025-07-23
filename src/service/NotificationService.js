const admin = require("../util/firebase");

class NotificationService {
  /**
   * Sends a push notification to the specified device
   * @param {string} deviceToken - FCM token of the device
   * @param {string} title - Notification title
   * @param {string} body - Notification body
   * @returns {Promise<void>}
   */
  static async sendNotification(deviceToken, title, body) {
    const message = {
      notification: {
        title,
        body,
      },
      token: deviceToken,
    };

    try {
      const response = await admin.messaging().send(message);
      console.log(`✅ Notification sent: ${response}`);
    } catch (error) {
      console.error(`❌ Failed to send notification: ${error.message}`, error);
      throw error;
    }
  }
}

module.exports = NotificationService;
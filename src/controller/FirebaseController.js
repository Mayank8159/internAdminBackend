const NotificationService = require('../service/NotificationService');

class FirebaseController {
  /**
   * Send push notification to a specific device
   * @param {express.Request} req
   * @param {express.Response} res
   */
  static async sendNotification(req, res) {
    const { deviceToken, title, body } = req.body;

    // Basic validation
    if (!deviceToken || !title || !body) {
      return res.status(400).json({
        success: false,
        message: 'deviceToken, title, and body are required'
      });
    }

    try {
      await NotificationService.sendNotification(deviceToken, title, body);
      return res.status(200).json({
        success: true,
        message: 'Notification sent successfully'
      });
    } catch (error) {
      console.error('❌ FirebaseController Error:', error);
      return res.status(500).json({
        success: false,
        message: 'Failed to send notification',
        error: error.message
      });
    }
  }
}

module.exports = FirebaseController;
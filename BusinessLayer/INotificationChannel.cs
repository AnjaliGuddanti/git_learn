namespace BusinessLayer{
    interface INotificationChannel{
        void SendMessage(string subject,string messageBody, User user);
    }
}
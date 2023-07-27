namespace BusinessLayer{
    class EmailNotificationChannel : INotificationChannel
    {
        public void SendMessage(string subject, string messageBody, User user)
        {
          Console.WriteLine($"sending message to {user.Name} \n subject: {subject} \n message :{messageBody} \n");
        }
    }
}
namespace BusinessLayer{
    class NotificationChannelFactory{
         public INotificationChannel CreateChannel(string channel){
            if(channel.ToLower() == "email"){   
                return new EmailNotificationChannel();
            }
            else if(channel.ToLower() == "sms"){  
                return new SMSNotificationChannel();
            }
            else{
                return null;
            }
         }
    }
}
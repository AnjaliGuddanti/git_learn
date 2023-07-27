namespace BusinessLayer;
using DataLayer;
public class NotificationFacade
{
    IUserDatabase userDatabase= UserDatabase.GetInstance();
    private List<User> users{get;set;}
    public NotificationFacade()
    {
        //adapter
        users= new UserAdapter().ConvertUser(userDatabase.GetUserList());
    }
    public void SendNotification(string channel,string subject,string messageBody){
        foreach(var user in users){
          // NotificationChannelFactory channelType=new NotificationChannelFactory();
           INotificationChannel channelType= new NotificationChannelFactory().CreateChannel(channel);
           if(channel.ToUpper()=="EMAIL" && user.Channel.Contains("@")){
                channelType.SendMessage(subject,messageBody,user);
           }
           else if(channel.ToUpper()=="SMS" && user.Channel.All(char.IsDigit)){
                channelType.SendMessage(subject,messageBody,user);
           }
           else{
            continue;
           }
        }
    }
}
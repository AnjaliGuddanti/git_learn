namespace DataLayer;

public class UserData
{
    public string Name{get;set;}
    public  string Channel {get;set;}
     public  int ChannelType {get;set;}
    public UserData(string name,string channel,int channelType)
    {
        this.Channel=channel;
        this.Name=name;
        this.ChannelType=channelType;
    }
}

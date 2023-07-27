namespace DataLayer;

public class UserDatabase:IUserDatabase
{
    private static UserDatabase? instance =null;
    private List<UserData> users;

    private UserDatabase()
    {
        // Initialize and populate the user list (mocked data)
      users =new List<UserData>{
       new UserData("Anjali","Anjali@gmail.com",1),
       new UserData("Hema","9876543210",2),
       new UserData("Kiran","null",0),
       new UserData("lakshmi","lakshmi@gmail.com",1),
      };
      
    }
    public static UserDatabase GetInstance()
    {
        if (instance == null)
        {
            instance = new UserDatabase();
        }
        return instance;
    }

    public List<UserData> GetUserList()
    {
        return users;
    }
    public IEnumerable<UserData> GetEmailSubscribedUser()
    {
        return users.Where(u => u.ChannelType==1);
    }
    public IEnumerable<UserData> GetSMSSubscribedUser()
    {
        return users.Where(u => u.ChannelType==2);
    }
}

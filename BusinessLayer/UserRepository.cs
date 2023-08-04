using DataLayer;
namespace BusinessLayer;
class UserRepository : IUserRepository
{
    IUserDatabase userDatabase=UserDatabase.GetInstance();
    
    public void AddUser(User user)
    {//new UserAdapter().ConvertUser(userDatabase.GetUserList());
        UserData userData =new UserData(user.Name,user.Channel,1);
        userDatabase.AddUser(userData);
    }

    public void RemoveUser(User user)
    {
        userDatabase.RemoveUser(user);
    }
}
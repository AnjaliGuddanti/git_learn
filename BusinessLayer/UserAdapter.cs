using DataLayer;
namespace BusinessLayer{
    class UserAdapter{
       public List<User> ConvertUser(List<UserData> userData){
        List<User> users =new List<User>();
        foreach(UserData user in userData){
            User user1=new User();
            user1.Name=user.Name;
            user1.Channel=user.Channel;
            users.Add(user1);
        }  
        return users;
        
       } 
    }
}
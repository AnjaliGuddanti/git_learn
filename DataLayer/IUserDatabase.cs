namespace DataLayer;
public interface IUserDatabase{
    List<UserData> GetUserList();
    void AddUser(UserData userData);
    void RemoveUser(UserData userData);
    void RemoveUser(global::BusinessLayer.User user);
}
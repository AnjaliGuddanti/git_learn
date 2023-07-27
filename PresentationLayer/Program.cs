// See https://aka.ms/new-console-template for more information\
using BusinessLayer;
Console.WriteLine("Welcome to Notification System");
Console.WriteLine("To add notification");
Console.WriteLine("Enter Channel");
string channel=Console.ReadLine();
Console.WriteLine("Enter Subject");
string subject=Console.ReadLine();
Console.WriteLine("Enter Message Body");
string messageBody=Console.ReadLine();
NotificationFacade  facade= new NotificationFacade();
facade.SendNotification(channel,subject,messageBody);

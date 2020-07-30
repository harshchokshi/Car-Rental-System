package development;

////The application start from with the help of main method of this class
public class CarRentalSystem {

public static void main(String[] args) {
//We add first three of our clients into the system
//These are the existing client when the owner do not have this system
//The data of these clients are collected from manual paperwork system
new StandardClient().existingClient(1);
new LoyaltyClient().existingClient(2);
new EmployeeClient().existingClient(3);
Menu.welcomeLogo();
new Menu().switchMenu();
} }
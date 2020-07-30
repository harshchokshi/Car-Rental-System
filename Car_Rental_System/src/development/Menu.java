package development;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.text.DecimalFormat;
import java.util.Scanner;


public class Menu {
//It will start from 4 because first three existing clients added when the application start
static int IDgenerator = 4;
static BufferedReader in = new BufferedReader(new InputStreamReader(System.in));

static int selectedChoice;
	
public int getSelectedChoice () {
	
	return selectedChoice;
}
	
	
private static Scanner scan = new Scanner(System.in);

public static Scanner getScan() {
	return scan;
}

public static void setScan(Scanner scan) {
	Menu.scan = scan;
}

//Welcome screen: First thing to see at the console 
public static void welcomeLogo() {
//Usage of for loop to design a software logo
for (int i=0; i < 70; i++) {
System.out.print("-");
}
System.out.println("\n"+"   Welcome to Car Rental Management System    ");
for (int i=0; i < 70; i++) {
System.out.print("-");
}	
}

//List of Menu Option: Second thing to see at the console 
public void menuOptions () {
System.out.println("\n"+"Select an option from the menu below");
System.out.println("1. Standard Payment");
System.out.println("2. Loyalty Payment");
System.out.println("3. Employee Payment");
System.out.println("4. Display List of Clients");
System.out.println("5. Generate Report To View Payments Received");
System.out.println("6. Exit"+"\n");
}

//Switch Statement: Third thing to see at the console
public void switchMenu() {
boolean switchOperator = true;
while (switchOperator) {
//Invoke list of activities application can perform
menuOptions();
//Prevent System from getting crash implement Try and Catch Block
try {
System.out.print("Enter your option: ");
selectedChoice = getScan().nextInt();
switch(selectedChoice) {
case 1:
System.out.println("  ");
new StandardClient().displayStandardclients();
newStandardclient();
break;
case 2:
System.out.println("  ");
new LoyaltyClient().displayLoyaltyclients();
newLoyalclient();
break;
case 3:
System.out.println("  ");
new EmployeeClient().displayStaffclients();
newStaffclient();
break;
case 4:
viewClients();
break;
case 5:
System.out.println("  ");
reports();
break;
case 6:
System.out.println(" ");
switchOperator = systemExit();;
//SwitchOperator false will exit the menu block
break;
default:
System.out.println("\n"+"Enter only number between 1 to 6.");
break;
}
//Scope outside the Menu. It will executed to prevent system from getting crash
} catch (Exception e) {
System.out.println("\n"+"Unexpected input other than number. Try again !!!");
//*** very important !! To clear out scanner input to prevent infinite loop execution
getScan().nextLine();
continue;
}
}
}

//Selection - 1: To add a new client or new transaction to the existing Standard client
//This method is linked with Standard Client class which extends Client super class
public void newStandardclient() {
	do {
	System.out.print("Enter ID of existing client or 0 to enter new one: ");
	int searchID;
	try {
		searchID = Menu.getScan().nextInt();
		if (searchID == 0) {
			new StandardClient().addClient(IDgenerator++, enterName ( ) , enterAmount( ) );
			break;
		}
		else {
			new StandardClient().searchClient(searchID);
			break;
		}
	} catch (Exception e) {
		System.out.println("\n"+"Only numbers no alphabets or no special characters allowed"+"\n");
		Menu.getScan().nextLine();
		continue;
	}

	} while(true);
}

//Selection - 2: To add a new client or new transaction to the existing Loyalty client
//This method is linked with Loyalty Client class which extends Client super class
public void newLoyalclient () {
	do {
		System.out.print("Enter ID of existing client or 0 to enter new one: ");
		int searchId;
		try {
			searchId = Menu.getScan().nextInt();
			if (searchId == 0) {
				new LoyaltyClient().addClient(IDgenerator++, enterName( ) , enterAmount( ) );
				break;
			}
			else {
				new LoyaltyClient().searchClient(searchId);
				break;
			}
		} catch (Exception e) {
			System.out.println("\n"+"Only numbers no alphabets or no special characters allowed"+"\n");
			Menu.getScan().nextLine();
			continue;
		}

	 } while(true);
}

//Selection - 3: To add a new client or new transaction to the existing employee client
//This method is linked with Employee Client class which extends Client super class
public void newStaffclient () {
	do {
	    System.out.print("Enter ID of existing client or 0 to enter new one: ");
		int searchid;
		try {
			searchid = Menu.getScan().nextInt();
			if (searchid == 0) {
				new EmployeeClient().addClient(IDgenerator++, enterName ( ) , enterAmount( ) );
				break;
			}
			else {
				new EmployeeClient().searchClient(searchid);
				break;
			}
			
		} catch (Exception e) {
			System.out.println("\n"+"Only numbers no alphabets or no special characters allowed"+"\n");
			Menu.getScan().nextLine();
			continue;
		}
	} while(true);
}

//Asking user to enter the name
public String enterName ( ) throws IOException {
	String name;
	do {
		System.out.print("\n"+"Enter the name of the client: ");
		name = in.readLine();
		if (name.matches(("[a-zA-Z][a-zA-Z ]+[a-zA-Z]$"))==false) {
			System.out.println("Try again !!! Only alphabets no special character or numbers");
			continue;
		}
		else {
			break;
		}
	} while(true);

	return name;
}

//Asking user to enter  the amount
//To ensure user enter double value within two decimal places
//DecimalFormat class is used
public double enterAmount( ) {
	double amount;
	do {
		try {
			System.out.print("Enter the amount: ");
			amount = Double.parseDouble(roundTwoplaces().format(Double.valueOf(in.readLine())));
			break;
		} catch (Exception e) {
			System.out.println("\n"+"Invalid response input is not a number."+"\n");
			continue;
		} 
	} while (true);
	return amount;
}


public static DecimalFormat roundTwoplaces() {
	DecimalFormat df = new DecimalFormat("##.##");
	return df;
}



//Selection - 4: Display Client List
public void viewClients() {
	
	System.out.println("\n"+"--List of Clients--"+"\n");
	System.out.printf( "%-10s %10s %20s %25s %n", "Client ID", "Name", "Total Amount", "Discounted Amount");

	System.out.println("\n"+"Standard Clients:"+"\n");
	new StandardClient().displayStandardclients();
	
	System.out.println("\n"+"Loyalty Clients:"+"\n");
	new LoyaltyClient().displayLoyaltyclients();
	
	System.out.println("Staff Clients:"+"\n");
	new EmployeeClient().displayStaffclients();
}

//Selection - 5: Generate Report
public void reports() {
	for (int i=0; i < 70; i++) {
		System.out.print("-");
	}
	System.out.println("");
	System.out.printf( "%10s %25s %25s %n", "Type of Account", "Total Amount Received", "Discounts Given");
	for (int i=0; i < 70; i++) {
		System.out.print("-");
	} 
	System.out.println("");
	
	double standardPayments = 0.0;
	double standardDiscounts = 0.0;
	for (Client standardList : StandardClient.getStandards()) {
		standardPayments += standardList.TotalAmount();
		standardDiscounts += standardList.DiscountedAmount();
	}
	System.out.printf("%-10s %20.2f %25.2f %n", "Standard" , standardPayments , standardDiscounts);
	
	double loyaltyPayments = 0.0;
	double loyaltyDiscounts = 0.0;
	for (Client loyaltyList : LoyaltyClient.getLoyalties()) {
		loyaltyPayments += loyaltyList.TotalAmount();
		loyaltyDiscounts += loyaltyList.DiscountedAmount();
	}
	System.out.printf("%-10s %20.2f %25.2f %n", "Loyalty" , loyaltyPayments , loyaltyDiscounts);

	double staffPayments = 0.0;
	double staffDiscounts = 0.0;
	for (Client staffList : EmployeeClient.getEmployees()) {
		staffPayments += staffList.TotalAmount();
		staffDiscounts += staffList.DiscountedAmount();
	}
	System.out.printf("%-10s %20.2f %25.2f %n", "Staff" , staffPayments , staffDiscounts);
	
	double payments, discounts;
	payments = standardPayments+loyaltyPayments+staffPayments;
	discounts = standardDiscounts+loyaltyDiscounts+staffDiscounts;
	for (int i=0; i < 70; i++) {
		System.out.print("-");
	}
	System.out.println("");
	System.out.printf("%-10s %20.2f %25.2f %n", "Total" , payments , discounts);
	for (int i=0; i < 70; i++) {
		System.out.print("-");
	}
	System.out.println("");
}

//Software footer: Last thing to see at the console 
public boolean systemExit() {
System.out.println("-- Exiting FedHire Payment System --\r\n" + 
		" ----\r\n" + 
		"-- Goodbye! -- ");
return false;
}
}


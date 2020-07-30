package development;

import java.util.ArrayList;

public class EmployeeClient extends Client {
	static ArrayList<EmployeeClient> employees = new ArrayList<EmployeeClient>();
	public static ArrayList<EmployeeClient> getEmployees() {
	return employees;
	}
	public static void setEmployees(ArrayList<EmployeeClient> employees) {
	EmployeeClient.employees = employees;
	}

public EmployeeClient (int id, String name, double amount) {
	setClientID(id);
	setClientName(name);
	setAmount(amount);
	setDiscountRate(0.20);
}


public EmployeeClient() {
	// TODO Auto-generated constructor stub
}


public void existingClient(int i) {
	EmployeeClient client = new EmployeeClient(i, "Mich", 300);
	getEmployees().add(client);
}

public void searchClient(int searchID) {
	
	boolean found = false;
	String existingName = " ";
	int existingID = 0;
	int currentElement = 0;
	for ( Client staffList : getEmployees()) {
		if (searchID == staffList.getClientID()) {
			found = true;
			existingName = staffList.getClientName();
			existingID = searchID;	
		}
		else {
			currentElement++;
		}
	}
	if (found==true) {
		System.out.println(" ");
		getEmployees().add(new EmployeeClient(existingID, existingName, new Menu().enterAmount()));
	}
	else {
		System.out.println("\n"+"This client does not exist in staff client list.");
		System.out.println("\n"+"Go to option 4 to see list of all clients.");
	}
}

public void addClient(int id, String name, double amount) {
	EmployeeClient staffclient = new EmployeeClient(id, name, amount);
	getEmployees().add(staffclient);
}

//Display List of Staff clients
public void displayStaffclients() {
	for (Client staffList : EmployeeClient.getEmployees()) {
		System.out.println(staffList.toString());
	}
	
}


}

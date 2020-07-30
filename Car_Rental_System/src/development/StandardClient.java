package development;

import java.util.ArrayList;

public class StandardClient extends Client {
	static ArrayList<StandardClient> standards = new ArrayList<StandardClient>(); 
	public static ArrayList<StandardClient> getStandards() {
	return standards;
	}
	public static void setStandards(ArrayList<StandardClient> standards) {
	StandardClient.standards = standards;
	}

public StandardClient (int id, String name, double amount) {
	setClientID(id);
	setClientName(name);
	setAmount(amount);
	setDiscountRate(0.00);
}


public StandardClient() {
	// TODO Auto-generated constructor stub
}


public void existingClient(int i) {
	StandardClient client = new StandardClient(i, "John", 100);
	getStandards().add(client);
}

public void searchClient(int searchID) {
	
	boolean found = false;
	String existingName = " ";
	int existingID = 0;
	int currentElement = 0;
	for ( Client standardList : getStandards()) {
		if (searchID == standardList.getClientID()) {
			found = true;
			existingName = standardList.getClientName();
			existingID = searchID;
			
		}
		else {
			currentElement++;
		}
	}
	if (found==true) {
		System.out.println(" ");
		getStandards().add(new StandardClient(existingID, existingName, new Menu().enterAmount()));
	}
	else {
		System.out.println("\n"+"This client does not exist in standard client list.");
		System.out.println("\n"+"Go to option 4 to see list of all clients.");
	}
}

public void addClient(int id, String name, double amount) {
	StandardClient standardclient = new StandardClient(id, name, amount);
	getStandards().add(standardclient);
}
//Display List of Standard clients
public void displayStandardclients() {
	for (Client standardList : StandardClient.getStandards()) {
		System.out.println(standardList.toString());
	}
}






}

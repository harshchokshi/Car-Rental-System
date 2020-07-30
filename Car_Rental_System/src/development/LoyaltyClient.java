package development;

import java.util.ArrayList;

public class LoyaltyClient extends Client {
	static ArrayList<LoyaltyClient> loyalties = new ArrayList<LoyaltyClient>(); 
	public static ArrayList<LoyaltyClient> getLoyalties() {
	return loyalties;
	}
	public static void setLoyalties(ArrayList<LoyaltyClient> loyalties) {
	LoyaltyClient.loyalties = loyalties;
	}

public LoyaltyClient (int id, String name, double amount) {
	setClientID(id);
	setClientName(name);
	setAmount(amount);
	setDiscountRate(0.10);
}


public LoyaltyClient() {
	// TODO Auto-generated constructor stub
}


public void existingClient(int i) {
	LoyaltyClient client = new LoyaltyClient(i, "Harry", 200);
	getLoyalties().add(client);
}

public void addClient(int id, String name, double amount) {
	LoyaltyClient loyalclient = new LoyaltyClient(id, name, amount);
	LoyaltyClient.getLoyalties().add(loyalclient);
}


public void searchClient(int searchID) {
	
	boolean found = false;
	String existingName = " ";
	int existingID = 0;
	int currentElement = 0;
	for ( Client loyaltyList : getLoyalties()) {
		if (searchID == loyaltyList.getClientID()) {
			found = true;
			existingName = loyaltyList.getClientName();
			existingID = searchID;
			
		}
		else {
			currentElement++;
		}
	}
	if (found==true) {
		System.out.println(" ");
		getLoyalties().add(new LoyaltyClient(existingID, existingName, new Menu().enterAmount()));
	}
	else {
		System.out.println("\n"+"This client does not exist in loyalty client list.");
		System.out.println("\n"+"Go to option 4 to see list of all clients.");
	}
}
//Display List of Loyal clients
public void displayLoyaltyclients() {
	for (Client loyaltyList : LoyaltyClient.getLoyalties()) {
		System.out.println(loyaltyList.toString());
	}
}







	
	






	  
	  
	  
	 



}

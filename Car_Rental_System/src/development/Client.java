package development;


public class Client implements Payment {
	
// Global Variables	
private int clientID;
private String clientName;
private double amount;
private double discountRate;



public int getClientID() {
	return clientID;
}
public void setClientID(int clientID) {
	this.clientID = clientID;
}


public String getClientName() {
	return clientName;
}
public void setClientName(String clientName) {
	this.clientName = clientName;
}
public double getAmount() {
	return amount;
}
public void setAmount(double amount) {
	this.amount = amount;
}

public double getDiscountRate() {
	return discountRate;
}
public void setDiscountRate(double discountRate) {
	this.discountRate = discountRate;
}

//This method is implemented from Payment Interface
@Override
public double DiscountedAmount() {
	
	return getAmount()*getDiscountRate();
}

//This method is implemented from Payment Interface
@Override
public double TotalAmount() {
	
	return getAmount() - DiscountedAmount();
}

//All subclasses of this class has accessed this method
public String toString() {
	return String.format("%-10s %10s %15.2f %20.2f %n", getClientID() ,  getClientName(), TotalAmount(),  DiscountedAmount());
}

}

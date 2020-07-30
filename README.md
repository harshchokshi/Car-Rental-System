# Car Rental System
 FedHire is a car hire company that offers vehicle rentals to its clients. Clients are able to hire vehicles according to availability and preference.

Project Requirements

FedHire is a car hire company that offers vechicle rentals to its clients. Clients are able to hire vechicles according to availability and preference. FedHire offers 10% loyalty discount on the rental fees to members of its loyalty club. No discount is offered to standard clients who are not members of the loyalty club. A special discount of 20% is offered to clients who are also employees of the company.

You have been hired to design and develop a Java application for FedHire employees to manage the car rental system. The application should have an interactive menu, allowing the user to select the type of client (standard, loyalty members or staff member) making the booking and determine and track the appropriate discounts. The menu should also provide different other options, such as, displaying clients list, generating a report to display the current payments received, and quitting the execution. In the report the payments should be broken down into different categories of bookings such as standard, loyalty and staff, and the total discounts given in each category (using the discounted values where appropriate). At this stage there is no need for data to persist once the program finished execution.

FedHire wants the system to be flexible so that users can include additional functionality at a later date without having to rewrite the entire program. This means you will need to use an interface for payment types may be added at a later date with minimal updates to the code. FedHire asked that you provide it with some documentation before you commence coding, so that the manager is able to verify that the program you intend to code will address the business requirements. The manager would like to see use cases that summarizes the requirements in written format, as well as use case diagrams, class diagram and sequence diagrams.

Technology Used:

Switch case
Interface
Inheritance
Class type ArrayList
String Formatter
Loops & Conditional statements
Buffered Reader and Scanner
Input Validation using Regex expression

Sample Output

----------------------------------------------------------------------
   Welcome to Car Rental Management System    
----------------------------------------------------------------------
Select an option from the menu below
1. Standard Payment
2. Loyalty Payment
3. Employee Payment
4. Display List of Clients
5. Generate Report To View Payments Received
6. Exit

Enter your option: 4

--List of Clients--

Client ID        Name         Total Amount         Discounted Amount 

Standard Clients:

1                John          100.00                 0.00 


Loyalty Clients:

2               Harry          180.00                20.00 

Staff Clients:

3                Mich          240.00                60.00 


Select an option from the menu below
1. Standard Payment
2. Loyalty Payment
3. Employee Payment
4. Display List of Clients
5. Generate Report To View Payments Received
6. Exit

Enter your option: 1
  
1                John          100.00                 0.00 

Enter ID of existing client or 0 to enter new one: 0

Enter the name of the client: Don
Enter the amount: 200

Select an option from the menu below
1. Standard Payment
2. Loyalty Payment
3. Employee Payment
4. Display List of Clients
5. Generate Report To View Payments Received
6. Exit

Enter your option: 2
  
2               Harry          180.00                20.00 

Enter ID of existing client or 0 to enter new one: Larry

Only numbers no alphabets or no special characters allowed

Enter ID of existing client or 0 to enter new one: 0

Enter the name of the client: Larry
Enter the amount: 300

Select an option from the menu below
1. Standard Payment
2. Loyalty Payment
3. Employee Payment
4. Display List of Clients
5. Generate Report To View Payments Received
6. Exit

Enter your option: 9

Enter only number between 1 to 6.

Select an option from the menu below
1. Standard Payment
2. Loyalty Payment
3. Employee Payment
4. Display List of Clients
5. Generate Report To View Payments Received
6. Exit

Enter your option: 3
  
3                Mich          240.00                60.00 

Enter ID of existing client or 0 to enter new one: 3
 
Enter the amount: 60

Select an option from the menu below
1. Standard Payment
2. Loyalty Payment
3. Employee Payment
4. Display List of Clients
5. Generate Report To View Payments Received
6. Exit

Enter your option: 3
  
3                Mich          240.00                60.00 

3                Mich           48.00                12.00 

Enter ID of existing client or 0 to enter new one: 0

Enter the name of the client: Nick
Enter the amount: 200

Select an option from the menu below
1. Standard Payment
2. Loyalty Payment
3. Employee Payment
4. Display List of Clients
5. Generate Report To View Payments Received
6. Exit

Enter your option: 4

--List of Clients--

Client ID        Name         Total Amount         Discounted Amount 

Standard Clients:

1                John          100.00                 0.00 

4                 Don          200.00                 0.00 


Loyalty Clients:

2               Harry          180.00                20.00 

5               Larry          270.00                30.00 

Staff Clients:

3                Mich          240.00                60.00 

3                Mich           48.00                12.00 

6                Nick          160.00                40.00 


Select an option from the menu below
1. Standard Payment
2. Loyalty Payment
3. Employee Payment
4. Display List of Clients
5. Generate Report To View Payments Received
6. Exit

Enter your option: 5
  
----------------------------------------------------------------------
Type of Account     Total Amount Received           Discounts Given 
----------------------------------------------------------------------
Standard                 300.00                      0.00 
Loyalty                  450.00                     50.00 
Staff                    448.00                    112.00 
----------------------------------------------------------------------
Total                   1198.00                    162.00 
----------------------------------------------------------------------

Select an option from the menu below
1. Standard Payment
2. Loyalty Payment
3. Employee Payment
4. Display List of Clients
5. Generate Report To View Payments Received
6. Exit

Enter your option: 6
 
-- Exiting FedHire Payment System --
 ----
-- Goodbye! -- 



























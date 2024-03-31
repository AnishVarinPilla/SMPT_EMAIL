/*  Whenever you send an email you are always refering to an email address
    That email address will be taking a DNS query of the link afer the @ in the email
    
    For Example:
    From : abc@gmail.com 
    Send : xyz@outlook.com
    
    then it will create a DNS query : outlook.com for its MX record
    You get these records when you buy and setup your domain
    MX - Mail Exhange Record :

    The MX record will have the instructions that whenever there is an mail (in this case outlook.com) for this domain
    how to handle the mail, to which server should it sent to . 
    You might get a respone like example : mailserver.com
    which is the server which handles mails for outlook.com

    Now a DNS Query on : mailserver.com for its 'A' Record
    A Record - it contains the ip address of the server 
    now this ip address will be sent to the sender for the actual transfer of the message of the mail

    Now you also have other important records that is necessary for a domain to have :
    
    !) SPF Record - It helps to remove the scam mails and help to identity if the mail received by the receiver came from an
    authenticate sender

    2) DKIM Record - You can add a signature for the email. THe email will be encrypted with the Private Key of the sender domain (gmail.com)
    in this case. Now when the mail is received by outlook.com it will ask for the DKIM record which sends the requester the Public Key to 
    Decrypt the email and verify the signature. DKIM stands for Domain Key Identifier Mail.
    
    3) DMARC Record - If the mail has failed to provide accurate information in the SPF and DKIM Records, This record will hold the rules 
    on what to do with the email. There are 3 ways to deal with a failed check mail in DMARC Record :

        a) None - Accept the mail into the inbox
        b) Quarantine -  Put the mail into the Spam Folder of the inbox
        c) Reject - Dont Accept the Mail at all. 
    
    Now when we are creating our own Mail Serve we are going to create a SMTP - Simple Mail Transfer Protocol instead of the standard
    http - Hyper Text Transfer Protocol where the connections occur. This Http runs in Port '80' whereas HTTPS - Hyper Text Transfer 
    Protocol Secure which contains a Trust SSL Certificate runs in Port '443'. SMTP runs on Port '25' and SMTPS runs on Port '465'.
    
    Each SMTP command defines a particular function within the SMTP session, which consists of three steps:
        1) Handshake : establishing a TCP Connection
        2) Email Transfer : manupilations within the email
        3) Terminations : Close the connection 


    SMTP Commands :
        1) HELO / EHLO : A Command that initiates the connection btw two parties 
        2) MAIL FROM  : A Command which initiates transfer of the email from the sender
        3) RCPT TO :  A Command which tells to whom to send the email to 
        4) DATA : The information which the email contains 
        5) QUIT : A Command that terminates the Connection between two parties 

    Common Errors That is Dealt with in the SMTP are :
        Code                        Error
        101                    Server Connection Error(Wrong server name or port)
        211                    System Status(response to HELP)
        214                    Help Message(response to HELP)
        220                    The Server is ready (response to client's attempt to establish a connection)
        221                    The server closees the transmission channel
        235                    Authentication Successful
        250                    The Requested Command is completed. As a rule the command is followed by OK.
        251                    User is not local but server will send a message to the forwarded path

    
    */
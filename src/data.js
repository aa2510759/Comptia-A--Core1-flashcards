const answers = [ "c) SODIMM ", "b) Toner Probe", "a) CAT 5", "b) STP CAT6", "d) Airplane mode", "a) ST \nd) SC \ne)LC", "c) Rapid Elasticity", "a) Multimeter", "d) Back everything", "b) Saas", "c) 23", "a) Ping", "d) 169.254.213.235", "b) Anti-static wrist strap", "c) Ipconfig/renew", "b) 100m", "f) 443", "a) 802.11a", "b) Using a MAC filter", "d) DHCP", "b) Plenum", "a) Hub", "c) Router", "b) Switch", "d) Hybrid", "a) RJ-11", "c) PCI-E", "c) Battery", "c) PSU \ne) Motherboard", "d) VLAN", "c) Replace the CMOS battery", "b) Extract data","a) RJ-45\n e) Crimper","c) RAM","c) Isolation","d) PAN","a) Verify the memory requirements of the motherboard","b) NFC ","b) VPN","c) PoE Injector","d) Install appropriate printer driver","a) Testing software in a safe environment","c) Router","a) Coaxial","d) 19.45.11.6","d) Fuser","f) 44","b) Replace the Digitizer","b) Load Balancer","b) In bezel of the lid", "c) Drum", "c) Drum", "a) Ask about possible changes", "d) FTP", "d) perform the drum cleaning procedure", "c)password/thumbprint", "a) Hosting home pages and business portals", "b) clean the keyboard", "d) 802.11n", "b) Rapid Elasticity", "b) Payments made only for resources that are used", "d) Apply a maintenance kit to the printer", "c) PSU", "b) Try to extract data", "c) Mobile Hotspot", "b) HTTPS", "c) PAN", "b) The screen needs to be recalibrated", "a) Digitizer issues", "d) 802.11n", "c) Adjusting the lens", "d) SaaS", "b) To test software in a safe environment", "d) Router", "c) 19.45.8.28", "b) LoopBack IP", "d) Faulty RAM", "a) DCHP Failure", "d) Fiber", "c) STP cat6","d) Defective Battery", "c) Establish a theory", "b) 172.16.0.6", "c) Public IP", "b) 2", "b) 100m", "a) Anti-static wrist strap", "c) Laser", "b) RAID 1", "c) Install a PoE injector", "a) Switches only send data to the specific computer, while hubs send data to all computers inside the network", "d) Consider another possible cause of the issue","a) Test the RAM in different slots, one at a time", "b) Impact", "c) The device has a data cap and has reached the limit", "a) Check the storage space", "b) Bluetooth", "d) The user's internet connection is down ", "c) Digitizer", "c) The PC is unable to contact a DHCP serve", "b) Scratched scanner glass","c) Magnetic reader\nf) Barcode scanner", "b) Duplex", "a) Airplane mode", "c) Install all of the latest Windows updates to patch the system", "c) Antistatic containers", "b) Loose battery connection", "d) 3-D", "c) Digitizer Settings", "a) DHCP Failure",]

const questions = [    
// part 1
"You have to install additional RAM into a laptop. What type of RAM should be used?\n\na) ECC\nb) DDR3\nc) SODIMM \nd) VRA",

"User claims to have no internet or network connectivity. After investigating, your verify there is none. The problem is not the PC and the network cable goes to patch panel. What can you do or use to locate the user's cable at the patch panel?\n\na) Crimper \nb) Toner Probe \nc) Punch Down Tool \nd) Unplug the cables until you find the correct one",

"User can never seem to transfer data at more than 100Mbp/s transfer rate. When investigating, you notice that the user is using the wrong cable. What cable is the user using?\n\na) CAT 5 \nb) CAT5e\nc) CAT6 \nd) CAT6a",

"Users complain about connectivity issues. EMI is the problem. What type of cable would be best to use for this problem w/out it costing too much w/out affecting performance?\n\na) coaxial \nb) STP CAT6 \nc) UTP CAT5e\nd) Multi Mode Fiber",

"A user complains his phone cant connect to any WI-FI network? What is the most likely cause of this?\n\na) Disable hotspot \nb) VPN\nc) Battery\nd) Airplane mode",


"Which of the following are Fiber connectors?\n\na) ST \nb) RJ-45 \nc) RJ-11 \nd) SC \ne) LC \nf) BNC",

"Which of the following Cloud computing concepts allows scalable services to be provided to the client\n\na) On Demand \nb) Metered\nc) Rapid Elasticity \nd) Resource Pooling",

"You need to verify if data racks have been properly grounded. Which tool should you use?\n\na) Multimeter \nb) Cable tester \nc) Tone Generator \nd) Volt Meter",

"Clicking sounds user has been hearing more and more especially when they tun video editing software.What should be done first?\na) Replace fans\nb) Replace the CPU\nc) Replace the HDD\n\nd) Back everything \ne) Replace the Graphics Card\nf) Do a system restore",

"User signed up for a web-based app they pay a monthly fee. Which of the following solutions has the user purchased?\n\na) Iaas\nb) Saas \nc) Paas \nd) Daas",


"One of your technicians would like to block people from remotely logging into a server. Which port should your technician block?\n\na) 80 \nb) 21 \nc) 23 \nd) 443",


"User complains they can't connect to another user on the network. What command can the user run in commend prompt to test connectivity to another host?\n\na) Ping \nb) Tracer\nc) ipconfig\nd) ipconfig/renew",

"What is APIPA IP address?\n\na) 192.168.30.7 \nb) 127.0.0.1\nc) 82.129.80.111 \nd) 169.254.213.235",


"User is building a computer for a client. How would they prevent ESD\n\na) Wash hands\nb) Anti-static wrist strap \nc) STP\nd) Turn Power off",

"User complains they don't have internet access, it used to work. they run i[config in cmd.After seeing the results. What command should the user run after seeing the results shown?\n\na) Ping\nb) Ipconfig/release\nc) Ipconfig/renew \nd) Ipconfig/flushdns",


// part 2


"A technician installs CAT5e cable in roof which is 150m long, it doesn't work even after replacing why?\n\na) 50m\nb) 100m \nc) 150m\nd) 1000m",


"Which of the following ports is used for web browsing?\n\na) 22\n b) 23\nc) 25\nd) 80\ne) 110\n f) 443",


"Which of the following wireless standards is only capable of 5 GHz frequency?\n\na) 802.11a \nb) 802.11b \nc) 802.11g \nd) 802.11n",


"Your technicians is concerned that the WIFI network is being used by unauthorized users. Which of the following would minimize unauthorized use?\n\na) Changing the SSID \nb) Using a MAC filter \nc) Changing the IP address \nd) Changing the Password",

"Which of the following services provides a device with IP address?\n\na) DNS\nb) Web Server\nc) Active Directory \nd) DHCP",

"Which of the following network cables can be used and installed to avoid a fire code violation?\n\na) Coaxial\nb) Plenum \nc) Fiber\nd) Shielded",



"Which of the following devices broadcasts out of all its ports?\n\na) Hub \nb) Switch\nc) Router\nd) Access Point",


"Which of the following devices is usually a PC's default gateway?\n\na) Hub \nb) Switch\nc) Router \nd) Access Point",

"Which of the following devices can use VLANs to secure networks?\n\na) Hub\nb) Switch \nc) Router\nd) Access Point",


"Which of the following cloud models allows a company to keep some data on-premises and in the cloud at the same time?\n\na) Community \nb) Private \nc) Public \nd) Hybrid",

"Which is for POTS?\n\na) RJ-11\nb) RJ-45 \nc) RG-59 \nd) ST",

"User wants to install a graphics in their pc to do some gaming. They want to verify that a graphic card is compatible with their pc. Which of the following connection types would they most likely use?\n\na) USB\nb) PCI\nc) PCI-E \nd) AGP",

"User 1 has a laptop that has been running for many years. This laptop now has a bulge at the bottom casing and overheats from time to time when plugged into the power. What is the most likely cause?\n\na) Fan\nb) Hard Drive\nc) Battery \nd) Power Adapter",

"With which of the following hardware components will a computer not generate a BIOS beeping code if there is a hardware problem? Choose all that apply.\n\na) CPU\nb) RAM\nc) PSU \nd) Graphics Card\ne) Motherboard", 


"With which of the following allows multiple digital networks to Transverse through a switch?\n\na) VPN\nb) DHCP\nc) Remote Desktop\nd) VLAN",

// part 3

"System time is slowly falling behind what's causing this?\n\na) motherboard\nb) CPU\nc) Replace the CMOS battery \nd) RAM",


"32) User reports that their PC sometimes fails to boot. The user also reports that the performance appears to be degrading. During inspection, You notice a weird repetitive ticking sound. What should you do first?\n\na) Reseat the RAM modules\nb) Extract data \nc) Check the fans\nd) Check for any CD/DVD in the tray",


"A user reports that when they move their CAT5e cable which is connected to a wall jack, it fails. What should you use/do Choose all that apply\n\na) RJ-45 \nb) RJ-11 \nc) Tone Generator\nd) Magnetized Screwdriver \ne) Crimper", 


"Some of your users report that whenever multiple applications are being used, their computer's response time slows down a lot. When only one application is open, the response time is fine. Which of the following should be upgraded?\n\na) HDD\nb) CPU \nc) RAM\nd) SSD",

"Client-side virtualization guest machines have similar security requirements as physical machines. You still need to achieve separation from other virtual machines though. How can this be achieved?\n\na) Authorization \nb) Authentication\nc) Isolation \nd) Hardening",



"One of the users in your company connects their smart phone to their laptop. What type of network has the user created?\n\na) LAN \nb) WLAN\nc) GAN\nd) PAN",



"You need to upgrade a RAM, what should you do first?\n\na) Verify the memory requirements of the motherboard \nb) Run a diagnostic test on the current memory\nc) Confirm that the new and the old memory are the same brand\nd) Connect a ESD strap",



"You receive a complaint that a user is having issues with a contactless payment feature. Their device is not detecting payment options. Which of the following is the MOST likely cause?\n\na) Bluetooth\nb) NFC \nc) WI-FI\nd) Battery",

"You have a remote user that need to securely connect their laptop to a company server. What can the user use?\n\na) WAN\nb) VPN \nc) DHCP\nd) Remote Desktop ",



"One of your technicians has to install an IP phone. When they connect the IP phone. When they connect the IP phone to a network cable with RJ-45 connector, the phone stays dead. Which of the following will resolve the issue?\n\na) Change ports on the Switch\nb) Replace the IP Phone\nc) PoE Injector \nd) Upgrade the network cable",



"One of your technicians installs a printer for a user. When the technicians tries to print a test page, the printer is listed as generic. Which if the following best describes what the technician should do next? \n\na) Change the toner \nb) Connect a USB cable \nc) Change the printer trays to allow duplex printing\nd) Install appropriate printer driver",


"When running a VM as a sandbox, which of the following is the best reason for doing so?\n\na) Testing software in a safe environment \nb) To run multiple machines on the same hardware\nc) To have dedicated hardware for a single system\nd) To increase the efficient use of computing resources",


"Which of the following is most likely to be used in a SOHO to connect to the internet?\n\na) Hub\nb) Switch\nc) Router \nd) Access Point",

"One of your fellow technicians is requesting that the company should buy new cables to be used with the F-type connectors that are already in house. Which of the following cables should the company buy?\n\na) Coaxial \nb) Plenum\nc) CAT 5e \nd) Fiber ",



"One of your fellow technicians  is configuring a new SOHO router for a small business. The ISP of the client gives the technician an IP address on the router's WAN port. Which of the following addresses did the technicians most likely configure on the router?\n\na) 169.254.15.4 \nb) 172.16.0.6 \nc) 10.1.50.7 \nd) 19.45.11.6",


"One of your fellow technicians is dealing with a printer where the Printed text is not adhering properly to the paper. Which of the following should be replaced to solve the problem?\n\na) Waste container \nb) Roller \nc) Toner \nd) Fuser", 



"Which one of the following is the default port for HTTPS traffic?\n\na) 20 \nb) 22 \nc) 23 \nd) 53 \ne) 80 \nf) 443",

"A user complains that they have an android phone and it is not responding to any input. What should you do?\n\na) Replace the Gyroscope\nb) Replace the Digitizer \nc) System on a chip\nd) Replace the Battery",



"One of your technicians need to use something to distribute traffic evenly between nodes. What can the technicians use?\n\na) Proxy (kind of like a bouncer that doesn't let you go to certain sites)\nb) Load Balancer \nc) Firewall\nd) Switch",


"One of your technicians would like to inspect a laptop's wireless antenna. Where do you usefully find most laptop wireless antennas?\n\na) Underneath the battery\nb) In bezel of the lid \nc) Near the network card \nd) It's integrated into the motherboard",

// version 2


// part 1

  "Vertical streaks are appearing on the output of a laser printerwhich if the following items is the MOST likely cause? \n\na) Roller \nb) Ribbon \nc) Drum \nd) Transfer Belt",


"You have a user that complains about the printouts from their laser printer. They mention the printouts appear to have double image. Which Printer consumable/part is causing this?\n\na) Ink Cartridge \nb) Roller \nc) Drum \nd) Fuser",


"You have a user that contact your help desk about a failing thumbprint scanner. Which of the following troubleshooting steps should be performed FIRST?\n\na) Ask about possible changes \nb) Attempt to clean the scanner\nc) Requisition a new scanner\nd) File a damage report",

"Which of the following uses PORT 20/21 to transfer data in clear text?\n\na) SMTP \nb) Telnet \nc) SSH \nd) FTP",



"Multiple users who share the same printer in an office have reported that they see thin lines, vertical lines that cover the entire height of every page printed from the printer. Which of the following steps should you perform to MOST likely resolve this issue?\n\na) reinstall the printer driver on each computer\nb) replace the printer paper with new ream (paper, no effect)\nc) clear the print spooler on each computer (the queue for the print documents)\nd) perform the drum cleaning procedure",


"You have been tasked to set up a device with 2FA. Which of the following meets this requirement?\n\na)password/password\nb)password/pin\nc)password/thumbprint \nd)thumbprint/retinal scan",



"Which of the following best describes a web server?\n\na) Hosting home pages and business portals \nb) Storing files and controlling user access\nc) Providing IP addresses and printing services\nd) Setting up personal mailboxes and calendars",



"You have a user who brings you an old looking laptop, they report issues with their keyboard. You inspect the laptop and don't see external damage but you do however notice that many keystrokes don't register in a word processor. The laptop works fine though if you use an external keyboard which of the following would MOST likely resolve the issue?\n\na) disable the sticky keys feature\nb) clean the keyboard \nc) charge the laptop\nd) reset the BIOS settings to default",


"Which of the following standards supports MIMO technology?\n\na) 802.11a \nb) 802.11b \nc) 802.11g \nd) 802.11n", 

"One of your clients is an online retailer. They want to save money and are considering migrating to the public cloud so that they can easily and quickly add capacity when it's peak shopping season and then reduce it again quickly and easily when it's off-peak season. Which of the following BEST describes this aspect of cloud computing?\n\na) High availability \nb) Rapid Elasticity \nc) Meter Utilization\nd) Shared Resources",


"Which of the following describes metered utilization of cloud resources?\n\na) Resources provisioned instantly \nb) Payments made only for resources that are used \nc) Resources pooled to increase computing power\nd) Implementation of rapid elasticity",


"A user complains about an issue with a new printer that is no longer accepting print jobs. You verify that the printer is on and notice the printer LCD screen has the following error-msg: Paper Jam, Jam in Fuser. Which of the following is the MOST efficient next step you can take?\n\na) Check the printer path to locate any obstructions\nb) Turn the printer on and off to see if the error clears\nc) Replace the fuser \nd) Apply a maintenance kit to the printer",



"You have a user that complains that their desktop computer does not start at all, what is FIRST hardware component you should check/test?\n\na) RAM\nb) CPU\nc) PSU\nd) Motherboard",

"One of your user report that occasionally their pc would fail to boot. The user also reports that the performance on their pc is degrading. During investigation, you notice a repetitive ticking noise coming from the PC. Which of the following should you do FIRST?\n\na) Check the CD/DVD tray\nb) Try to extract data \nc) Reseat RAM modules\nd) Inspect the fan", 


"One of your remote users reports connectivity issues with the local internet provider. After one of your technicians reboot the router/modem supplied by the ISP, the issue persists.Which of the following would BEST establish the connection in minimal time?\n\na) Fiber Optic\nb) Neighbor's WIFI\nc) Mobile Hotspot \nd) Logging a ticket with ISP",

// part 2

"Which of following utilized port 443 and transfers data in encrypted text.\n\n\na) HTTP\nb) HTTPS \nc) DNS \nd) Telnet \ne) SSH \nf) RDP", 

"What type of network would a user have made if they connect a smart phone to a laptop?\n\na) LAN \nb) WLAN\nc) PAN \nd) GAN",

"One of your users brings to you because the cursor on it keeps drifting. You notice that the screen does not appear to be damaged. Which of the following is the MOST likely cause of the issue?\n\na) The touch-pen battery is depleted\nb) The screen needs to be recalibrated \nc) The screen is physically damaged\nd) The screen rotation is incorrect",

"One of your users reports that they have issues with their phone after dropping it. After investigating you notice the icons on the screen all look normal but when the user touches the browser icon, for example, nothing happens. Which of the following is the MOST likely cause?\n\na) Digitizer issues \nb) Broken Screen\nc) Malware \nd) Overheating",

"Which of the following 802.11 standards supports both 2.4Hz and 5GHz channel frequencies?\n\na) 802.11a\nb) 802.11b \nc) 802.11g \nd) 802.11n",

"You are inspecting a projector that is displaying fuzzy images. Which of the following options would provide the BEST solution?\n\na) Reseating the lamp \nb) Replacing the video cables\nc) Adjusting the lens \nd) Changing the input source",

"One of your fellow technicians wants to migrate all common business applications, including email and file shares to the cloud. Which of the following cloud concepts should be used?\n\na) MaaS \nb) IaaS \nc) PaaS\nd) SaaS",


"Which of the following would be the BEST reason to use a virtual machine as a sandbox?\n\na) To increase the efficient use of computing resources\nb) To test software in a safe environment \nc) To have dedicated hardware for a single system\nd) To run multiple machines on the same hardware",


"Which of the following would most likely be used to connect one or more devices to the INTERNET on a SOHO Environment\n\na) Hub\nb) Wireless Access Point \nc) Switch\nd) Router",



"You must configure a new SOHO router for a small business. The ISP of the client has given you an IP address on the router's WAN port. Which of the following addresses did you most likely configure?\n\na)169.254.159.19 \nb) 172.16.7.42 \nc) 19.45.8.28 \nd) 10.1.50.30",


"127.0.0.1 is an example of what?\n\na) APIPA\nb) LoopBack IP \nc) Private IP\nd) Public IP",


"You are diagnosing a PC that shuts down unexpected during a burn-in test. Which of the following is the MOST likely cause for this symptom?\n\na) Faulty CMOS Battery\nb) OS Update Issue\nc) Overheating\nd) Faulty RAM",

"One of your users reports limited or no connectivity on their computer. You run the ipconfig command with the following result:\n\nIPv4 address.......169.254.213.242 \nSubnet Mask........255.255.0.0 \nDefault Gateway....\n\nWhich of the following is MOST likely the cause of this issue?\n\na) DCHP Failure \nb) Duplicate IP Address \nc) Active Directory \nd) DNS Resolution",

"You are receiving reports that one section of the office sporadically loses network connectivity throughout the day. You investigate and determine that EMI is the root cause. Which of the following cable mediums would be best to avoiding EMI was the ONLY factor?\n\na) Coaxial \nb) UTP CAT5e \nc) STP CAT6 \nd) Fiber", 

"You are receiving reports that one section of the office sporadically loses network connectivity throughout the day. You investigate and determine that EMI is the root cause. Which of the following cable mediums would be the most cost effective?\n\na) Coaxial \nb) UTP cat5e \nc) STP cat6 \nd) Fiber",



// part 3 and part 4

"You are receiving reports from a user that complain about their phone. After investigating you notice the phone is hot to the touch even when not in use and that it also does not retain charge. The user also complains that their phone is very slow. Which of the following is MOST likely causing the symptoms?\n\na) Broken charging port\nb) Digitizer failure\nc) CPU overheating\nd) Defective battery", 


"What is the first step in the troubleshooting model? \n\na) Test the theory\nb) Identify the problem \nc) Establish a theory \nd) Verify system functionality",


"Which of the following is an example of a class B IP address?\n\na) 192.168.9.5 \nb) 172.16.0.6\nc) 10.0.0.7 \nd) 169.254.53.12",


"Which of the following is an example of what kind of address 102.134.122.178?\n\na) APIPA\nb) Loopback IP \nc) Public IP \nd) Private IP",

"What is the minimum number of hard drives required to be able to run RAID 1?\n\na) 1 \nb) 2 \nc) 3\nd) 4",


"What is the maximum distance a network cable (CAT5) can go without being repeated?\n\na) 10m\nb) 100m \nc) 1000m\nd) 10000m",

// part 4

"Which of the following should be used to prevent ESD from taking place?\n\na)Anti-static wrist strap \nb) Tile floors\nc) Short Sleeves\nd) Toner probe",


"Which of the following printers uses Toner to print\n\na) Dot matrix \nb) InkJet \nc) Laser \nd) Thermal ",


"Work station needs to have mirrored storage utilizing 4GB drives that support one failure. Which of the following BEST meets these requirements?\n\na) RAID 0 \nb) RAID 1 \nc) RAID 2 \nd) RAID 5",


"You need to install an IP phone in a SOHO with an unmanaged switch. When connected to a RJ45 receptacle, the phone does not boot. Which of the following is the QUICKEST way to resolve this issue?\n\na) Upgrade ethernet cable to the latest specification\nb) Replace the phone\nc) Install a PoE injector \nd) Change ports on the switch",



"Which of the following describes the operational difference between hubs and switches when transmitting data to a specific computer inside the network?\na) Switches only send data to the specific computer, while hubs send data to all computers inside the network \nb) Switches compress data, while hubs send uncompressed data\nc) Switches receive data and route it to all computers inside the network, while hubs receive data and do not route\nd) Switches scramble data, while hubs send data in the original form",


"You receive a ticket that a computer is not booting, you test the hard drive, its fully operational, Which of the following steps should you complete NEXT\n\na) Reinstall the OS \nb) Configure the new RAID array\nc) Report the status of the hard drive and close the ticket\nd) Consider another possible cause of the issue \ne) Restore the latest backup of the system",


"You are troubleshooting a computer that is not completing POST and gets stuck at the manufacturer logo screen. All internal, removable parts have been disconnected and only the minimum parts necessary to POST were been reconnected. However, the symptoms remain the same. Which of the following should you try next?\n\na) Test the RAM in different slots, one at a time \nb) Remove and test the power supply \nc) Replace the motherboard\nd) Change the CMOS battery",

"You are replacing a ribbon on a printer that produces faded text and images when printing. Which of the following types of printers are you working on?\n\na) Thermal \nb) Impact \nc) Laser \nd) InkJet",


"You have provided a limited number of users with company phones to control costs. one of the users has now opened a ticket because the phone no longer  allows internet browsing over a cellular connection. The user acknowledges that the phone worked before the user's child streamed several movies using the device. Which of the following describes why the phone cannot connect?\n\na) The company's group policy disabled the device \nb) The child accidently connected to the neighbor's WLAN\nc) The device has a data cap and has reached the limit \nd) The device's plan has been unpaid",



"You have a customer that brings their phone to your repair shop because it is experiencing extreme slowness and applications are crashing. You attempt to install a diagnostic application, but the installation fails. Which of the following should you do first to troubleshoot the issue?\n\na) Check the storage space \nb) Inspect the screen for damage\nc) Install the latest updates\nd) Recalibrate the digitizer",


"You have a user that is unable to connect a cellphone to the car. However, a second cellphone can connect in the same car. Which of the following settings should the user check on the first phone?\n\na) Location\nb) Bluetooth \nc) Hotspot\nd) Wi-fi ",


"One of your remote users calls you to report a notification indicating there is no connectivity. The user can access local file folders and other local machines but things like web pages do not appear to function. Which of the following is MOST likely the cause of the issue?\n\na) The user's domain account is locked out\nb) The user's switch has stopped working\nc) The user's IP address needs to be renewed \nd) The user's internet connection is down",

"Which of the following handle touch-screen operation on a mobile device?\n\na) Liquid Crystal Display\nb) Processor\nc) Digitizer \nd) Stylus",

"You just plugged in a user's new computer to a network port. After a few moments, the computer shows an AIPIA address. Which of the following is the MOST likely reason this happened?\n\na) The WLAN is disabling the card\nb) The network cable is not attached\nc) The PC is unable to contact a DHCP serve\nd) The DHCP server is using the addresses in the range of 169.254.254.1",

"You are troubleshooting an issue involving lines appearing down copied pages, but printed pages directly to the copier render as intended. Which of the following is the MOST likely cause of this issue?\n\na) Drum needs to be cleaned\nb) Scratched scanner glass \nc) Third-party toner\nd) Overheating system fuser",

"Which of the following peripherals would you use to take inventory quickly and update tags for products? (Choose TWO)\n\na) Flatbed scanner\nb) KVM switch\nc) Magnetic reader \nd) Label printer \ne) NFC device \nf) Barcode scanner",



"You have a user that wants to print a large job on both the front and back sides of the paper. Which of the following settings should you advise the user to change in the printer settings\n\na) Orientation\nb) Duplex \nc) Collate\nd) Transparency",


"You have a user that brings you a smartphone to repair. The device is unable to make/receive calls or connect to WI-FI. All applications on the device are working unless they require connectivity. Which of the following is the MOST likely causing the problem?\n\na) Airplane mode \nb) Disabled hotspot\nc) VPN\nd) Data cap",


"You need to resolve a malware problem, The anti-virus discovered  several hundred potential malware items on the workstation and removed them successfully. You decide to schedule daily scans on the system, enable System Restore, and create a System Restore point. Which of the following should you do NEXT?\n\na) Run the scan again to ensure all malware has been removed\nb) Quarantine the infected workstation\nc) Install all of the latest Windows updates to patch the system \nd) Educate the user on the safe browsing practices",



"Which of the following would you use to store memory chips from a laptop safely after an upgrade?\n\na) Cardboard boxes\nb) Freezer bags\nc) Antistatic containers\nd) Paper envelopes",


"A laptop is shutting down unexpectedly. You notice that when you move the laptop to another room it shuts down. You reseat the hard drive, memory, battery and LCD cable, but the laptop continues to shutdown. Which of the following is the MOST probable cause of the issue?\na) System overheating\nb) Loose battery connection \nc) CMOS battery failure\nd) Gyroscope malfunction",



"A printer has an error that says replace filament, what is the printer?\n\na) Thermal \nb) InkJet \nc) Laser \nd) 3-D",


"The touch-screen feature on a Windows device has stopped working. Which of the following should you check first?\n\na) Device Manager\nb) Performance Monitor \nc) Digitizer Settings \nd) Security Settings",

"Which of the following is MOST likely the cause for a PC to have an AIPIA address?\n\na) DHCP Failure \nb) DNS Resolution\nc) Duplicate IP Address\nd) Active Directory unavailable"
];
export {answers, questions};
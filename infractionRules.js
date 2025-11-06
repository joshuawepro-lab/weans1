/**
 * infractionRules.js
 * * This file contains the disciplinary matrix and the list of specific employee 
 * infractions from the WEANSWER CALL CENTER SERVICES Employee Handbook.
 * * Sources: 
 * - Disciplinary Matrix: Pages 9-10 (Minor, Less Serious, Serious Infractions tables)
 * - Infraction List: Pages 11-31 (Rule I, II, III, IV, V, VI, VII)
 */

// --- 1. DISCIPLINARY MATRIX ---

export const DISCIPLINARY_MATRIX = {
  MINOR: {
    level: "Minor Infraction",
    instances: [
      { instance: "1st Infraction", measure: "First Formal Warning (Documented)", cleansingPeriod: "Two (2) months" },
      { instance: "2nd Infraction", measure: "Written Warning", cleansingPeriod: "Four (4) months" },
      { instance: "3rd Infraction", measure: "Final Written Warning", cleansingPeriod: "Six (6) months" },
      { instance: "4th Infraction", measure: "Notice of Dismissal", cleansingPeriod: "Not applicable" },
    ],
    note: "Management may place an erring employee on preventive suspension while an administrative investigation is being conducted for the 1st to 3rd Infractions."
  },
  LESS_SERIOUS: {
    level: "Less Serious Infraction",
    instances: [
      { instance: "1st Infraction", measure: "Written Warning", cleansingPeriod: "Four (4) months" },
      { instance: "2nd Infraction", measure: "Final Written Warning", cleansingPeriod: "Six (6) months" },
      { instance: "3rd Infraction", measure: "Notice of Dismissal", cleansingPeriod: "Not applicable" },
    ],
    note: "Management may place an erring employee on preventive suspension while an administrative investigation is being conducted for the 1st to 2nd Infractions."
  },
  SERIOUS: {
    level: "Serious Infraction",
    instances: [
      { instance: "1st Infraction", measure: "Notice of Dismissal", cleansingPeriod: "Not applicable" },
    ],
    note: "Serious Infractions include: Gross Misconduct, Wilful Disobedience, Gross Negligence, Fraud, Commission of a Crime or Offense against the Company and Co-Employees. Punishment depends on the gravity of the offense and surrounding circumstances."
  },
};

// --- 2. LIST OF SPECIFIC INFRACTIONS ---

export const INFRACTION_RULES = [
  // --- GENERAL RULES ---
  {
    rule: "General",
    section: "I",
    description: "Any act or behaviour prejudicial to the interest of the Company or transgression of any other employee’s right not specifically provided under this Code, shall also be punishable based on the Labor Code of the Philippines and related laws."
  },
  {
    rule: "General",
    section: "II",
    description: "The Company may modify the penalty prescribed in this Policy and other existing company regulations, taking into consideration the degree of participation as well as the circumstances surrounding the infraction."
  },

  // --- RULE I: PROPER CONDUCT and BEHAVIOR ---
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 1, description: "Eating and / or smoking in prohibited areas.", level: "Minor Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 2, description: "Bringing in of unauthorized materials inside the Production floor such as: a) Open mugs or cups, merchandise or any goods that are for sale. b) Other unauthorized personal belongings.", level: "Minor Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 3, description: "Creating noise or disturbance, engaging in horseplay, mischief, improper or unnecessary acts within Company premises during office hours, including acts that may result to the loss of personal belonging or company property issued to an employee.", level: "Minor Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 4, description: "Littering, causing and / or contributing to poor sanitary conditions including failure to obey existing sanitary rules within the Company premises, in company rented property, or during Company activities", level: "Minor Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 5, description: "Non-compliance to the prescribed Uniform/ attire or dress code.", level: "Minor Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 6, description: "Not wearing Company ID within Company premises.", level: "Minor Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 7, description: "Unauthorized entry to restricted areas of the Company.", level: "Less Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 8, description: "Unauthorized use or abuse of sleeping quarters and other company owned resting area.", level: "Less Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 9, description: "Vandalism in any Company property; unauthorized removal / defacing of any notice or announcements from the Company bulletin boards and other designated areas.", level: "Less Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 10, description: "Minor destruction of company property", level: "Less Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 11, description: "Unauthorized bringing out of Company equipment, files, records, documents and/or properties.", level: "Less Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 12, description: "Refusal to undergo annual medical test /examination, such as but not limited to X-ray, Drug Test, and Laboratory tests, as required by the Company.", level: "Less Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 13, description: "Making derogatory references to race, ethnicity, religion, marital status, age, disabilities, sexual preference or gender against representatives, employees, visitors, suppliers, clients and/or (internal and external) customers of the Company", level: "Less Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 14, description: "Giving false and but not material information in application form and other company document.", level: "Less Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 15, description: "Bloating statistics in performance report.", level: "Less Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 16, description: "Littering, causing or contributing to poor sanitary condition including failure to obey existing sanitary rules in company rented property.", level: "Less Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 17, description: "Refusing to restrain a hostile inclination that tends to erode the morale of other employees like acts destructive of the morale of co employees.", level: "Less Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 18, description: "Leaving his work area or work station without the permission of his immediate superior or his department head. (Abandonment of Post)", level: "Less Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 19, description: "Reporting to work under the influence of liquor or drinking liquor inside the Company premises except sanctioned company celebrations.", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 20, description: "Possession, selling or using prohibited drugs and possession of drug paraphernalia within Company premises or during Company sponsored activities.", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 21, description: "Use of Company owned phone or landline for personal IDD / NDD / Mobile use without authorization.", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 22, description: "Destruction of company property.", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 23, description: "Refusal to undergo compulsory medical examination, drug test and other laboratory tests as prescribed by the company.", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 24, description: "Disclosure of highly sensitive and confidential information such as, but not limited to, employee’s compensation, medical condition/records, Company trade secrets, intellectual property rights, business plans, loss, client and customer account information or other confidential / classified information. This also includes violation of the Non Disclosure Agreement.", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 25, description: "Demonstrating any act of discourtesy against representatives, employees, visitors, suppliers, clients and/or (internal and external) customers of the Company within the Company premises or while performing official duties (includes: displaying impatience/sarcasm, unreasonable behavior, etc.).", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 26, description: "Threat, verbal assault, provocation, intimidation, coercion, rowdiness, or harassment against representatives, employees, visitors, suppliers, clients and / or (internal and external) customers of the Company.", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 27, description: "Use of profanity in any language in communicating with employees, representatives, visitors, suppliers, clients and / or (internal and external) customers of the Company such as, but not limited to, using vulgar, offensive, abusive or sexually oriented language.", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 28, description: "Engaging in any scandalous activity or immoral and highly unethical acts that violates the common standards of decency and morality within the Company or during Company activities (includes: viewing/transmitting obscene material, sexual harassment, or any immoral act).", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 29, description: "Fighting or instigating/provoking any fight whether verbal or physical including but not limited to mauling or inflicting physical injury, embarrassment or humiliation to a co employee, service partner, third party, vendor or any other third person within company premises or during office sponsored events outside company premises.", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 30, description: "Mauling a co-employee within or outside the company premises including but not limited to the company’s service partners and third party vendors.", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 31, description: "Malicious comments or posts in Social Media about the Company, its clients, its partners, processes, procedures, products or property that may cause damage company’s or its client’s reputation and goodwill.", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 32, description: "Gambling, betting or taking part in any forms of game of chance within the Company premises during office hours whether for money or for something of material value or condition.", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 33, description: "Unauthorized personal solicitations or donations within the Company premises.", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 34, description: "Engaging in business transactions involving lending of money to another employee for profit (includes requiring a co-employee to act as endorser/co-maker or surrender their ATM/collateral).", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 35, description: "Misuse or abuse of authority (includes: actions in excess of authority, wrongful/malicious acts resulting in injury, taking advantage of rank, humiliating/coercive acts, or forcing an employee to resign).", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 36, description: "Encouraging, coercing, inciting, or inducing any employee to engage in any practice in violation of the Company's Work Rules or Policies or internal policies of each line of Division/Department.", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 37, description: "Directly or indirectly requesting or receiving any gift, present, share, percentage or any form of benefit or favor, for himself or for any other person in connection with any business, contract, application or transaction between the Company and any other party.", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 38, description: "Submitting falsified or tampered document.", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 39, description: "Giving false and material information in application form and other company document.", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 40, description: "Falsifying company documents of forging signatures.", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 41, description: "Giving aid or leaking sensitive information to competitors.", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 42, description: "Accepting bribes from suppliers or job applicants.", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 43, description: "Engaging in or maintaining an illicit/illegal affair/ extra marital relationship with any employee/ subordinate or superior of the Company.", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 44, description: "Committing acts of immorality inside Company’s premises.", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 45, description: "Viewing or reading any pornographic materials or online pornographic site during office hours.", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 46, description: "Sexual Harassment as defined by law", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 47, description: "Conviction of a criminal offense resulting in damage to the good name and standing of the Company.", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 48, description: "Employment as officer, employee, consultant, broker, agent, trust or nominee in any other company unless expressly allowed by the management and provided that such practice of profession or other employment... shall be done outside office hours and shall not utilize government resources.", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 49, description: "Use of Company property, equipment or materials for personal use or purpose.", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 50, description: "Sleeping while on duty / shift.", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 51, description: "Threat to inflict harm to a co-employee.", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 52, description: "Circumvention of policies on attendance adherence and timekeeping.", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 53, description: "Unauthorized access of non-business related websites (e.g. Facebook, YouTube and other nonbusiness related sites).", level: "Less Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: "54a", description: "Destruction or loss of company property (Value is 1,000.00 Pesos (PHP) and below). Employee must shoulder the cost of restoration/replacement.", level: "Minor Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: "54b", description: "Destruction or loss of company property (Value is 1,000.00 Pesos but below 5, 000. 00 (PHP)). Employee must shoulder the cost of restoration/replacement.", level: "Less Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: "54c", description: "Destruction or loss of company property (Value is 5,000.00. (PHP) and above). Employee must shoulder the cost of restoration/replacement.", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 55, description: "Condoning/Colluding with the improper or inappropriate behavior committed by a direct report.", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 56, description: "Offensive and unprofessional conduct while on a call (includes: speaking in vernacular, swearing, discriminating language, rudeness, cutting off customer, negative portrayal of the Company/client, threat/harassment, relentlessly pressing for a sale).", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 57, description: "Occupying lockers that are not officially assigned to them as per records.", level: "Minor Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 58, description: "Failure to return/surrender temporary ID issued by the company within 24 hours.", level: "Minor Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 59, description: "Involving one's self in any issue in Social Media, which negatively affects the image, goodwill and reputation of the company.", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 60, description: "Failure to observe proper decorum or displaying unprofessional/inappropriate behavior in public places, whether within or outside of the company premises, which behavior negatively impacts the image and reputation of the company.", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 61, description: "Possession / custody of unauthorized materials inside the Operations floor such as, but not limited to: Mobile phones; Electronic devices; Any kind of writing materials; Any other kind of data or picture capturing devices and the like.", level: "Serious Infraction" },
  { rule: "RULE I: PROPER CONDUCT and BEHAVIOR", section: 62, description: "Unauthorized transfer of company asset or equipment which may include, but not limited to, computer parts and/or computer peripherals e.g mouse, keyboard, CPU, avaya, etc.", level: "Less Serious Infraction" },

  // --- RULE II: INSUBORDINATION ---
  { rule: "RULE II: INSUBORDINATION", section: 1, description: "Willful disobedience of the lawful orders and regulations of the Company or any of its officers.", level: "Serious Infraction" },
  { rule: "RULE II: INSUBORDINATION", section: 2, description: "Willfully refusing to render overtime despite due notice in accordance with Article 87 and 89 of the Labor Code of the Philippines, as amended.", level: "Serious Infraction" },
  { rule: "RULE II: INSUBORDINATION", section: 3, description: "Deliberate refusal to attend administrative hearings, withholding vital information, and/or refusal to testify in relation to the conduct of administrative investigation.", level: "Serious Infraction" },
  { rule: "RULE II: INSUBORDINATION", section: 4, description: "Continued refusal to report to new work assignment.", level: "Serious Infraction" },
  { rule: "RULE II: INSUBORDINATION", section: 5, description: "Refusal to transfer consequent to promotion.", level: "Serious Infraction" },
  { rule: "RULE II: INSUBORDINATION", section: 6, description: "Refusal to undergo X-Ray, drug test and other lawful and reasonable orders of the company physician.", level: "Serious Infraction" },
  { rule: "RULE II: INSUBORDINATION", section: 7, description: "Willful disobedience by an employee without just and lawful excuse in the form of a rule, order, instruction, standard operating procedure or any Company policy issued by the employer.", level: "Serious Infraction" },
  { rule: "RULE II: INSUBORDINATION", section: 8, description: "Failure or deliberate refusal to acknowledge or confirm online issued NTEs, NODs, PSP enrollment documents, or coaching logs.", level: "Minor Infraction" },
  { rule: "RULE II: INSUBORDINATION", section: 9, description: "Refusal to report on its expected back to work based on the filed application form for a leave of absence, (Applicable for Medical and Non Medical related leave of absence)", level: "Serious Infraction" },

  // --- RULE III: NEGLIGENCE and NEGLECT of OFFICIAL DUTIES ---
  { rule: "RULE III: NEGLIGENCE and NEGLECT of OFFICIAL DUTIES", section: 1, description: "Loafing, loitering, slacking-off, dozing-off, wasting time or engaging in any unauthorized activity during working hours whether or not away from the assigned workplace or that which may cause disruption to work activities of others.", level: "Minor Infraction" },
  { rule: "RULE III: NEGLIGENCE and NEGLECT of OFFICIAL DUTIES", section: 2, description: "Simple neglect of duty or the failure to give proper attention to a task expected from an employee resulting from either carelessness or indifference.", level: "Minor Infraction" },
  { rule: "RULE III: NEGLIGENCE and NEGLECT of OFFICIAL DUTIES", section: 3, description: "Performing activities which are personal in nature during office hours that may affect productivity (includes: unauthorized selling of goods/services, entertaining visitors for personal reasons for >15 minutes, playing electronic/digital games).", level: "Minor Infraction" },
  { rule: "RULE III: NEGLIGENCE and NEGLECT of OFFICIAL DUTIES", section: 4, description: "Failure to remit collections and / or liquidate expenses or cash advances due to the Company within the prescribed period.", level: "Minor Infraction" },
  { rule: "RULE III: NEGLIGENCE and NEGLECT of OFFICIAL DUTIES", section: 5, description: "Failure to return or deliver materials or equipment entrusted to the employee by the Company within the prescribed timelines.", level: "Minor Infraction" },
  { rule: "RULE III: NEGLIGENCE and NEGLECT of OFFICIAL DUTIES", section: 6, description: "Non-compliance in processing and submission of Health Permits or Occupational Permit, or any permit as required by the local government units.", level: "Minor Infraction" },
  { rule: "RULE III: NEGLIGENCE and NEGLECT of OFFICIAL DUTIES", section: 7, description: "Failure to meet the required turn-around-time, quality and quantity of materials, supplies, facilities or services needed in the Company’s daily business operations.", level: "Less Serious Infraction" },
  { rule: "RULE III: NEGLIGENCE and NEGLECT of OFFICIAL DUTIES", section: 8, description: "Failure to report theft, loss or damage to Company property or equipment to immediate Superiors or proper authorities within twenty four (24) hours upon discovery or knowledge thereof.", level: "Less Serious Infraction" },
  { rule: "RULE III: NEGLIGENCE and NEGLECT of OFFICIAL DUTIES", section: 9, description: "Non-compliance with the following security and safety rules (includes: routine frisking/inspection, safety and precautionary processes, or Security and Safety Policies enforced by the Company).", level: "Less Serious Infraction" },
  { rule: "RULE III: NEGLIGENCE and NEGLECT of OFFICIAL DUTIES", section: 10, description: "Losing or neglect of Company records and properties.", level: "Less Serious Infraction" },
  { rule: "RULE III: NEGLIGENCE and NEGLECT of OFFICIAL DUTIES", section: 11, description: "Neglect in using equipment, tools or property resulting or causing damages or injury to person/s.", level: "Less Serious Infraction" },
  { rule: "RULE III: NEGLIGENCE and NEGLECT of OFFICIAL DUTIES", section: 12, description: "Gross and habitual neglect of official duties as demonstrated by absence of or failure to exercise slight care of diligence, or the entire absence of care.", level: "Serious Infraction" },
  { rule: "RULE III: NEGLIGENCE and NEGLECT of OFFICIAL DUTIES", section: "13a", description: "Failure to submit within the required timelines/ prescribed period primary employment requirements (e.g., valid NBI, Medical/Physical examination).", level: "Serious Infraction" },
  { rule: "RULE III: NEGLIGENCE and NEGLECT of OFFICIAL DUTIES", section: "13b", description: "Failure to submit within the required timelines/ prescribed period secondary employment requirements (e.g., proof of government numbers, birth certificate, etc.).", level: "Minor Infraction" },
  { rule: "RULE III: NEGLIGENCE and NEGLECT of OFFICIAL DUTIES", section: 14, description: "Any other acts which may endanger the safety of employees and / or cause disruption of operations through negligence, carelessness or inefficiency.", level: "Serious Infraction" },
  { rule: "RULE III: NEGLIGENCE and NEGLECT of OFFICIAL DUTIES", section: 15, description: "Consistent poor performance and inefficiency as exhibited by failure to meet performance standards set by the Company.", level: "Serious Infraction" },
  { rule: "RULE III: NEGLIGENCE and NEGLECT of OFFICIAL DUTIES", section: 16, description: "Commission of any acts of sabotage which result to... (Serious Infraction context).", level: "Serious Infraction" },

  // --- RULE IV: ATTENDANCE, PUNCTUALITY, and LEAVE ---
  { rule: "RULE IV: ATTENDANCE, PUNCTUALITY, and LEAVE", section: "1a", description: "Habitual Tardiness: Three (3) instances of tardiness within 30 days shall warrant a first notice.", level: "Minor Infraction" },
  { rule: "RULE IV: ATTENDANCE, PUNCTUALITY, and LEAVE", section: "1b", description: "Tardiness: Five (5) minutes to one (1) hour late.", level: "Minor Infraction" },
  { rule: "RULE IV: ATTENDANCE, PUNCTUALITY, and LEAVE", section: 2, description: "Undertime (Failure to complete the required number of work hours. Includes leaving work area or going outside Company premises during designated work hours without proper authorization).", level: "Less Serious Infraction" },
  { rule: "RULE IV: ATTENDANCE, PUNCTUALITY, and LEAVE", section: 3, description: "No Call No Show (NCNS) / Absence Without Official Leave (AWOL) or failure to report for work and advise immediate superior regarding the absence within 2 hours before the scheduled shift or schedule.", level: "Less Serious Infraction" },
  { rule: "RULE IV: ATTENDANCE, PUNCTUALITY, and LEAVE", section: 4, description: "Refusal to report for work after a work-related injury.", level: "Less Serious Infraction" },
  { rule: "RULE IV: ATTENDANCE, PUNCTUALITY, and LEAVE", section: 5, description: "Refusal to report for work after a leave of absence.", level: "Less Serious Infraction" },
  { rule: "RULE IV: ATTENDANCE, PUNCTUALITY, and LEAVE", section: "6a", description: "Abandonment of employment (One (1) day of absence without official leave with clear intent to sever the employer employee relationship).", level: "Minor Infraction" },
  { rule: "RULE IV: ATTENDANCE, PUNCTUALITY, and LEAVE", section: "6b", description: "Abandonment of employment (Two (2) consecutive days of absence without official leave with clear intent to sever the employer employee relationship).", level: "Less Serious Infraction" },
  { rule: "RULE IV: ATTENDANCE, PUNCTUALITY, and LEAVE", section: "6c", description: "Abandonment of employment (Three (3) consecutive days of absence without official leave with clear intent to sever the employer employee relationship).", level: "Serious Infraction" },
  { rule: "RULE IV: ATTENDANCE, PUNCTUALITY, and LEAVE", section: 7, description: "Abandonment of post for more than 4 hours in one shift.", level: "Serious Infraction" },

  // --- RULE V: FRAUD AND WILLFUL BREACH OF TRUST AND CONFIDENCE ---
  { rule: "RULE V: FRAUD AND WILLFUL BREACH OF TRUST AND CONFIDENCE", section: 1, description: "Failure to comply with safety and security standards.", level: "Less Serious Infraction" },
  { rule: "RULE V: FRAUD AND WILLFUL BREACH OF TRUST AND CONFIDENCE", section: 2, description: "Unauthorized removing, copying or reproducing, taking, or destroying official records that contains confidential information, including equipment without permission from authorized representative/s.", level: "Less Serious Infraction" },
  { rule: "RULE V: FRAUD AND WILLFUL BREACH OF TRUST AND CONFIDENCE", section: 3, description: "Deliberate non-disclosure of any infectious or contagious ailment.", level: "Serious Infraction" },
  { rule: "RULE V: FRAUD AND WILLFUL BREACH OF TRUST AND CONFIDENCE", section: 4, description: "Any act which results to the introduction of computer viruses or applications, whether or not it disrupts the Company’s computer systems/Information Technology system or causes damage to the Company.", level: "Serious Infraction" },
  { rule: "RULE V: FRAUD AND WILLFUL BREACH OF TRUST AND CONFIDENCE", section: 5, description: "Any act of hacking and/or exploiting Company’s computer system security such as breaking into the computer system for the purpose of maliciously copying, creating, renaming, modifying, deleting or accessing any Company or client systems and/or data.", level: "Serious Infraction" },
  { rule: "RULE V: FRAUD AND WILLFUL BREACH OF TRUST AND CONFIDENCE", section: 6, description: "Disclosure of Company’s trade secrets and confidential information (e.g., client information, company practices/processes, compensation/benefits).", level: "Serious Infraction" },
  { rule: "RULE V: FRAUD AND WILLFUL BREACH OF TRUST AND CONFIDENCE", section: 7, description: "Cheating during Training Examinations and / or any other qualifying examination / assessment conducted by the Company.", level: "Serious Infraction" },
  { rule: "RULE V: FRAUD AND WILLFUL BREACH OF TRUST AND CONFIDENCE", section: 8, description: "Moonlighting or rendering services for another employer without the knowledge or approval / consent of the Company.", level: "Serious Infraction" },
  { rule: "RULE V: FRAUD AND WILLFUL BREACH OF TRUST AND CONFIDENCE", section: 9, description: "Falsely representing to be an officer, agent or representative of the Company or any of its officers.", level: "Serious Infraction" },
  { rule: "RULE V: FRAUD AND WILLFUL BREACH OF TRUST AND CONFIDENCE", section: 10, description: "Substituting Company property, materials or equipment with another.", level: "Serious Infraction" },

  // --- RULE VI: CRIMINAL ACTS ---
  { rule: "RULE VI: CRIMINAL ACTS", section: "1a", description: "Corruption of Public officials (offering, giving, receiving, or soliciting money/gifts/favors from/to any co-employee, or entity or person where the Company has business relations or interests).", level: "Serious Infraction" },
  { rule: "RULE VI: CRIMINAL ACTS", section: "1b", description: "Acts of Violence (inflicting bodily or physical pain, injury, or damage upon any employee or person within the Company’s immediate or proximate vicinity, during sponsored events or even outside the Company).", level: "Serious Infraction" },
  { rule: "RULE VI: CRIMINAL ACTS", section: "1c", description: "Possession of firearms, deadly weapons and explosives including firecrackers within Company premises and/or during events outside company premises.", level: "Serious Infraction" },
  { rule: "RULE VI: CRIMINAL ACTS", section: "1d", description: "Drug use and drug pushing (as defined by law) within the company premises.", level: "Serious Infraction" },
  { rule: "RULE VI: CRIMINAL ACTS", section: "1e", description: "Theft or Robbery (as defined by law).", level: "Serious Infraction" },
  { rule: "RULE VI: CRIMINAL ACTS", section: "1f", description: "Arson; destroying or damaging property, systems, records or information of the Company, its employees, vendors, clients and (internal and external) customers.", level: "Serious Infraction" },
  { rule: "RULE VI: CRIMINAL ACTS", section: "1g", description: "Use of (internal and external) customer information to commit any acts of fraud whether inside or outside company premises.", level: "Serious Infraction" },
  { rule: "RULE VI: CRIMINAL ACTS", section: "1h", description: "Any act prohibits under Access Device Regulation Act (Republic Act 8484) or Data Privacy Act 2012.", level: "Serious Infraction" },
  { rule: "RULE VI: CRIMINAL ACTS", section: "1i", description: "Making false, vicious, malicious statement, or spreading rumors which are libelous, slanderous or derogatory in nature against the Company, its representatives, employees, clients and/or (internal and external) customers, whether verbal, written, or visual.", level: "Serious Infraction" },
  { rule: "RULE VI: CRIMINAL ACTS", section: "1j", description: "Falsification (misrepresenting a fact or altering a document that changes its meaning, making it appear to be true or genuine, in order to deceive and with intent to gain).", level: "Serious Infraction" },
  { rule: "RULE VI: CRIMINAL ACTS", section: "1k", description: "Sexual Harassment under the “Anti-sexual Harassment Law” (Republic Act 7877).", level: "Serious Infraction" },
  { rule: "RULE VI: CRIMINAL ACTS", section: "1l", description: "Alarms and scandals as defined under Article 155 of the Revised Penal Code.", level: "Serious Infraction" },
  { rule: "RULE VI: CRIMINAL ACTS", section: "1m", description: "Threats and Coercion under the Revised Penal Code.", level: "Serious Infraction" },
  { rule: "RULE VI: CRIMINAL ACTS", section: "1n", description: "Swindling or Estafa under the Revised Penal Code.", level: "Serious Infraction" },

  // --- RULE VII: ANALOGOUS INFRACTIONS ---
  { rule: "RULE VII: ANALOGOUS INFRACTIONS", section: 1, description: "Other grounds as provided under Article 282 of the Labor Code of Philippines on just causes of termination of employment.", level: "Serious Infraction" },
];

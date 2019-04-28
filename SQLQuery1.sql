use Malaria_DB
go

insert into Desease (Des_Desc, Des_Name)
values ('Malaria is a parasitic infection of the red blood cells. It is acquired via the bite of female Anopheles mosquitoes. The epidemiology of the disease is complex, depending on factors such as altitude, climate (temperature and rain fall), mosquito-breeding sites and human behaviour for successful transmission of the disease. There are five types of parasites namely Plasmodium vivax, Plasmodium malariae,Plasmodium ovale, Plasmodium knowlesi and Plasmodium falciparum. Vivax, malariae, ovale and knowlesi can cause serious illness, but seldom cause death in otherwise healthy patients. Plasmodium falciparum on the other hand can cause cerebral malaria and ultimately death in a relatively short period of time, if left untreated. Plasmodium falciparum (aka cerebral malaria) is the most prevalent malaria species in sub Saharan Africa and the anopheles mosquitoes (its distributor) can be found in most African countries.
All age groups are at risk of being infected with malaria.', 'Malaria')

insert into Causes (Des_ID,Cause_Desc)
values(1, 'Through infected mosquito bite'),
(1, 'Blood transfusions (Rare)'),
(1, 'Mother to unborn child (Rare)'),
(1, 'Sharing needles (Rare)')
go

insert into Symptoms (Symp_Desc,Symp_Duration,Symp_Type)
values('Fever', 'Between 48 and 72 hours', 'Common'),
('Chills', 'Up to one hour', 'Common'),
('Headache', 'Minimum 7 days', 'Common'),
('Nausea and vomiting', '10 days to 4 weeks', 'Common'),
('Muscle pain and fatigue', 'Between 10 and 15 days', 'Common'),
('Sweating', 'Approximately 3 days', 'Uncommon'),
('Chest or abdominal pain', 'Between 6 to 12 hours', 'Uncommon'),
('Couhing', 'Approximately 7 days', 'Uncommon')

insert into Symp_Des (Symp_ID,Des_ID)
values (1,1),
(2,1),
(3,1),
(4,1),
(5,1),
(6,1),
(7,1),
(8,1)

insert into Prevention (Prev_Desc,Prev_Type)
values ('Avoid mosquito bites by using insect repellent, covering your arms and legs and using a mosquito nets.','Bite prevention'),
('If you are going to be traveling to a location where malaria is common, talk to your doctor a few months ahead of time about whether you should take drugs before, during and after your trip to help protect you from malaria parasites','Malaria prevention tablets'),
('Insect repellent sprays containing DEET can be used on skin and sprays containing permethrin are safe to apply to clothing.','Insect repellant'),
('Seek immediate medical advice if you have malaria symptoms, including up to a year after you return from travelling.','Diagnosis'),
('Find out whether you are at risk of getting malaria before entering new areas','Awareness of risk')

insert into Treatment (Treat_Desc,Treat_Type)
values ('Artemisinin-based combination therapies (for example Coartem)','Medication'),
('Chloroquine phosphate.','Medication'),
('Combination of atovaquone and proguanil (Malarone)','Medication'),
('Quinine sulfate (Qualaquin) with doxycycline (Vibramycin, Monodox, others)','Medication'),
('Mefloquine','Medication'),
('Primaquine phosphate','Medication')

insert into Risk_Period (RiskP_Type, RiskP_Desc)
values ('Low risk period','Between May and September'),
('Moderate risk period','Between September and May')

insert into RP_Des (Des_ID,RiskP_ID)
values(1,1), (1,2)

insert into Location (Loc_Name,Loc_Severity)
values('Angola','Whole country, thoughout the year. High severity'),
('Botswana','From November to May/June in the northern parts of the country. Moderate severity'),
('Malawi','Throughout the year in the whole country. High severity'),
('Mozambique','Throughout the year in the whole country. High severity'),
('Namibia','From November to June in some regions. Low severity'),
('Swaziland','Throughout the year in all low veld areas. Moderate severity'),
('Zambia','Throughout the year in the whole country. High severity'),
('Zimbabwe', 'From November through June in areas below 1200 m and throughout the year in the Zambezi valley.')

insert into Loc_Des (Loc_ID,Des_ID)
values (1,1),
(2,1),
(3,1),
(4,1),
(5,1),
(6,1),
(7,1),
(8,1)

insert into Medical_Proffesionals (MP_Name,MP_Surname,MP_Email,MP_Password)
values('Charlotte', 'Robertze', 'clRob@gmail.com', '345'),
('Hirsch', 'Jocum', 'hirsch@saxby.co.za', '234')
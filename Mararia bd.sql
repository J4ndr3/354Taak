Use [MalariaDB]
GO

IF EXISTS (SELECT name from sys.databases WHERE name = N'MalariaDB')
Drop Database MalariaDB
go

create database MalariaDB
go

CREATE TABLE Location (
    Loc_ID "int" IDENTITY (1,1) NOT NULL primary key,
    Loc_Sererity nvarchar (10) NOT NULL,
    Loc_Name nvarchar (25) NOT NULL
);

CREATE TABLE Desease (
    Des_ID "int" IDENTITY (1,1) NOT NULL primary key,
    Des_Desc text NOT NULL,
    Des_Name nvarchar (20) NOT NULL
);

CREATE TABLE Prevention (
    Prev_ID "int" IDENTITY (1,1) NOT NULL primary key,
    Prev_Desc text NOT NULL,
    Prev_Type nvarchar (20) NOT NULL,
	Des_ID int foreign key references Desease(Des_ID)
	);

CREATE TABLE Treatment (
    Treat_ID "int" IDENTITY (1,1) NOT NULL primary key,
    Treat_Desc text NOT NULL,
    Treat_Type nvarchar (20) NOT NULL,
	Des_ID int foreign key references Desease(Des_ID)
	);

CREATE TABLE Causes (
    Cause_ID "int" IDENTITY (1,1) NOT NULL primary key,
    Cause_Desc text  NOT NULL,
	Des_ID int foreign key references Desease(Des_ID)
	);

CREATE TABLE Risk_Period (
    RiskP_ID "int" IDENTITY (1,1) NOT NULL primary key,
    RiskP_Desc text NOT NULL,
    RiskP_Type nvarchar (20) NOT NULL
	);

CREATE TABLE Symptoms (
    Symp_ID "int" IDENTITY (1,1) NOT NULL primary key,
    Symp_Desc text NOT NULL,
    Symp_Type nvarchar (20) NOT NULL,
	Symp_Duration nvarchar (20) Not null
	);

CREATE TABLE Medical_Proffesionals (
    MP_ID "int" IDENTITY (1,1) NOT NULL primary key,
    MP_Name nvarchar (300) NOT NULL,
    MP_Surname nvarchar (20) NOT NULL,
	MP_Email nvarchar (20) Not null,
	MP_Password numeric (20) Not null

	);

CREATE TABLE Notifications (
    Note_ID "int" IDENTITY (1,1) NOT NULL primary key,
    Note_Desc text NOT NULL,
	Note_Date nvarchar (20) Not null,
	MP_ID int foreign key references Medical_Proffesionals(MP_ID)
	);

CREATE TABLE Loc_Des (
    Des_ID int foreign key references Desease(Des_ID),
	Loc_ID int foreign key references Location(Loc_ID)
	);

CREATE TABLE Symp_Des (
    Des_ID int foreign key references Desease(Des_ID),
	Symp_ID int foreign key references Symptoms(Symp_ID)
	);

CREATE TABLE RP_Des (
    Des_ID int foreign key references Desease(Des_ID),
	RiskP_ID int foreign key references Risk_Period(RiskP_ID)
	);

	go

	
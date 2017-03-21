CREATE TABLE Appointments (
id SERIAL ,
Stylist_id INTEGER ,
Customer_id INTEGER ,
Style_id INTEGER ,
Timeslot_id INTEGER,
Active BOOLEAN NOT NULL DEFAULT True,
PRIMARY KEY (id)
);

CREATE TABLE Styles (
id SERIAL ,
Style_name TEXT ,
Style_image TEXT ,
Style_duration INTEGER ,
PRIMARY KEY (id)
);

CREATE TABLE Stylist (
id SERIAL ,
Name TEXT NOT NULL DEFAULT ,
Stylist_Bio TEXT ,
Available BOOLEAN NOT NULL DEFAULT True ,
PRIMARY KEY (id)
);

CREATE TABLE Customers (
id SERIAL  ,
Customer_Name TEXT ,
Paided BOOLEAN NOT NULL ,
PRIMARY KEY (id)
);
CREATE TABLE Timeslot (
id SERIAL  ,
slottime INTEGER NOT NULL ,
PRIMARY KEY (id)
);

ALTER TABLE Appointments ADD FOREIGN KEY (Stylist_id) REFERENCES Stylist (id);
ALTER TABLE Appointments ADD FOREIGN KEY (Customer_id) REFERENCES Customers (id);
ALTER TABLE Appointments ADD FOREIGN KEY (Style_id) REFERENCES Styles (id);
ALTER TABLE Appointments ADD FOREIGN KEY (Timeslot_id) REFERENCES Timeslot (id);
ALTER TABLE Styles ADD price TEXT NOT NULL;

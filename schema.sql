CREATE TABLE Appointments (
id SERIAL PRIMARY KEY,
Stylist_id INTEGER ,
Customer_id INTEGER ,
Style_id INTEGER ,
Timeslot_id INTEGER,
Active BOOLEAN NOT NULL DEFAULT True,
PRIMARY KEY (id)
);

CREATE TABLE Styles (
id SERIAL PRIMARY KEY ,
Style_name TEXT ,
Style_image TEXT ,
Style_duration INTEGER ,
PRIMARY KEY (id)
);

CREATE TABLE Stylist (
id SERIAL PRIMARY KEY ,
Name TEXT NOT NULL DEFAULT ,
Stylist_Bio TEXT ,
Available BOOLEAN NOT NULL DEFAULT True ,
PRIMARY KEY (id)
);

CREATE TABLE Customers (
id SERIAL PRIMARY KEY ,
Customer_Name TEXT ,
Paided BOOLEAN NOT NULL ,
PRIMARY KEY (id)
);
CREATE TABLE Timeslot (
id SERIAL PRIMARY KEY,
slottime INTEGER NOT NULL ,
PRIMARY KEY (id)
);

ALTER TABLE Appointments ADD FOREIGN KEY (Stylist_id) REFERENCES Stylist (id);
ALTER TABLE Appointments ADD FOREIGN KEY (Customer_id) REFERENCES Customers (id);
ALTER TABLE Appointments ADD FOREIGN KEY (Style_id) REFERENCES Styles (id);
ALTER TABLE Appointments ADD FOREIGN KEY (Timeslot_id) REFERENCES Timeslot (id);
ALTER TABLE Styles ADD price TEXT NOT NULL;

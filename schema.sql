CREATE TABLE appointments (
id SERIAL PRIMARY KEY,
stylist_id INTEGER ,
customer_id INTEGER ,
style_id INTEGER ,
timeslot_id INTEGER,
active BOOLEAN NOT NULL DEFAULT true
);

CREATE TABLE styles (
id SERIAL PRIMARY KEY ,
style_name TEXT NOT NULL,
style_image TEXT ,
style_duration INTEGER,
price TEXT NOT NULL
);

CREATE TABLE stylist (
id SERIAL PRIMARY KEY ,
name TEXT NOT NULL,
stylist_bio TEXT ,
available BOOLEAN NOT NULL DEFAULT true
);

CREATE TABLE customers (
id SERIAL PRIMARY KEY ,
customer_Name TEXT ,
paided BOOLEAN NOT NULL
);
CREATE TABLE timeslot (
id SERIAL PRIMARY KEY,
slottime INTEGER NOT NULL
);

ALTER TABLE appointments ADD FOREIGN KEY (stylist_id) REFERENCES stylist (id);
ALTER TABLE appointments ADD FOREIGN KEY (customer_id) REFERENCES customers (id);
ALTER TABLE appointments ADD FOREIGN KEY (style_id) REFERENCES styles (id);
ALTER TABLE appointments ADD FOREIGN KEY (timeslot_id) REFERENCES timeslot (id);

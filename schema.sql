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
style_duration INT,
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
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(140),
  password VARCHAR(300),
  role VARCHAR(3000)
);


ALTER TABLE appointments ADD FOREIGN KEY (stylist_id) REFERENCES stylist (id);
ALTER TABLE appointments ADD FOREIGN KEY (customer_id) REFERENCES customers (id);
ALTER TABLE appointments ADD FOREIGN KEY (style_id) REFERENCES styles (id);
ALTER TABLE appointments ADD FOREIGN KEY (timeslot_id) REFERENCES timeslot (id);
/*this is for the stylist*/
INSERT INTO stylist (name, stylist_bio, available )
VALUES ('Dante', 'from the mean streets of minisotta', true);
INSERT INTO stylist (name, stylist_bio, available )
VALUES ('Trevon', 'trick la da kids', true);
INSERT INTO stylist (name, stylist_bio, available )
VALUES ('Jamisha', 'she will cut yo hair and cut you too', true);
INSERT INTO stylist (name, stylist_bio, available )
VALUES ('Jose', 'hails east los, love el jote man ', true);
INSERT INTO stylist (name, stylist_bio, available )
VALUES ('De qaun', 'Mr.steal yo boo, girl or boy', true);
INSERT INTO stylist (name, stylist_bio, available )
VALUES ('John', 'loves paps blue ribbon and clippers ', true);

/*this is for the styles*/
INSERT INTO styles (style_name, style_image, style_duration, price )
VALUES ('bald fade', 'https://s-media-cache-ak0.pinimg.com/564x/71/cf/bd/71cfbdee888f834758479605b30dfe50.jpg', 30,'$25.00');
INSERT INTO styles (style_name, style_image, style_duration, price)
VALUES ('high top', 'https://s-media-cache-ak0.pinimg.com/564x/71/cf/bd/71cfbdee888f834758479605b30dfe50.jpg', 30,'$25.00');
INSERT INTO styles (style_name, style_image, style_duration, price)
VALUES ('ceaser', 'https://s-media-cache-ak0.pinimg.com/564x/71/cf/bd/71cfbdee888f834758479605b30dfe50.jpg', 30,'$25.00');
INSERT INTO styles (style_name, style_image, style_duration, price )
VALUES ('low fade', 'https://s-media-cache-ak0.pinimg.com/564x/71/cf/bd/71cfbdee888f834758479605b30dfe50.jpg', 30,'$25.00');
INSERT INTO styles (style_name, style_image, style_duration, price )
VALUES ('designs', 'https://s-media-cache-ak0.pinimg.com/564x/71/cf/bd/71cfbdee888f834758479605b30dfe50.jpg', 30,'$45.00');
INSERT INTO styles (style_name, style_image, style_duration, price)
VALUES ('lineup', 'https://s-media-cache-ak0.pinimg.com/564x/71/cf/bd/71cfbdee888f834758479605b30dfe50.jpg', 15,'$15.00');

/*this is for the timeslot*/
INSERT INTO timeslot (slottime)
VALUES (11);
INSERT INTO timeslot (slottime )
VALUES (1130);
INSERT INTO timeslot (slottime )
VALUES (12);
INSERT INTO timeslot (slottime )
VALUES (1230);
INSERT INTO timeslot (slottime)
VALUES (1);
INSERT INTO timeslot (slottime )
VALUES (130);
INSERT INTO timeslot (slottime)
VALUES (2);
INSERT INTO timeslot (slottime )
VALUES (230);
INSERT INTO timeslot (slottime )
VALUES (3);
INSERT INTO timeslot (slottime )
VALUES (330);
INSERT INTO timeslot (slottime)
VALUES (4);
INSERT INTO timeslot (slottime )
VALUES (430);
INSERT INTO timeslot (slottime)
VALUES (5);
INSERT INTO timeslot (slottime )
VALUES (530);
INSERT INTO timeslot (slottime )
VALUES (6);
INSERT INTO timeslot (slottime )
VALUES (630);
/*Customers*/
INSERT INTO customers (customer_name,paided)
VALUES ('Jeff',false);
INSERT INTO customers (customer_name,paided )
VALUES ('Leah Ann',false);

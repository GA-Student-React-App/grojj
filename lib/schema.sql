DROP TABLE IF EXISTS grojjItems;
DROP TABLE IF EXISTS grojjUsers;
DROP TABLE IF EXISTS grojjAddresses;

BEGIN;

<<<<<<< HEAD
 CREATE TABLE grojjItems(
=======
CREATE TABLE grojjItems(
>>>>>>> 1c4c87c8709cb13a39bb5f26302e8d8f38373279
  item_id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  price VARCHAR NOT NULL,
  condition VARCHAR NOT NULL,
<<<<<<< HEAD
=======
  description VARCHAR,
>>>>>>> 1c4c87c8709cb13a39bb5f26302e8d8f38373279
  likes INT NOT NULL DEFAULT 0,
  url TEXT,
  sellerid TEXT NOT NULL
);

CREATE TABLE grojjUsers(
  user_id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL,
  password VARCHAR NOT NULL
<<<<<<< HEAD
);

CREATE TABLE grojjUsers(
=======

CREATE TABLE grojjAddresses(
>>>>>>> 1c4c87c8709cb13a39bb5f26302e8d8f38373279
  id SERIAL PRIMARY KEY,
  street VARCHAR NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL DEFAULT 'NY',
  zip VARCHAR NOT NULL,
  Latitude VARCHAR NOT NULL,
  longitude VARCHAR NOT NULL,
  sellerUname VARCHAR NOT NULL,
  sellerid TEXT NOT NULL
);

COMMIT;

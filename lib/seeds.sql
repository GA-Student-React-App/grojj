BEGIN;

<<<<<<< HEAD
=======
INSERT INTO grojjItems(item_id, name, price, condition, likes ,url, sellerid) VALUES

(1, 'Red Vintage Armchair', '$', 'Barely Used', 0, '', 1),
(2, 'I Love Lucy Mug', '$$', 'Used', 0, '',1 ),
(3, 'My walkman from 1996', '$', 'Used', 0, '', 1),
(4, 'Motorola Razr', '$', 'Used', 0, '', 2),
(5, 'John Deere hat', '$$', 'New', 0, '', 2),
(6, 'Ball and 10 jacks', '$', 'Used', 0, '', 2),
(7, 'Fig Newtons', '$', 'New', 0, '', 3),
(8, 'Bugs Bunny Looney Tunz jersey', '$$$', 'New', 0, '', 3),
(9, 'Hunger Games book trilogy', '$', 'Barely Used', 0, '', 4),
(10, 'Game of Risk', '$$', 'Used', 0, '', 4);
>>>>>>> 1c4c87c8709cb13a39bb5f26302e8d8f38373279

INSERT INTO grojjUsers (user_id, username, password) VALUES

(1, 'test', 'test');

<<<<<<< HEAD
=======
INSERT INTO grojjusers(sellerid, sellerUname) VALUES
(1, 'MeetDrew'),
(2, 'Dolores45'),
(3, 'IrwinForPresident2020'),
(4, 'JoeyPNYC'),
(5, 'Rach8'),
(6, 'flexboxmaster'),
(7, 'TreeHugger01'),
(8, 'LoveLife17'),
(9, 'Sabz'),
(10, 'Kate08');

INSERT INTO grojjaddresses(id, street, city, state, zip, latitude, longitude, sellerUname, sellerid) VALUES

(1, '180 Rivington St', 'New York', 'NY', '10002', '40.718789°', '-73.984037°', 'Dolores45', 2),
(2, '420 Hudson St', 'New York', 'NY', '10014', '40.730321°', '-74.006565°', 'IrwinForPresident2020', 3),
(3, '124 E 19th St', 'New York', 'NY', '10003', '40.737042°', '-73.98653°', 'JoeyPNYC', 4),
(4, '216-218 11th Ave', 'New York', 'NY', '10001', '40.750108°', '-74.00614°', 'Rach8', 5),
(5, '148 E 79th St', 'New York', 'NY', '10075', '40.774811°', '-73.958785°', 'flexboxmaster', 6),
(6, '233 W 109th St', 'New York', 'NY', '10025', '40.803194°', '-73.965657°', 'TreeHugger01', 7),
(7, '346 W 118th St', 'New York', 'NY', '10026', '40.806317°', '-73.956094°', 'LoveLife17', 8),
(8, '85 Livingston St', 'Brooklyn', 'NY', '11201', '40.691588°', '-73.990549°', 'Sabz', 9),
(9, '8666 23rd Ave', 'Brooklyn', 'NY', '11214', '40.59941°', '-73.993082°', 'Kate08', 10),
(10, '243 W 54th St', 'New York', 'NY', '10019', '40.764522°', '-73.983276°', 'MeetDrew', 1);
>>>>>>> 1c4c87c8709cb13a39bb5f26302e8d8f38373279

COMMIT;

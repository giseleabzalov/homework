-- 2. Create a table of 3 of your favorite television shows, including the name of the show, favorite actor/actress, where it plays (netflix, cable, etc.), and the genre.
-- - Run a query to print all of the show names.
-- 3. Create a table of your favorite actor/actress from each tv show chosen. Include his or her first name, last name, tv show, and name of character played.
-- -Run a query to print the character names.

CREATE TABLE shows (
    Show_ID INT Primary Key not null auto_increment,
    show_name VARCHAR (50),
    actor_first_name VARCHAR (50),
    actor_last_name VARCHAR (50),
    character_played VARCHAR (50),
    where_plays VARCHAR (20),
    show_genre VARCHAR (30)
);

CREATE TABLE actor (
    ID INT Primary Key not null auto_increment,
    show_name VARCHAR (50),
    actor_first_name VARCHAR (50),
    actor_last_name VARCHAR (50),
    character_played VARCHAR (50)
);
INSERT INTO actor values ("1", "Breaking Bad", "Bryan", "Cranston", "Walter White");

INSERT INTO actor values ("2", "Game of Thrones", "Maisie", "Williams", "Arya Stark");

INSERT INTO actor value ("3", "Sex and the City", "Kim", "Cattrall", "Samantha Jones");

SELECT character_played FROM actor;

CREATE TABLE favdishes (
    ID INT Primary Key not null auto_increment,
    dishes VARCHAR (30),
    cuisine VARCHAR (30)
);

INSERT INTO favdishes values ("1", "Grilled Octopus", "Mediterranean");

INSERT INTO favdishes values ("2", "Borsh", "Russian");

INSERT INTO favdishes values ("3", "Caprese salad", "Italian")
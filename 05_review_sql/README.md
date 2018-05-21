# Intro to SQL

Let's take a gander at the `chinook.db` inside of `sqlite3` or SQLite Browser

## Challenges

1. Write the SQL to return all of the rows in the artists table?

```SQL
SELECT * FROM artists;
```

2. Write the SQL to select the artist with the name "Black Sabbath"

```SQL
SELECT * FROM artists WHERE name = "Black Sabbath";
SELECT * FROM artists WHERE name LIKE "aerosmith";
```

3. Write the SQL to create a table named 'fans' with an autoincrementing ID that's a primary key and a name field of type text

```sql
CREATE TABLE fans (id INTEGER PRIMARY KEY, name TEXT);
```

4. Write the SQL to alter the fans table to have a artist_id column type integer?

```sql
ALTER TABLE fans ADD COLUMN artist_id INTEGER;
```

5. Write the SQL to add yourself as a fan of the Black Eyed Peas? ArtistId **169**

```sql
INSERT INTO fans (name, artist_id) VALUES ("Prince", 169);
```

6. How would you update your name in the fans table to be your new name?

 ```sql
UPDATE fans SET name = "Matt" WHERE artist_id = 252;
 ```

7. Write the SQL to return fans that are not fans of the black eyed peas.

```sql
SELECT * FROM fans WHERE artist_id != 169;
```

8. Write the SQL to display an artists name next to their album title

```sql
SELECT artists.name, albums.title FROM artists JOIN albums ON artists.ArtistId = albums.ArtistId;
```

9. Write the SQL to display artist name, album name and number of tracks on that album

```sql
-- artists, albums, tracks
SELECT artists.Name, albums.Title, COUNT(tracks.name) as track_name FROM artists
JOIN albums ON artists.ArtistId = albums.ArtistId
JOIN tracks ON albums.AlbumId = tracks.AlbumId
GROUP BY (albums.AlbumId);
```

10. Write the SQL to return the name of all of the artists in the 'Pop' Genre

```sql

```

## BONUS (very hard)

11. I want to return the names of the artists and their number of rock tracks
    who play Rock music
    and have move than 30 tracks
    in order of the number of rock tracks that they have
    from greatest to least

```sql

```

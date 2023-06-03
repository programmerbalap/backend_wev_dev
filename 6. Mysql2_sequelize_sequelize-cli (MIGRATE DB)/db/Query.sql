SELECT * FROM SequelizeMeta;
DELETE FROM company;
SELECT * FROM company;

SELECT * FROM users;
DELETE FROM users;

SELECT * FROM company_kind;
DELETE FROM company_kind;

SELECT c.id AS ID, c.nama AS PT, c.nama_pemilik AS PEMILIK, c.alamat AS ALAMAT, ck.name AS JENIS  FROM company c
INNER JOIN company_kind ck ON ck.id = c.jenis; 
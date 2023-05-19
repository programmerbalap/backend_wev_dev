SELECT * FROM SequelizeMeta;
DELETE FROM company;
SELECT * FROM company;

SELECT * FROM users;
DELETE FROM users;

SELECT * FROM company_kinds;
DELETE FROM company_kinds;

SELECT c.id AS ID, c.nama AS NAMA, c.nama_pemilik AS NAMA_PEMILIK, c.alamat AS ALAMAT, ck.nama AS JENIS  FROM company c
INNER JOIN company_kinds ck ON ck.id = c.jenis; 
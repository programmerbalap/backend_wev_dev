SELECT version();

CREATE TABLE `rule` (
    `id_rule` INT AUTO_INCREMENT,
    `name` VARCHAR (20) NOT NULL DEFAULT '',
    PRIMARY KEY (`id_rule`)
)
DESC rule;
DROP TABLE rule;
INSERT INTO rule (name)  VALUES ('supervisor');
SELECT * FROM rule;

CREATE TABLE `users` (
    `id_users` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR (50) NOT NULL DEFAULT '',
    `email` VARCHAR (50) NOT NULL DEFAULT '',
    `password` VARCHAR (50) NOT NULL DEFAULT '',
    `id_rule` INT (10) NOT NULL,
    PRIMARY KEY (`id_users`),
    CONSTRAINT `rule` FOREIGN KEY (`id_rule`) REFERENCES `sql12617748`.`rule` ( `id_rule`) ON UPDATE CASCADE ON DELETE CASCADE
)
DESC users;
DROP TABLE users;
INSERT INTO  users (name, email, password, id_rule) VALUES ('sandi', 'sandi12tiga45@gmail.com', '123', 2);
SELECT u.name AS NAMA, u.email AS EMAIL, u.password AS PASS, rule.name AS RULE
FROM users u 
INNER JOIN rule ON u.id_rule = rule.id_rule;
SELECT u.name AS NAMA, u.email AS EMAIL, u.password AS PASS, rule.name AS RULE
FROM users u 
INNER JOIN rule ON u.id_rule = rule.id_rule;
-- 
SELECT u.name AS NAMA, u.email AS EMAIL, u.password AS PASS, rule.name AS RULE
FROM users u 
INNER JOIN rule ON u.id_rule = rule.id_rule;

CREATE TABLE `jabatan` (
    `id_jabatan` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR (50) NOT NULL DEFAULT '',
    PRIMARY KEY (`id_jabatan`)
)
DESC jabatan;
DROP TABLE jabatan;
INSERT INTO jabatan (name) VALUES ('Kepala Gudang');
SELECT * FROM jabatan;


-- CREATE TABLE
CREATE TABLE `karyawan` (
    `id_karyawan` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR (50) NOT NULL DEFAULT '',
    `id_jabatan` INT NOT NULL,
    PRIMARY KEY (`id_karyawan`),
    CONSTRAINT `jabatan` FOREIGN KEY (`id_jabatan`) REFERENCES `jabatan` (`id_jabatan`) ON UPDATE CASCADE ON DELETE CASCADE
)
DESC karyawan;
-- DROP TABLE
DROP TABLE karyawan;
-- INSERT
INSERT INTO karyawan (name, id_jabatan) VALUES ('adinda', 1);
-- INNER JOIN
SELECT k.id_karyawan AS ID, k.name AS NAMA_KARYAWAN, j.name AS JABATAN
FROM karyawan k
INNER JOIN jabatan j ON k.id_jabatan = j.id_jabatan;
-- LEFT JOIN
SELECT k.id_karyawan AS ID, k.name AS NAMA_KARYAWAN, j.name AS JABATAN
FROM karyawan k
LEFT JOIN jabatan j ON k.id_jabatan = j.id_jabatan;
-- RIGHT JOIN
SELECT k.id_karyawan AS ID, k.name AS NAMA_KARYAWAN, j.name AS JABATAN
FROM karyawan k
RIGHT JOIN jabatan j ON k.id_jabatan = j.id_jabatan;


-- CREATE TABLE
CREATE TABLE `absensi` (
    `id_absensi` INT NOT NULL AUTO_INCREMENT,
    `id_karyawan` INT NOT NULL,
    `tanggal` DATE NOT NULL,
    PRIMARY KEY (`id_absensi`),
    CONSTRAINT `karyawan` FOREIGN KEY (`id_karyawan`) REFERENCES `karyawan` (`id_karyawan`) ON UPDATE CASCADE ON DELETE CASCADE
)
DESC absensi;
-- DROP TABLE
DROP TABLE absensi;
-- INSERT
INSERT INTO absensi (id_karyawan, tanggal) VALUES (1, 00-00-000);
-- INNER JOIN
SELECT a.id_absensi AS ID, k.name AS NAMA_KARYAWAN, j.name AS JABATAN, a.tanggal
FROM absensi a
INNER JOIN karyawan k ON k.id_karyawan = a.id_karyawan
INNER JOIN jabatan j ON j.id_jabatan = k.id_jabatan
ORDER BY id_absensi;
-- LEFT JOIN
SELECT a.id_absensi AS ID, k.name AS NAMA_KARYAWAN, j.name AS JABATAN, a.tanggal
FROM absensi a
LEFT JOIN karyawan k ON k.id_karyawan = a.id_karyawan
LEFT JOIN jabatan j ON j.id_jabatan = k.id_jabatan
ORDER BY id_absensi;
-- RIGHT JOIN
SELECT a.id_absensi AS ID, k.name AS NAMA_KARYAWAN, j.name AS JABATAN, a.tanggal
FROM absensi a
RIGHT JOIN karyawan k ON k.id_karyawan = a.id_karyawan
RIGHT JOIN jabatan j ON j.id_jabatan = k.id_jabatan
ORDER BY id_absensi;


-- CREATE TABLE
CREATE TABLE `detail_absensi` (
    `id_absensi` INT NOT NULL,
    `masuk` TIME NOT NULL,
    `keluar` TIME NOT NULL,
    CONSTRAINT `absensi` FOREIGN KEY (`id_absensi`) REFERENCES `absensi` (`id_absensi`) ON UPDATE CASCADE ON DELETE CASCADE
)
DESC detail_absensi;
-- DROP TABLE
DROP TABLE detail_absensi;
-- INSERT
INSERT INTO detail_absensi (id_absensi, masuk, keluar) VALUES (1, 07.12, 17.00);
-- INNER JOIN
SELECT da.id_absensi AS ID_ABSENSI, da.masuk AS JAM_MASUK, da.keluar AS JAM_KELUAR, a.tanggal AS TANGGAL, k.name AS NAMA_KARYAWAN, j.name AS JABATAN
FROM detail_absensi da
INNER JOIN absensi a ON a.id_absensi = da.id_absensi
INNER JOIN karyawan k ON k.id_karyawan = a.id_karyawan
INNER JOIN jabatan j ON j.id_jabatan = k.id_jabatan;
-- LEFT JOIN
SELECT da.id_absensi AS ID_ABSENSI, da.masuk AS JAM_MASUK, da.keluar AS JAM_KELUAR, a.tanggal AS TANGGAL, k.name AS NAMA_KARYAWAN, j.name AS JABATAN
FROM detail_absensi da
LEFT JOIN absensi a ON a.id_absensi = da.id_absensi
LEFT JOIN karyawan k ON k.id_karyawan = a.id_karyawan
LEFT JOIN jabatan j ON j.id_jabatan = k.id_jabatan;
-- RIGHT JOIN
SELECT da.id_absensi AS ID_ABSENSI, da.masuk AS JAM_MASUK, da.keluar AS JAM_KELUAR, a.tanggal AS TANGGAL, k.name AS NAMA_KARYAWAN, j.name AS JABATAN
FROM detail_absensi da
RIGHT JOIN absensi a ON a.id_absensi = da.id_absensi
RIGHT JOIN karyawan k ON k.id_karyawan = a.id_karyawan
RIGHT JOIN jabatan j ON j.id_jabatan = k.id_jabatan;


--  CREATE TABLE
CREATE TABLE `gaji` (
    `id_gaji` INT NOT NULL AUTO_INCREMENT,
    `id_karyawan` INT NOT NULL,
    -- kak untuk membuat colom bulan saja gimana kak?
    `bulan` DATE NOT NULL,
    `tahun` DATE NOT NULL,
    `jumlah_gaji` INT NOT NULL,
    PRIMARY KEY (`id_gaji`),
    CONSTRAINT `karyawan_gaji` FOREIGN KEY (`id_karyawan`) REFERENCES `karyawan` (`id_karyawan`) ON UPDATE CASCADE ON DELETE CASCADE
)
DESC gaji;
-- DROP TABLE
DROP TABLE gaji;
-- SELECT
INSERT INTO gaji (id_karyawan, bulan, tahun, jumlah_gaji) VALUES (5, 05, 00, 2500000);
-- INNER JOIN
SELECT g.id_gaji AS ID_GAJI, k.name AS NAMA_KARYAWAN, j.name AS JABATAN, g.bulan AS BULAN, g.tahun AS TAHUN, g.jumlah_gaji AS GAJI
FROM gaji g
INNER JOIN karyawan k ON k.id_karyawan = g.id_karyawan
INNER JOIN jabatan j ON k.id_jabatan = j.id_jabatan;
-- LEFT JOIN
SELECT g.id_gaji AS ID_GAJI, k.name AS NAMA_KARYAWAN, j.name AS JABATAN, g.bulan AS BULAN, g.tahun AS TAHUN, g.jumlah_gaji AS GAJI
FROM gaji g
LEFT JOIN karyawan k ON k.id_karyawan = g.id_karyawan
LEFT JOIN jabatan j ON k.id_jabatan = j.id_jabatan;
-- RIGHT JOIN
SELECT g.id_gaji AS ID_GAJI, k.name AS NAMA_KARYAWAN, j.name AS JABATAN, g.bulan AS BULAN, g.tahun AS TAHUN, g.jumlah_gaji AS GAJI
FROM gaji g
RIGHT JOIN karyawan k ON k.id_karyawan = g.id_karyawan
RIGHT JOIN jabatan j ON k.id_jabatan = j.id_jabatan;
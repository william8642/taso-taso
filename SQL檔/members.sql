-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2020 年 11 月 06 日 08:16
-- 伺服器版本： 10.4.14-MariaDB
-- PHP 版本： 7.3.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `ruby`
--

-- --------------------------------------------------------

--
-- 資料表結構 `members`
--

CREATE TABLE `members` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `pwd` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `gender` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `birth` date NOT NULL,
  `country` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `level` int(11) NOT NULL DEFAULT 1,
  `avatar` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 傾印資料表的資料 `members`
--

INSERT INTO `members` (`id`, `name`, `email`, `pwd`, `gender`, `birth`, `country`, `address`, `level`, `avatar`) VALUES
(1, 'Bunny', 'bunny@yahoo.com.tw', '123', '3', '2020-09-30', 'HK', '', 1, ''),
(49, 'Peggy', 'peggy@yahoo.com.tw', '123', '2', '2020-10-08', 'JP', '', 2, ''),
(50, 'Amber', 'amber@gmail.com', '111', '2', '2020-11-20', 'JP', '1', 1, ''),
(52, 'John', 'john@gmail.com', '111', '3', '2020-11-20', 'JP', 'address', 1, ''),
(53, 'Alex', 'alex@gmail.com', '111', '1', '2020-11-05', 'HK', 'address', 1, ''),
(54, 'Jade', 'jade@gmail.com', '111', '1', '2020-11-11', 'HK', 'address', 1, ''),
(55, 'Betty', 'betty@gmail.com', '111', '2', '2020-11-07', 'TW', 'address', 1, ''),
(56, 'qqq', 'aaa@.clpw', '111', '1', '2020-11-04', 'US', 'address', 1, ''),
(57, 'Jess', 'jess@gmail.com', '111', '2', '2020-11-28', 'HK', 'address', 1, ''),
(58, 'Annabelle', 'annabelle@gmail.com', '111', '2', '2020-11-11', 'HK', 'address', 1, ''),
(59, 'Adela', 'adela@gmail.com', '111', '2', '2020-11-23', 'TW', 'address', 1, ''),
(60, 'Adora', 'adora@gmail.com', '111', '2', '2020-11-08', 'HK', 'address', 1, ''),
(61, 'Agatha', 'agatha@gmail.com', '111', '2', '2020-11-18', 'HK', 'address', 1, ''),
(62, 'Alani', 'alani@gmail.com', '111', '2', '2020-11-11', 'US', 'address', 1, ''),
(63, 'Astrid', 'astrid@gmail.com', '111', '2', '2020-11-24', 'HK', 'address', 1, ''),
(64, 'Aurora', 'aurora', '111', '2', '2020-11-15', 'HK', 'address', 1, ''),
(65, 'Ava', 'ava@gmail.com', '111', '2', '2020-12-01', 'US', 'address', 1, ''),
(66, 'Basia', 'basia@gmail.com', '111', '2', '2020-11-27', 'HK', 'address', 1, ''),
(67, 'Belen', 'belen@gmail.com', 'qqq', '2', '2020-12-01', 'HK', 'address', 1, ''),
(68, 'Bella', 'bella@gmail.com', '111', '3', '2020-11-16', 'HK', 'address', 1, ''),
(69, 'Belinda', 'belinda', '111', '2', '2020-11-22', 'TW', 'address', 1, ''),
(70, 'Beryl', 'beryl@gmail.com', '111', '2', '2020-11-19', 'HK', 'address', 1, ''),
(71, 'Betsy', 'betsy@gmail.com', '111', '2', '2020-11-19', 'US', 'address', 1, ''),
(72, 'Amy', 'amy@gmail.com', '111', '2', '2020-11-09', 'HK', 'address', 1, '');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `members`
--
ALTER TABLE `members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

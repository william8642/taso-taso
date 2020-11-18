-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2020 年 11 月 03 日 11:30
-- 伺服器版本： 10.4.13-MariaDB
-- PHP 版本： 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `mytest0819`
--

-- --------------------------------------------------------

--
-- 資料表結構 `tsao_products`
--

CREATE TABLE `tsao_products` (
  `sid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(11) NOT NULL,
  `picture` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `tsao_products`
--

INSERT INTO `tsao_products` (`sid`, `name`, `price`, `picture`) VALUES
(1, '順其自然卸妝乳', '350', '/images/facial1.jpg'),
(2, '保濕面膜', '300', '/images/facial2.jpg'),
(3, '無負擔精華油', '600', '/images/facial3.jpg'),
(4, '輕乳液', '500', '/images/facial4.jpg'),
(5, '煥然一新晚霜', '500', '/images/facial5.jpg');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `tsao_products`
--
ALTER TABLE `tsao_products`
  ADD PRIMARY KEY (`sid`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `tsao_products`
--
ALTER TABLE `tsao_products`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

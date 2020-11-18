-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2020 年 11 月 03 日 08:17
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
-- 資料表結構 `Order_Detail`
--

CREATE TABLE `Order_Detail` (
  `OrderDetail_id` int(11) NOT NULL,
  `OrderDetail_code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Order_Detail_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Order_Item＿product_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Order_Detail_amount` int(11) NOT NULL,
  `Order_Detail_price` int(11) NOT NULL,
  `Order_Picture` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 傾印資料表的資料 `Order_Detail`
--

INSERT INTO `Order_Detail` (`OrderDetail_id`, `OrderDetail_code`, `Order_Detail_name`, `Order_Item＿product_id`, `Order_Detail_amount`, `Order_Detail_price`, `Order_Picture`) VALUES
(1, '20043UUHWGGI', '順其自然卸妝乳', '1', 2, 350, '/images/facial1.jpg'),
(2, '20043UUHWGGI', '保濕面膜', '2', 3, 300, '/images/facial2.jpg'),
(3, '20043UUHWGGI', '無負擔精華油', '3', 2, 600, '/images/facial3.jpg'),
(4, '20043CLDOGIQ', '輕乳液', '4', 1, 500, '/images/facial4.jpg'),
(5, '20043CLDOGIQ', '煥然一新晚霜', '5', 2, 500, '/images/facial5.jpg'),
(6, '20043CLDOGIQ', '保濕面膜', '2', 1, 300, '/images/facial2.jpg'),
(7, '20043UUHUROW', '順其自然卸妝乳', '1', 3, 350, '/images/facial1.jpg'),
(8, '20043UUHUROW', '輕乳液', '4', 1, 500, '/images/facial4.jpg'),
(9, '20043UUHUROW', '煥然一新晚霜', '5', 2, 500, '/images/facial5.jpg'),
(10, '20043CDKCFVR', '順其自然卸妝乳', '4', 1, 350, '/images/facial1.jpg'),
(11, '20043CDKCFVR', '保濕面膜', '2', 2, 300, '/images/facial2.jpg'),
(12, '20043CDKCFVR', '無負擔精華油', '3', 1, 600, '/images/facial3.jpg');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `Order_Detail`
--
ALTER TABLE `Order_Detail`
  ADD PRIMARY KEY (`OrderDetail_id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `Order_Detail`
--
ALTER TABLE `Order_Detail`
  MODIFY `OrderDetail_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

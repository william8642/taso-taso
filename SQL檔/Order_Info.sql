-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2020 年 11 月 18 日 09:19
-- 伺服器版本： 10.4.13-MariaDB
-- PHP 版本： 7.3.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `topicorder`
--

-- --------------------------------------------------------

--
-- 資料表結構 `order_info`
--

CREATE TABLE `order_info` (
  `Order_id` int(11) NOT NULL,
  `Order_State` int(11) NOT NULL,
  `Order_code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Member_id` int(11) NOT NULL,
  `Member_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Order_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Order_mobile` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Order_deliver_type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Order_deliver_store` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Order_package_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Order_address` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Order_pay` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Order_CreatedTime` datetime NOT NULL,
  `Order_Amount` int(11) NOT NULL,
  `Order_TotalPrice` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 傾印資料表的資料 `order_info`
--

INSERT INTO `order_info` (`Order_id`, `Order_State`, `Order_code`, `Member_id`, `Member_name`, `Order_name`, `Order_mobile`, `Order_deliver_type`, `Order_deliver_store`, `Order_package_id`, `Order_address`, `Order_pay`, `Order_CreatedTime`, `Order_Amount`, `Order_TotalPrice`) VALUES
(1, 4, '20043UUHWGGI', 1, 'Bunny', 'Mandy', '0933193827', 'a', '大安門市', 'SALW00291', '', 'a50', '2020-11-18 00:00:00', 6, 3000),
(2, 2, '20043CLDOGIQ', 1, 'Bunny', 'Wendy', '0983716483', 'c', '大安門市', 'SALW00402', '', 'a20', '2020-11-23 00:00:00', 4, 1800),
(4, 2, '20043UUHUROW', 1, 'Bunny', 'Max', '0948371934', 'd', '大安門市', 'SALW4819', '', 'a30', '2020-11-22 08:00:00', 6, 2500),
(5, 1, '20043UUHWGGI', 49, 'Peggy', 'Ann', '0938271849', 'a', '大安門市', 'DAFW00291', '', 'a50', '2020-11-22 06:00:00', 0, 3000),
(6, 5, '23013UUHWDIW', 49, 'Peggy', 'Yuan', '0983719372', 'c', '大安門市', 'SALW00402', '', 'a40', '2020-11-20 14:00:00', 0, 5000),
(7, 4, '20043CDKCFV', 49, 'Peggy', 'Lee', '0938192837', 'b', '大安門市', 'SALW00204', '', 'a40', '2020-11-08 00:00:00', 0, 400),
(8, 3, '20020ODHWGGI', 49, 'Peggy', 'Tina', '0938271044', 'd', '大安門市', 'SALW4819', '', 'e20', '2020-09-21 16:00:00', 0, 5000),
(9, 2, '20020ODHWGGI', 5, 'Sam', 'Allen', '0933193825', 'c', '大安門市', 'SALW4813', 'a30', 'a30', '2020-11-12 04:40:13', 4, 4300),
(10, 2, '20020ODHWGGI', 5, 'Allen', 'Allen', '0933193825', 'c', '大安門市', 'SALW4813', 'a30', 'a30', '2020-11-12 12:40:13', 4, 5200),
(11, 2, '20020ODHWGGI', 5, 'Allen', 'Allen', '0933193825', 'c', '大安門市', 'SALW4813', 'a30', 'a30', '2020-11-12 12:40:13', 4, 5200),
(12, 3, '20020ODHWGGI', 5, 'Helen', 'Allen', '0933193825', 'c', '大安門市', 'SALW4813', 'a30', 'a40', '2020-11-09 04:40:13', 4, 4000),
(13, 4, '20020ODHWGGI', 5, 'Ruby', 'Allen', '0933193825', 'c', '大安門市', 'SALW4813', 'a30', 'e10', '2020-04-12 04:40:13', 4, 5800),
(14, 5, '20020ODHWGGI', 5, 'Ruby', 'Allen', '0933193825', 'c', '大安門市', 'SALW4813', 'a30', 'e10', '2020-08-12 04:56:13', 4, 2000),
(15, 2, '20020ODHWGGI', 5, 'Dan', 'Allen', '0933193825', 'c', '大安門市', 'SALW4813', 'a30', 'a40', '2020-08-12 04:40:13', 4, 600),
(16, 3, '20020ODHWGGI', 5, 'Dan', 'Allen', '0933193825', 'c', '大安門市', 'SALW4813', 'a30', 'e20', '2020-06-06 04:40:13', 4, 6500),
(17, 4, '20020ODHWGGI', 5, 'Dan', 'Allen', '0933193825', 'c', '大安門市', 'SALW4813', 'a30', 'a50', '2020-11-11 04:40:13', 4, 1200),
(18, 1, '20020ODHWGGI', 5, 'Dan', 'Allen', '0933193825', 'c', '大安門市', 'SALW4813', 'a30', 'a10', '2020-11-12 04:40:13', 4, 700),
(19, 2, '20020ODHWGGI', 5, 'Allen', 'Allen', '0933193825', 'c', '大安門市', 'SALW4813', 'a30', 'a30', '2020-11-12 12:40:13', 4, 5200),
(20, 5, '20020ODHWGGI', 5, 'Allen', 'Allen', '0933193825', 'c', '大安門市', 'SALW4813', 'a30', 'a30', '2020-11-12 04:40:13', 4, 5200),
(21, 2, '20020ODHWGGI', 5, 'Allen', 'Allen', '0933193825', 'c', '大安門市', 'SALW4813', 'a30', 'a30', '2020-11-12 12:40:13', 4, 5200),
(22, 4, '20020ODHWGGI', 5, 'Marry', 'Allen', '0933193825', 'c', '大安門市', 'SALW4813', 'a30', 'a20', '2020-11-15 04:40:13', 4, 3600),
(23, 2, '20020ODHWGGI', 5, 'Allen', 'Allen', '0933193825', 'c', '大安門市', 'SALW4813', 'a30', 'a30', '2020-11-12 12:40:13', 4, 5200),
(24, 2, '20020ODHWGGI', 5, 'Allen', 'Allen', '0933193825', 'c', '大安門市', 'SALW4813', 'a30', 'a30', '2020-11-12 12:40:13', 4, 5200),
(25, 2, '20020ODHWGGI', 5, 'Allen', 'Allen', '0933193825', 'c', '大安門市', 'SALW4813', 'a30', 'a30', '2020-11-12 12:40:13', 4, 5200),
(26, 2, '20020ODHWGGI', 5, 'Allen', 'Allen', '0933193825', 'c', '大安門市', 'SALW4813', 'a30', 'a30', '2020-11-12 12:40:13', 4, 5200),
(27, 2, '20020ODHWGGI', 5, 'Allen', 'Allen', '0933193825', 'c', '大安門市', 'SALW4813', 'a30', 'a30', '2020-11-12 12:40:13', 4, 5200),
(28, 2, '20020ODHWGGI', 5, 'Allen', 'Allen', '0933193825', 'c', '大安門市', 'SALW4813', 'a30', 'a30', '2020-11-12 12:40:13', 4, 5200),
(29, 2, '20020ODHWGGI', 5, 'Allen', 'Allen', '0933193825', 'c', '大安門市', 'SALW4813', 'a30', 'a30', '2020-11-12 12:40:13', 4, 5200),
(30, 2, '20020ODHWGGI', 5, 'Allen', 'Allen', '0933193825', 'c', '大安門市', 'SALW4813', 'a30', 'a30', '2020-11-12 12:40:13', 4, 5200),
(31, 2, '20020ODHWGGI', 5, 'Allen', 'Allen', '0933193825', 'c', '大安門市', 'SALW4813', 'a30', 'a30', '2020-11-12 12:40:13', 4, 5200),
(32, 2, '20020ODHWGGI', 5, 'Allen', 'Allen', '0933193825', 'c', '大安門市', 'SALW4813', 'a30', 'a30', '2020-11-12 12:40:13', 4, 5200),
(33, 2, '20020ODHWGGI', 5, 'Allen', 'Allen', '0933193825', 'c', '大安門市', 'SALW4813', 'a30', 'a30', '2020-11-12 12:40:13', 4, 5200),
(34, 2, '20020ODHWGGI', 5, 'Allen', 'Allen', '0933193825', 'c', '大安門市', 'SALW4813', 'a30', 'a30', '2020-11-12 12:40:13', 4, 5200),
(35, 2, '20020ODHWGGI', 5, 'Allen', 'Allen', '0933193825', 'c', '大安門市', 'SALW4813', 'a30', 'a30', '2020-11-12 12:40:13', 4, 5200),
(36, 2, '20020ODHWGGI', 5, 'Allen', 'Allen', '0933193825', 'c', '大安門市', 'SALW4813', 'a30', 'a30', '2020-11-12 12:40:13', 4, 5200),
(37, 3, '1', 1, 'Sam', '1', '1', '1', '1', '1', '1', 'a20', '2020-11-12 04:56:37', 1, 3100),
(38, 1, '1', 1, 'William', '1', '1', '1', '1', '1', '1', 'a30', '2020-11-23 12:56:37', 1, 4000),
(39, 5, '1', 1, 'William', '1', '1', '1', '1', '1', '1', 'a30', '2020-11-12 04:56:37', 1, 2300),
(43, 3, '1', 1, 'Josh', '1', '1', '1', '1', '1', '1', 'a50', '2020-11-12 04:56:37', 1, 4500),
(44, 3, '1', 1, 'Josh', '1', '1', '1', '1', '1', '1', 'e20', '2020-11-12 04:56:37', 1, 4200),
(45, 4, '1', 1, 'Tina', '1', '1', '1', '1', '1', '1', 'a20', '2020-11-12 04:56:37', 1, 300),
(5569, 1, '20020ODHWGGI', 49, 'Peggy', 'Tina', '0938271044', 'd', '大安門市', 'SALW4819', '', 'a20', '2020-09-21 16:00:00', 0, 5000),
(5570, 1, '20020ODHWGGI', 49, 'Peggy', 'Tina', '0938271044', 'd', '大安門市', 'SALW4819', '', 'a30', '2020-09-15 06:18:00', 0, 5000);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `order_info`
--
ALTER TABLE `order_info`
  ADD PRIMARY KEY (`Order_id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `order_info`
--
ALTER TABLE `order_info`
  MODIFY `Order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5572;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

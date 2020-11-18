-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2020-11-06 12:13:10
-- 伺服器版本： 10.4.14-MariaDB
-- PHP 版本： 7.3.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `product-list`
--

-- --------------------------------------------------------

--
-- 資料表結構 `product`
--

CREATE TABLE `product` (
  `sid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `Specialoffer` int(11) NOT NULL,
  `Added time` datetime NOT NULL DEFAULT current_timestamp(),
  `detail` varchar(255) NOT NULL,
  `star` int(11) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `awesome` int(11) NOT NULL,
  `img` text NOT NULL,
  `Selling` int(11) NOT NULL,
  `category` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `product`
--

INSERT INTO `product` (`sid`, `name`, `price`, `Specialoffer`, `Added time`, `detail`, `star`, `comment`, `awesome`, `img`, `Selling`, `category`) VALUES
(1, '竹翠洗髮乳', 980, 0, '2020-10-28 22:55:05', '好棒好好用', 5, '超ㄅㄧㄤ的', 5, 'http://localhost:3001/img/pro2.png', 5, 1),
(5, '杏仁酸亮白煥膚精華15ml', 400, 0, '2020-10-28 22:57:59', '超好用的', 4, '你他媽超好用就對了拉', 5, 'http://localhost:3001/img/pro3.png', 4, 1),
(7, '修護保濕精華乳滋潤型50ml', 500, 0, '2020-10-28 22:58:29', '超好用的', 4, '你他媽超好用就對了拉', 5, 'http://localhost:3001/img/pro4.png', 0, 1),
(8, '潤潤浸保濕洗顏慕絲150ml', 500, 0, '2020-10-28 22:58:29', '超好用的', 5, '你他媽超好用就對了拉', 5, 'http://localhost:3001/img/pro5.png', 2, 1),
(9, '舒護活泉水三入組', 799, 0, '2020-10-28 22:58:29', '超好用的', 3, '你他媽超好用就對了拉', 5, 'http://localhost:3001/img/pro3.png', 3, 1),
(13, '玻尿酸保濕水凝露30ML', 998, 0, '2020-10-28 22:58:29', '超好用的', 5, '你他媽超好用就對了拉', 5, 'http://localhost:3001/img/pro7.jpg', 0, 2),
(21, 'Biore蜜妮 深層卸粧油230ml', 280, 0, '2020-11-04 20:08:53', '超級好用', 5, '超級好用', 6, 'http://localhost:3001/img/pro8.png', 30, 2),
(22, 'SwissVita薇佳微晶3D全能洗顏霜100g', 400, 0, '2020-11-04 20:08:53', '超級好用', 4, '超級好用', 6, 'http://localhost:3001/img/pro16.png', 30, 2),
(23, '珂潤潤浸保濕洗顏慕絲150ml', 400, 300, '2020-11-04 20:22:11', '超級好用', 4, '超級好用', 6, 'http://localhost:3001/img/pro11.png', 30, 3),
(24, '珂潤潤浸保濕洗顏慕絲150ml', 500, 200, '2020-11-04 20:22:11', '超級好用', 4, '超級好用', 6, 'http://localhost:3001/img/pro13.png', 30, 3),
(25, '玻尿酸保濕精華乳50ML', 500, 200, '2020-11-04 20:26:11', '超級好用', 5, '超級好用', 10, 'http://localhost:3001/img/pro14.jpg', 35, 3),
(26, '瞬效保濕B5微導 玻尿酸精華 30ML', 1200, 0, '2020-11-04 20:26:11', '超級好用', 4, '超級好用', 10, 'http://localhost:3001/img/pro15.jpg', 30, 3),
(27, '長效清爽保濕乳 236ML', 700, 0, '2020-11-04 20:29:18', '超級好用', 5, '超級好用', 10, 'http://localhost:3001/img/pro16.png', 35, 2),
(28, '澳洲QV/陽光智慧舒敏水感護手霜50g', 1200, 0, '2020-11-04 20:29:18', '超級好用', 4, '超級好用', 10, 'http://localhost:3001/img/pro17.png', 30, 2);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`sid`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product`
--
ALTER TABLE `product`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
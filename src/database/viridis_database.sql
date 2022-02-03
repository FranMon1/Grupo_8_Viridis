-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: viridis_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Callaway'),(2,'Ping'),(3,'Apex'),(4,'Maverick'),(5,'Vokey Design'),(6,'SIM'),(7,'Titleist'),(8,'Nike');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Clubs'),(2,'Shoes'),(3,'Accesories'),(4,'Bags'),(5,'Sets');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'product-1643921305604.jpeg',3),(2,'product-1643895866395.jpg',4),(3,'product-1640035816350.jpg',5),(4,'product-1640035947596.jpg',6),(5,'product-1640036112377.jpg',7),(6,'product-1640036885541.jpg',8),(7,'product-1640037191002.jpg',9),(8,'product-1640037571786.jpg',10),(9,'product-1640037645595.jpg',11),(11,'product-1643896675847.jpg',13),(12,'product-1643898914426.jpg',14),(13,'product-1643907852104.png',15),(14,'product-1643908849527.jpg',16);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (3,'Callaway Apex Utility Wood','This unique design combines the best features of higher lofted fairway woods, the best features of hybrids, and a more neutral ball flight. Using direct feedback from world-class pros like Phil Mickelson and Xander Schauffele, we’ve created a multi-purpose club that better players can rely on from the tee, fairway, or rough.',12000,20,'Black',NULL,1,1),(4,'TaylorMade SIM 2 Max Rescue Hybrid',' SIM2 MAX RESCUE HYBRID\r\n\r\n    Modern Players Shape provides added versatility\r\n    New V Steel™ Design to enhance forgiveness while maintaining low CG properties\r\n    C300 Steel Twist Face® allows for explosive ball speeds\r\n    New Asymmetric Thru-Slot Speed Pocket™ designed to maximize face flexibility for greater ball speed and forgiveness\r\n    Launch: High-Launch with Mid-Low Spin\r\n    Flight ',8000,28,' Black',NULL,1,1),(5,'Titleist U-500 Utility Iron','Launch your game with a better player profile playing the Titleist U-500 Utility Irons. The high-performance, player-inspired utility irons are designed to equip better golfers with the versatility and control they need for superior shot-making. High density tungsten weighting controls CG for a combination of advanced stability and consistent launch power. A L-face insert constructed from forged S',249,50,' Steel',NULL,7,1),(6,'PING G425 Hybrid Crossover','    Maraging steel face offers faster ball speeds and high-flying shots that land softly\r\n    Stealth, hydropearl chrome finish repels water for improved performance in all conditions\r\n    Extreme tungsten toe and hosel weights increase MOI for greater accuracy and forgiveness\r\n    Engineered for gap-filling, long-iron-type performance through distance and forgiveness\r\n    Arccos Caddie Smart Grip',367,50,'Black ',NULL,2,1),(7,'Nike Men\'s Infinity G Golf Shoes','SYNTHETIC LEATHER\r\n\r\n    Durable, smooth and made to last\r\n    Waterproof protection to help your feet stay dry\r\n\r\nCUSHIONED SOLE\r\n\r\n    Soft foam midsole and plush sockliner for comfortable steps\r\n\r\nINTEGRATED SPIKES\r\n\r\n    Integrated into the outsole for excellent grip in a variety of conditions\r\n\r\nADDITIONAL DETAILS\r\n\r\n    Reinforced eyestays\r\n    Offset: 8mm\r\n\r\n    Country of Origin : Imported',80,500,' Black - White',NULL,1,1),(8,'Callaway 2020 Chrome Soft Triple Track Golf B','Better to the core, the Callaway Chrome Soft Golf Balls combine Tour-proven performance with unparalleled feel and exceptional mis-hit forgiveness. The new Graphene-infused Dual SoftFast Core features a larger inner core and lower compression for high launch, long distance and increased forgiveness. A high-speed Mantle system pairs with the thinner, more resilient Tour Urethane cover to deliver fa',59,500,'  ',NULL,1,3),(9,'Titleist 2021 Pro V1 Double Number Personaliz','    Softer cast urethane elastomer cover increases greenside spin\r\n    Faster casting layer adds speed and lowers long game spin\r\n    Reformulated 2.0 ZG process core increases distance\r\n    Spherically-tiled 388 tetrahedral dimple design creates penetrating and consistent flight\r\n    Increased Drop-and-Stop™ short game control\r\n    Pack of 12 balls\r\n\r\n    Country of Origin : United States of Amer',600,30,' ',NULL,7,3),(10,'Callaway 2021 X-Series Stand Bag','    TOP: 14-Way\r\n    3 full-length dividers\r\n    6 storage options, including:\r\n        Velour-lined valuables pocket\r\n        Insulated drink pocket\r\n        Large apparel pocket\r\n    Lightweight and durable ripstop fabric\r\n    Includes rain hood\r\n    Weight: 4.9 lbs.\r\n\r\n    Country of Origin : Imported\r\n    Weight : ~5 lb\r\n    Brand : Callaway',180,30,' Blue - Black - Orange',NULL,1,1),(11,'PING 2020 Hoofer Lite Stand Golf Bag','Cruise from tee to green with ease with the PING® 2020 Hoofer Lite Personalized Stand Golf Bag. Easy-adjusting shoulder straps allow you to carry either as a dual or single shoulder strap for the ultimate in carrying comfort and fit. The wide leg span is designed for supreme sturdiness, while the strap channel secures to the cart without sacrificing accessibility to pockets. ',200,300,'',NULL,2,4),(13,'PING G425 Max Driver ','One of the best in the business.',9000,500,' ',NULL,1,1),(14,'PING Full Set','Ping full set 12 Clubs + PING Bag',80000,3,' ',NULL,2,5),(15,'Callaway Solana TRX','The best shoes for long journeys',600,20,' ',NULL,1,1),(16,'Titleist Blanck White Balls x 12','Titleist® Pro V1® offers total performance and features long distance, very low long game spin, penetrating flight, Drop-and-Stop™ greenside control and very soft feel.',600,297,' ',NULL,7,1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'2'),(2,'ADMIN'),(3,'ADMIN');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Admin','Admin','$2a$10$f44LrTHeH3fGR9xdqjk7SumV49YZLpQmdrOCNLmnvgEpn0Tvfm2/C','admin@admin.com','default-placeholder.png',1),(2,'DH','Digital House','$2a$10$NNRKH83w/cOt.mq11diNx.UvPFLUKJXCPEZbNdCbSQG8epLIR3AO2','dh@yahoo.com','user1643655514543.jpg',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-03 17:51:27

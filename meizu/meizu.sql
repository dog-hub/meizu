# Host: localhost  (Version: 5.5.53)
# Date: 2020-09-17 17:52:13
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "com"
#

DROP TABLE IF EXISTS `com`;
CREATE TABLE `com` (
  `goodsId` int(11) NOT NULL,
  `cname` varchar(20) DEFAULT NULL,
  `path` varchar(30) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `title` int(11) DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "com"
#

/*!40000 ALTER TABLE `com` DISABLE KEYS */;
INSERT INTO `com` VALUES (0,'魅族 17','img/1.png',3699,1),(1,'魅族 17pro','img/2.png',4299,1);
/*!40000 ALTER TABLE `com` ENABLE KEYS */;

#
# Structure for table "meizu"
#

DROP TABLE IF EXISTS `meizu`;
CREATE TABLE `meizu` (
  `id` int(11) NOT NULL,
  `username` varchar(20) DEFAULT NULL,
  `telephone` varchar(11) DEFAULT NULL,
  `pwd` varchar(20) DEFAULT NULL,
  `commodity` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "meizu"
#

/*!40000 ALTER TABLE `meizu` DISABLE KEYS */;
/*!40000 ALTER TABLE `meizu` ENABLE KEYS */;

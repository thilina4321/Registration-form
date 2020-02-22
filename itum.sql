-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 11, 2020 at 12:36 AM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `itum`
--

-- --------------------------------------------------------

--
-- Table structure for table `attempt_one_result`
--

DROP TABLE IF EXISTS `attempt_one_result`;
CREATE TABLE IF NOT EXISTS `attempt_one_result` (
  `full_name` text NOT NULL,
  `year` enum('-','2016','2017','2018','2019') NOT NULL,
  `physics` enum('','A','B','C','D') NOT NULL,
  `chemistry` enum('','A','B','C','D') NOT NULL,
  `maths` enum('','A','B','C','D') NOT NULL,
  `index_num` text NOT NULL,
  `z_score` text NOT NULL,
  `result_considered_year` enum('','2016','2017','2018','2019') NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `attempt_three_result`
--

DROP TABLE IF EXISTS `attempt_three_result`;
CREATE TABLE IF NOT EXISTS `attempt_three_result` (
  `full_name` text NOT NULL,
  `year` enum('','2016','2017','2018','2019') NOT NULL,
  `physics` enum('','A','B','C','D') NOT NULL,
  `chemistry` enum('','A','B','C','D') NOT NULL,
  `maths` enum('','A','B','C','D') NOT NULL,
  `index_num` text NOT NULL,
  `z_score` text NOT NULL,
  `result_considered_year` enum('','2016','2017','2018','2019') NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `attempt_two_result`
--

DROP TABLE IF EXISTS `attempt_two_result`;
CREATE TABLE IF NOT EXISTS `attempt_two_result` (
  `full_name` text NOT NULL,
  `year` enum('','2016','2017','2018','2019') NOT NULL,
  `physics` enum('','A','B','C','D') NOT NULL,
  `chemistry` enum('','A','B','C','D') NOT NULL,
  `maths` enum('','A','B','C','D') NOT NULL,
  `index_num` text NOT NULL,
  `z_score` text NOT NULL,
  `result_considered_year` enum('','2016','2017','2018','2019') NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `other`
--

DROP TABLE IF EXISTS `other`;
CREATE TABLE IF NOT EXISTS `other` (
  `full_name` text NOT NULL,
  `choice_1` enum('','chemical','civil','electrical','electronic','IT','mechanical','polymer','textile') NOT NULL,
  `choice_2` enum('','chemical','civil','electrical','electronic','IT','mechanical','polymer','textile') NOT NULL,
  `choice_3` enum('','chemical','civil','electrical','electronic','IT','mechanical','polymer','textile') NOT NULL,
  `choice_4` enum('','chemical','civil','electrical','electronic','IT','mechanical','polymer','textile') NOT NULL,
  `choice_5` enum('','chemical','civil','electrical','electronic','IT','mechanical','polymer','textile') NOT NULL,
  `choice_6` enum('','chemical','civil','electrical','electronic','IT','mechanical','polymer','textile') NOT NULL,
  `choice_7` enum('','chemical','civil','electrical','electronic','IT','mechanical','polymer','textile') NOT NULL,
  `choice_8` enum('','chemical','civil','electrical','electronic','IT','mechanical','polymer','textile') NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `personal_details`
--

DROP TABLE IF EXISTS `personal_details`;
CREATE TABLE IF NOT EXISTS `personal_details` (
  `full_name` text NOT NULL,
  `name_with_initial` text NOT NULL,
  `nationality` text NOT NULL,
  `gender` enum('','Male','Female') NOT NULL,
  `date_of_birth` date NOT NULL,
  `address` text NOT NULL,
  `email` text NOT NULL,
  `mobile` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `test_and_marine`
--

DROP TABLE IF EXISTS `test_and_marine`;
CREATE TABLE IF NOT EXISTS `test_and_marine` (
  `full_name` text NOT NULL,
  `test_medium` enum('','sinhala','english','tamil') NOT NULL,
  `choice_1` enum('','marine','nautical') NOT NULL,
  `choice_2` enum('','marine','nautical') NOT NULL,
  `priority_1` enum('','maritime','other') NOT NULL,
  `priority_2` enum('','maritime','other') NOT NULL,
  `reg_in_other_uni` enum('','yes','no') NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

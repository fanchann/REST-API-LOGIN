-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 15, 2022 at 06:01 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `api_login`
--

-- --------------------------------------------------------

--
-- Table structure for table `api_login`
--

CREATE TABLE `api_login` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `api_login`
--

INSERT INTO `api_login` (`id`, `username`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(4, 'fanchann', 'example@test.com', '$2b$10$kbKLgCPe4IVHcWUNsAJvm.YIug04oZFfwp7IuXsRCN4uf3/QcXkuq', '2022-09-15 00:58:20', '2022-09-15 00:58:20'),
(5, 'fanchann', 'testings222@gmail.com', '$2b$10$nlbFeS.EYUMGJ7pdft8qI.nr8iFVgm0ddGDBnUzpA.2/RGB6NF8Qi', '2022-09-15 00:59:40', '2022-09-15 00:59:40'),
(6, 'andi', 'tester@test.com', '$2b$10$NkJ8dGLtg6ue1gXe1JiyPeMlWgqEN1spVB3JiOv.b0mPxUqFryPVO', '2022-09-15 03:53:29', '2022-09-15 03:53:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `api_login`
--
ALTER TABLE `api_login`
  ADD PRIMARY KEY (`id`,`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `api_login`
--
ALTER TABLE `api_login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

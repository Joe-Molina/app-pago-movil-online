-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-11-2023 a las 01:52:51
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tiendaonline`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `billdetails`
--

CREATE TABLE `billdetails` (
  `id` int(11) NOT NULL,
  `total` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `Bill_id` int(11) DEFAULT NULL,
  `Product_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `billdetails`
--

INSERT INTO `billdetails` (`id`, `total`, `createdAt`, `updatedAt`, `Bill_id`, `Product_id`) VALUES
(6, 1, '2023-11-23 21:50:38', '2023-11-23 21:50:38', 5, 43),
(7, 1, '2023-11-23 21:50:38', '2023-11-23 21:50:38', 5, 42),
(8, 1, '2023-11-23 21:50:38', '2023-11-23 21:50:38', 5, 40),
(9, 1, '2023-11-23 21:54:07', '2023-11-23 21:54:07', 6, 40),
(10, 1, '2023-11-23 21:54:07', '2023-11-23 21:54:07', 6, 42),
(11, 1, '2023-11-23 21:54:11', '2023-11-23 21:54:11', 7, 40),
(12, 1, '2023-11-23 21:54:11', '2023-11-23 21:54:11', 7, 42),
(13, 1, '2023-11-23 21:58:48', '2023-11-23 21:58:48', 8, 40),
(14, 1, '2023-11-23 21:58:48', '2023-11-23 21:58:48', 8, 42);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bills`
--

CREATE TABLE `bills` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `Client_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `bills`
--

INSERT INTO `bills` (`id`, `createdAt`, `updatedAt`, `Client_id`) VALUES
(5, '2023-11-23 21:50:38', '2023-11-23 21:50:38', 4),
(6, '2023-11-23 21:54:07', '2023-11-23 21:54:07', 4),
(7, '2023-11-23 21:54:11', '2023-11-23 21:54:11', 4),
(8, '2023-11-23 21:58:48', '2023-11-23 21:58:48', 4),
(9, '2023-11-23 21:58:50', '2023-11-23 21:58:50', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `Direction` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `UserType` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clients`
--

INSERT INTO `clients` (`id`, `name`, `lastName`, `Direction`, `Email`, `Password`, `UserType`, `createdAt`, `updatedAt`) VALUES
(3, 'admin', 'admin', 'admin', 'admin@admin', 'admin', 2, '2023-11-01 00:22:53', '2023-11-01 00:22:53'),
(4, 'joe', 'molina', 'mata seca', 'joe@gmail.com', '1234', 1, '2023-10-31 23:26:21', '2023-10-31 23:26:21');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pms`
--

CREATE TABLE `pms` (
  `id` int(11) NOT NULL,
  `banco` varchar(255) DEFAULT NULL,
  `telefono` int(11) DEFAULT NULL,
  `cedula` int(11) DEFAULT NULL,
  `referencia` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pms`
--

INSERT INTO `pms` (`id`, `banco`, `telefono`, `cedula`, `referencia`, `createdAt`, `updatedAt`) VALUES
(1, 'banesco', 2147483647, 30045639, 3344, '2023-10-01 16:00:19', '2023-10-01 16:00:19'),
(2, 'banesco', 2147483647, 30045639, 3344, '2023-10-01 16:00:45', '2023-10-01 16:00:45'),
(3, 'banesco0', 2147483647, 30045639, 3344, '2023-10-01 16:05:06', '2023-10-01 16:05:06'),
(4, 'banesco0', 2147483647, 30045639, 3344, '2023-10-01 16:05:35', '2023-10-01 16:05:35'),
(5, 'mercantil', 2147483647, 30863702, 3366, '2023-10-04 14:52:52', '2023-10-04 14:52:52'),
(11, 'sexo', 1796968, 3029223, 234, '2023-11-20 23:45:38', '2023-11-20 23:45:38'),
(12, 'bancolombia', 123, 123, 123, '2023-11-20 23:53:45', '2023-11-20 23:53:45'),
(13, 'bancolombia', 123, 123, 123, '2023-11-23 21:10:25', '2023-11-23 21:10:25'),
(14, 'qwdq', 123, 123, 123, '2023-11-23 21:53:56', '2023-11-23 21:53:56');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `Section_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `description`, `photo`, `createdAt`, `updatedAt`, `Section_id`) VALUES
(40, 'espiral', 2, 'galleta espiral', 'photo-photo1698799961029-404858937.jpeg', '2023-11-01 00:52:41', '2023-11-01 00:52:41', NULL),
(42, 'chocolate', 1, 'asdasd', 'photo-photo1698800092121-25050558.jpeg', '2023-11-01 00:54:52', '2023-11-01 00:54:52', NULL),
(43, 'galleta de canela', 4, 'asdasd', 'photo-photo1698800234738-579626487.jpeg', '2023-11-01 00:57:14', '2023-11-01 00:57:14', NULL),
(44, 'galleta de chispas de chocolate', 2, 'asdasd', 'photo-photo1698800285376-468277560.jpeg', '2023-11-01 00:58:05', '2023-11-01 00:58:05', NULL),
(45, 'galleta oso', 6, 'qwerqwerwerwer', 'photo-photo1698800342267-177252246.jpeg', '2023-11-01 00:59:02', '2023-11-01 00:59:02', NULL),
(46, 'galletas avena', 2000, 'asdasdasdasd', 'photo-photo1698800376770-132406020.jpg', '2023-11-01 00:59:36', '2023-11-01 00:59:36', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `saleorderdetails`
--

CREATE TABLE `saleorderdetails` (
  `id` int(11) NOT NULL,
  `Cantidad` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `SaleOrder_id` int(11) DEFAULT NULL,
  `Product_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `saleorderdetails`
--

INSERT INTO `saleorderdetails` (`id`, `Cantidad`, `createdAt`, `updatedAt`, `SaleOrder_id`, `Product_id`) VALUES
(41, 1, '2023-11-20 23:53:46', '2023-11-20 23:53:46', NULL, 40),
(42, 1, '2023-11-20 23:53:46', '2023-11-20 23:53:46', NULL, 42),
(43, 1, '2023-11-20 23:53:46', '2023-11-20 23:53:46', NULL, 43),
(44, 1, '2023-11-20 23:53:46', '2023-11-20 23:53:46', NULL, 40),
(45, 1, '2023-11-20 23:53:46', '2023-11-20 23:53:46', NULL, 43),
(46, 1, '2023-11-23 21:10:25', '2023-11-23 21:10:25', NULL, 43),
(47, 1, '2023-11-23 21:10:25', '2023-11-23 21:10:25', NULL, 42),
(48, 1, '2023-11-23 21:10:25', '2023-11-23 21:10:25', NULL, 40),
(49, 1, '2023-11-23 21:53:56', '2023-11-23 21:53:56', NULL, 40),
(50, 1, '2023-11-23 21:53:56', '2023-11-23 21:53:56', NULL, 42);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `saleorders`
--

CREATE TABLE `saleorders` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `Client_id` int(11) DEFAULT NULL,
  `Pm_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sections`
--

CREATE TABLE `sections` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `sections`
--

INSERT INTO `sections` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(20, 'especiales', '2023-11-01 01:25:48', '2023-11-01 01:25:48'),
(21, 'normales', '2023-11-01 01:25:51', '2023-11-01 01:25:51');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shoppingcartdetails`
--

CREATE TABLE `shoppingcartdetails` (
  `id` int(11) NOT NULL,
  `ShoppingCart_id` int(11) DEFAULT NULL,
  `Cantidad` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `Product_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shoppingcarts`
--

CREATE TABLE `shoppingcarts` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `Client_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `shoppingcarts`
--

INSERT INTO `shoppingcarts` (`id`, `createdAt`, `updatedAt`, `Client_id`) VALUES
(3, '2023-10-31 23:26:21', '2023-10-31 23:26:21', 4);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `billdetails`
--
ALTER TABLE `billdetails`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Bill_id` (`Bill_id`),
  ADD KEY `Product_id` (`Product_id`);

--
-- Indices de la tabla `bills`
--
ALTER TABLE `bills`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Client_id` (`Client_id`);

--
-- Indices de la tabla `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pms`
--
ALTER TABLE `pms`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Section_id` (`Section_id`);

--
-- Indices de la tabla `saleorderdetails`
--
ALTER TABLE `saleorderdetails`
  ADD PRIMARY KEY (`id`),
  ADD KEY `SaleOrder_id` (`SaleOrder_id`),
  ADD KEY `Product_id` (`Product_id`);

--
-- Indices de la tabla `saleorders`
--
ALTER TABLE `saleorders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Client_id` (`Client_id`),
  ADD KEY `Pm_id` (`Pm_id`);

--
-- Indices de la tabla `sections`
--
ALTER TABLE `sections`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `shoppingcartdetails`
--
ALTER TABLE `shoppingcartdetails`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ShoppingCart_id` (`ShoppingCart_id`),
  ADD KEY `Product_id` (`Product_id`);

--
-- Indices de la tabla `shoppingcarts`
--
ALTER TABLE `shoppingcarts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Client_id` (`Client_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `billdetails`
--
ALTER TABLE `billdetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `bills`
--
ALTER TABLE `bills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `pms`
--
ALTER TABLE `pms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT de la tabla `saleorderdetails`
--
ALTER TABLE `saleorderdetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT de la tabla `saleorders`
--
ALTER TABLE `saleorders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `sections`
--
ALTER TABLE `sections`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `shoppingcartdetails`
--
ALTER TABLE `shoppingcartdetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT de la tabla `shoppingcarts`
--
ALTER TABLE `shoppingcarts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `billdetails`
--
ALTER TABLE `billdetails`
  ADD CONSTRAINT `billdetails_ibfk_1` FOREIGN KEY (`Bill_id`) REFERENCES `bills` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `billdetails_ibfk_2` FOREIGN KEY (`Product_id`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `bills`
--
ALTER TABLE `bills`
  ADD CONSTRAINT `bills_ibfk_1` FOREIGN KEY (`Client_id`) REFERENCES `clients` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`Section_id`) REFERENCES `sections` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `saleorderdetails`
--
ALTER TABLE `saleorderdetails`
  ADD CONSTRAINT `saleorderdetails_ibfk_1` FOREIGN KEY (`SaleOrder_id`) REFERENCES `saleorders` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `saleorderdetails_ibfk_2` FOREIGN KEY (`Product_id`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `saleorders`
--
ALTER TABLE `saleorders`
  ADD CONSTRAINT `saleorders_ibfk_1` FOREIGN KEY (`Client_id`) REFERENCES `clients` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `saleorders_ibfk_2` FOREIGN KEY (`Pm_id`) REFERENCES `pms` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `shoppingcartdetails`
--
ALTER TABLE `shoppingcartdetails`
  ADD CONSTRAINT `shoppingcartdetails_ibfk_1` FOREIGN KEY (`ShoppingCart_id`) REFERENCES `shoppingcarts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `shoppingcartdetails_ibfk_2` FOREIGN KEY (`Product_id`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `shoppingcarts`
--
ALTER TABLE `shoppingcarts`
  ADD CONSTRAINT `shoppingcarts_ibfk_1` FOREIGN KEY (`Client_id`) REFERENCES `clients` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

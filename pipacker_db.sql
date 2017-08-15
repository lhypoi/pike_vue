-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2017-08-14 10:11:07
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pipacker_db`
--

-- --------------------------------------------------------

--
-- 表的结构 `pp_atlas`
--

CREATE TABLE `pp_atlas` (
  `atlas_id` int(11) NOT NULL COMMENT '图集id',
  `atlas_title` varchar(255) DEFAULT NULL COMMENT '图集标题',
  `atlas_name` varchar(255) DEFAULT NULL COMMENT '图集名称',
  `user_id` int(11) DEFAULT NULL COMMENT '用户id'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `pp_collect`
--

CREATE TABLE `pp_collect` (
  `collect_id` int(11) NOT NULL COMMENT '收藏id',
  `user_id` int(11) DEFAULT NULL COMMENT '用户id',
  `works_id` int(11) DEFAULT NULL COMMENT '作品id'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `pp_comment`
--

CREATE TABLE `pp_comment` (
  `comment_id` int(11) NOT NULL COMMENT '评论id',
  `comment` varchar(255) DEFAULT NULL COMMENT '评论内容',
  `user_id` int(11) DEFAULT NULL COMMENT '用户id',
  `update_time` varchar(255) DEFAULT NULL COMMENT '创建时间'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `pp_follwer`
--

CREATE TABLE `pp_follwer` (
  `follwer_id` int(11) NOT NULL COMMENT '关注id',
  `follwer_user` int(11) DEFAULT NULL COMMENT '被关注用户',
  `user_id` int(11) DEFAULT NULL COMMENT '关注用户'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `pp_praise`
--

CREATE TABLE `pp_praise` (
  `praise_id` int(11) NOT NULL COMMENT '点赞id',
  `user_id` int(11) DEFAULT NULL COMMENT '用户id',
  `works_id` int(11) DEFAULT NULL COMMENT '作品id'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `pp_user`
--

CREATE TABLE `pp_user` (
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `user_name` varchar(255) DEFAULT NULL COMMENT '用户名',
  `user_phone` varchar(255) DEFAULT NULL COMMENT '用户手机',
  `user_pwd` varchar(255) DEFAULT NULL COMMENT '用户密码',
  `update_time` varchar(255) DEFAULT NULL COMMENT '创建时间',
  `user_profile` varchar(255) DEFAULT NULL COMMENT '个人简介'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `pp_works`
--

CREATE TABLE `pp_works` (
  `works_id` int(11) NOT NULL COMMENT '作品id',
  `works_title` varchar(255) DEFAULT NULL COMMENT '作品标题',
  `works_profile` varchar(255) DEFAULT NULL COMMENT '作品简介',
  `user_id` int(11) DEFAULT NULL COMMENT '用户id',
  `update_time` varchar(255) DEFAULT NULL COMMENT '创建时间',
  `works_src` varchar(255) DEFAULT NULL COMMENT '作品路径',
  `atlas_id` int(11) DEFAULT NULL COMMENT '图集id',
  `works_para` varchar(255) DEFAULT NULL COMMENT '图片参数',
  `works_type` varchar(255) DEFAULT NULL COMMENT '图片类型',
  `works_tags` varchar(255) DEFAULT NULL COMMENT '图片标签',
  `works_browse` int(11) DEFAULT NULL COMMENT '图片浏览量'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pp_atlas`
--
ALTER TABLE `pp_atlas`
  ADD PRIMARY KEY (`atlas_id`);

--
-- Indexes for table `pp_collect`
--
ALTER TABLE `pp_collect`
  ADD PRIMARY KEY (`collect_id`);

--
-- Indexes for table `pp_comment`
--
ALTER TABLE `pp_comment`
  ADD PRIMARY KEY (`comment_id`);

--
-- Indexes for table `pp_follwer`
--
ALTER TABLE `pp_follwer`
  ADD PRIMARY KEY (`follwer_id`);

--
-- Indexes for table `pp_praise`
--
ALTER TABLE `pp_praise`
  ADD PRIMARY KEY (`praise_id`);

--
-- Indexes for table `pp_user`
--
ALTER TABLE `pp_user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `pp_works`
--
ALTER TABLE `pp_works`
  ADD PRIMARY KEY (`works_id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `pp_atlas`
--
ALTER TABLE `pp_atlas`
  MODIFY `atlas_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '图集id';
--
-- 使用表AUTO_INCREMENT `pp_collect`
--
ALTER TABLE `pp_collect`
  MODIFY `collect_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '收藏id';
--
-- 使用表AUTO_INCREMENT `pp_comment`
--
ALTER TABLE `pp_comment`
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '评论id';
--
-- 使用表AUTO_INCREMENT `pp_follwer`
--
ALTER TABLE `pp_follwer`
  MODIFY `follwer_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '关注id';
--
-- 使用表AUTO_INCREMENT `pp_praise`
--
ALTER TABLE `pp_praise`
  MODIFY `praise_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '点赞id';
--
-- 使用表AUTO_INCREMENT `pp_user`
--
ALTER TABLE `pp_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id';
--
-- 使用表AUTO_INCREMENT `pp_works`
--
ALTER TABLE `pp_works`
  MODIFY `works_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '作品id';
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

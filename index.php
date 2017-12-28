<?php
	chdir(__DIR__);
	if (!defined('APP_PATH'))
		define ('APP_PATH', __DIR__ . '/');
	if (!defined('LIB'))
		define('LIB', APP_PATH . 'library');
	require APP_PATH.'init_autoloader.php' ; 
	Zend\Mvc\Application::init(require APP_PATH . 'config/application.config.php')->run(); // 启动应用程序

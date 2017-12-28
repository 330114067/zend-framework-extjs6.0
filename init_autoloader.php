<?php

if (defined('LIB')) {
        include LIB . '/Zend/Loader/AutoloaderFactory.php';
        Zend\Loader\AutoloaderFactory::factory(array(
            'Zend\Loader\StandardAutoloader' => array(
                'autoregister_zf' => true
            )
        ));
}


if (!class_exists('Zend\Loader\AutoloaderFactory')) {
	echo  '找不到地址';
    throw new RuntimeException('Unable to load ZF2. ');
}

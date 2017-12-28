<?php

return array(
     'router' => include __DIR__ . '/router.config.php',

    'service_manager' => array(
        'abstract_factories' => array(
            'Zend\Cache\Service\StorageCacheAbstractServiceFactory',
            'Zend\Log\LoggerAbstractServiceFactory',
        ),
        'aliases' => array(
            'translator' => 'MvcTranslator',
        ),
    ),
    'translator' => array(
        'locale' => 'en_US',
        'translation_file_patterns' => array(
            array(
                'type'     => 'gettext',
                'base_dir' => __DIR__ . '/../language',
                'pattern'  => '%s.mo',
            ),
        ),
    ),
    'controllers' => array(
        'invokables' => array(
            'Admin\Controller\Admin' => 'Admin\Controller\AdminController',
			'Admin\Controller\News' => 'Admin\Controller\NewsController',
        ),
    ),
    'view_manager' => array(
        'display_not_found_reason' => false,
        'display_exceptions'       => false,
        'doctype'                  => 'HTML5',
        'not_found_template'       => 'error/404',
        'exception_template'       => 'error/index',
        'template_map' => array(
            'layout/layout'           => __DIR__ . '/../view/layout/layout.phtml',
            'layout/header'           => __DIR__ . '/../view/layout/admin_header_layout.phtml',
            'layout/footer'           => __DIR__ . '/../view/layout/admin_footer_layout.phtml',
            
            'admin/admin/index' => __DIR__ . '/../view/index/index.phtml',
            'admin/admin/imgcode' => __DIR__ . '/../view/index/imgcode.phtml',
            'admin/admin/login' => __DIR__ . '/../view/index/login.phtml',
			'admin/admin/about' => __DIR__ . '/../view/index/about.phtml',
            'error/404'               => __DIR__ . '/../view/error/404.phtml',
            'error/index'             => __DIR__ . '/../view/error/index.phtml',
        ),
        'template_path_stack' => array(
            'Admin' => __DIR__ . '/../view'
        ),
    ),
    // Placeholder for console routes
    'console' => array(
        'router' => array(
            'routes' => array(
            ),
        ),
    ),
    
);

